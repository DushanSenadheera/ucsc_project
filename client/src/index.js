`@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');`
import { createGlobalStyle } from "styled-components";

export const theme = {
    colors: {
        body: '#dec9e9',
        text: '#333'
    },
    fonts:{
        primary: 'Arial, sans-serif'
    }
}

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: whitesmoke;
        font-family: "Poppins", sans-serif;
    }
`

