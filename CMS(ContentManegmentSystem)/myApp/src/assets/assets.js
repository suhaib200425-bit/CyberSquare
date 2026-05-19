import {QueryClient} from '@tanstack/react-query'
export const queryClient = new QueryClient()

export const BASEURL ='http://10.153.189.119:5000'
// export const BASEURL='http://localhost:5000'
// export const BASEURL =' https://http://192.168.31.24:5000thee-slightly-dowry.ngrok-free.dev'
export const PAGEAPI = `${BASEURL}/api/page`
export const CATEGORYAPI = `${BASEURL}/api/category`
export const POSTAPI = `${BASEURL}/api/post`
export const MENUAPI = `${BASEURL}/api/menu`
export const USERAPI = `${BASEURL}/api/user`
export const TEMPLATEAPI = `${BASEURL}/api/template`
export const NAVBARTEMPLATEAPI = `${BASEURL}/api/navbar/template`
export const REACTTEPLATEAPI =`${BASEURL}/api/react/template`
export const AUTHTEMPLATEAPI =`${BASEURL}/api/auth/template`
export const FOOTERTEMPLATEAPI =`${BASEURL}/api/footer/template`


const themeModel = {
  light: {
    background: "#ffffff",
    text: "#000000",
    primary: "#2563eb",
    secondary: "#f3f4f6",
    border: "#e5e7eb"
  },

  dark: {
    background: "#0f172a",
    text: "#ffffff",
    primary: "#3b82f6",
    secondary: "#1e293b",
    border: "#334155"
  },

  ocean: {
    background: "#0f172a",
    text: "#e0f2fe",
    primary: "#06b6d4",
    secondary: "#164e63",
    border: "#155e75"
  },

  sunset: {
    background: "#fff7ed",
    text: "#7c2d12",
    primary: "#f97316",
    secondary: "#fed7aa",
    border: "#fdba74"
  }
};

export default themeModel;