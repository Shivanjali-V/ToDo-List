import 'C:/Users/shiva/OneDrive/Desktop/react/CRA/sample_cra/src/componentsCSS/Header.css'


const Header = (props) => {

    return(
        <header className='header'>
            <h1>{props.title}</h1>
        </header>      
    );
}

export default Header;