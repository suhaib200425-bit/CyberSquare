import {QueryClient} from '@tanstack/react-query'
export const queryClient = new QueryClient()

export const BASEURL ='http://172.23.112.119:5000'
// export const BASEURL='http://localhost:5000'
// export const BASEURL =' https://thee-slightly-dowry.ngrok-free.dev'

export const PAGEAPI = `${BASEURL}/api/page`
export const CATEGORYAPI = `${BASEURL}/api/category`
export const POSTAPI = `${BASEURL}/api/post`
export const MENUAPI = `${BASEURL}/api/menu`
export const TEMPLATEAPI = `${BASEURL}/api/template`
export const NAVBARTEMPLATEAPI = `${BASEURL}/api/navbar/template`
export const REACTTEPLATEAPI =`${BASEURL}/api/react/template`