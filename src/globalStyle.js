import {createGlobalStyle} from 'styled-components';
import WebFont from 'webfontloader';

WebFont.load({
  google:{
      families:['PT-sans','sans-serif']
  }
})
const GlobalStyle=createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "PT Sans", sans-serif;
}
`

export default GlobalStyle;