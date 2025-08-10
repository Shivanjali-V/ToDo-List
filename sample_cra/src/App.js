import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import 'C:/Users/shiva/OneDrive/Desktop/react/CRA/sample_cra/src/App.css';
import { useEffect, useState } from "react";
import { AddItem } from "./components/AddItem";
import SearchItem from "./components/SearchItem";
import { BiSolidError } from "react-icons/bi";
import ApiRequest from "./components/ApiRequest";


function App(){

  const API_URL = "http://localhost:3500/items";
  const [items,setItems] = useState([]);
  const [newItem,setNewItem] = useState('')
  const [checkedItem, setCheckedItems] = useState('')
  const [search, setSearch] = useState('')
  const [error,setError] = useState(null);
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error("Error in Fetching Data")
        const listItems = await response.json();
        setItems(listItems)
      }
      catch(err){
        setError(err.message)
      }
      finally{
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())()
    }, 2000)
  },[])

  const addItem = async (item) => {
    const id = items.length ? (Number(items[items.length - 1].id)+ 1).toString() : 1;
    const addNewItem = {id, checked:false, item}

    const postOptions = {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(addNewItem)
    }

    const result = await ApiRequest(API_URL,postOptions)
    if(result) setError(result)
    
    const UpdatedArray = [...items, addNewItem]
    setItems(UpdatedArray)

  }
    
  const handleCheck = async (id) => {
    const UpdatedArray = items.map((item) =>
      item.id === id ? {...item, checked:!item.checked} : item
    )
    const myItem = UpdatedArray.filter((item) => item.id === id)
    setItems(UpdatedArray)

    const updateOptions = {
      method : 'PATCH',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({checked:myItem[0].checked})
    }

    const tempUrl = `${API_URL}/${id}`
    const result = await ApiRequest(tempUrl,updateOptions)
    if(result) setError(result)

  }

  const handleDelete = async (id) => {
    const UpdatedArray = items.filter((item) => item.id!==id).map((item) => item)
    setItems(UpdatedArray)

    const deleteOptions = {
      method : 'DELETE'
    }

    const tempUrl = `${API_URL}/${id}`
    const result = await ApiRequest(tempUrl,deleteOptions)
    if(result) setError(result)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newItem) return;
    addItem(newItem)
    setNewItem('')
  }

  const handleCheckedItems = () => {
    const checkedItem = items.filter((item) => item.checked === true)
    setCheckedItems(checkedItem)
  }


  return(
    <div className="App">
      <Header 
        title="To do List"
      />
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
        handleCheckedItems = {handleCheckedItems}
      />
      <SearchItem 
        search = {search}
        setSearch = {setSearch}
      />
      <main>
        {isLoading && <p>Loading items..</p>}
        {error && <><p>{`Error : ${error}`}</p><span><BiSolidError /></span></>}
        {!isLoading && !error && <Content 
          items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />}
      </main>
      <Footer 
        length = {items.length}
        checkedItemLength = {checkedItem.length}
      />
    </div>
  )
}

export default App;