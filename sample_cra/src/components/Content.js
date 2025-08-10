import 'C:/Users/shiva/OneDrive/Desktop/react/CRA/sample_cra/src/componentsCSS/Content.css'
import { HiOutlineEmojiSad } from "react-icons/hi";
import ListItems from './ListItems';
const Content = ({items, handleCheck, handleDelete}) => {

    return (
        <>
            {
                items.length ? (
                    <ListItems 
                        items = {items}
                        handleCheck = {handleCheck}
                        handleDelete = {handleDelete}
                    />
                ) :
                (
                    <div>
                        <h1 style = {{ marginTop:'7rem'}}><center>Your List is Empty!</center></h1>
                        <HiOutlineEmojiSad />
                    </div>
                )
            }           
        </>
    );
}

export default Content