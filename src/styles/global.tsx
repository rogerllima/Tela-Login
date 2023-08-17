import { createGlobalStyle } from 'styled-components'
import img from '../images/photo-2-photo.jpg'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-image: url(src\images\page-photo.jpg);
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: white;
        font-family: Arial, Helvetica, sans-serif;
        background-image: url(${img})

    }

    li {
        list-style: none;
    }
    
    ul{
        text-decoration: none;
    }
    a{
        
        text-decoration: none;
    }
`;

export default GlobalStyle;









