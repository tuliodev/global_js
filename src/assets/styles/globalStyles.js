import { createGlobalStyle } from 'styled-components';

import Backgroundimage from '../img/background.png';

const GlobalStyle = createGlobalStyle`
   body {
       @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');   
       font-family: 'Outfit', sans-serif;
       background: url(${Backgroundimage}) no-repeat;
       background-size: cover;
       height: 100vh;
   }
`;

export default GlobalStyle;