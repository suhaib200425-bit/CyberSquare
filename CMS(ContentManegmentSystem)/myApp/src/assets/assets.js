import {QueryClient} from '@tanstack/react-query'
export const queryClient = new QueryClient()

// export const BASEURL='http://localhost:5000'
export const BASEURL='http://10.207.101.119:5000'

export const PAGEAPI=`${BASEURL}/api/page`
export const CATEGORYAPI=`${BASEURL}/api/category`
export const POSTAPI=`${BASEURL}/api/post`
export const MENUAPI=`${BASEURL}/api/menu`
export const USERAPI=`${BASEURL}/api/user`