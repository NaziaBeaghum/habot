import { lightBlue } from '@mui/material/colors';
import { height } from '@mui/system';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        header:"#6D6E71",
        btn:"#00732F"  ,
        orange:"#E7760D",
        royalblue:"#072F57",
        lightred:"#EB7150",
        lightBlue:"#E8FBFF"
      },
      fontFamily:
      {
        poppins:"Poppins",
      },
      screens: {
        'xs':'0px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      backgroundImage: {
        'rectangle': "url('/Rectangle 1.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      height:{
        heightmd:"420px",
        heightxs:"630px",
        heightmed:"270px"
      }
      
    },
  },
  plugins: [],
}

