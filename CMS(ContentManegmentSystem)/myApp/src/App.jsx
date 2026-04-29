import react from 'react'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from "react-router-dom";
import NotFound from './Page/NotFound/NotFound';
import axios from "axios";
import { useQuery } from '@tanstack/react-query'
import { MENUAPI, USERAPI } from './assets/assets';
import PageRoute from './Page/PageRoute/PageRoute';
import PostPgae from './Page/Post/PostPgae';
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';
import Splash from './Page/Splash/Splash';
import useStore from './context/Zustand';
function App() {
  const {SetUser}=useStore()
    const checkLoged = async () => {
      try {
        const token = localStorage.getItem('token')
        console.log(token);

        const response = await axios.get(`${USERAPI}`, {
          headers: {
            Authorization: `_ ${token}`
          }
        })
        console.log(response.data);
        SetUser(response?.data?.user)
      } catch (error) {
        console.log(error.response?.data || error.message);
      }

    }

  const { isPending, error, data: Menus } = useQuery({
    queryKey: ['repoData1'],
    queryFn: () =>
      axios.get(MENUAPI).then((res) => {
    checkLoged()
        console.log(res.data?.data)
        return res.data?.data
      }).catch(error => {
        console.log(error);

      })
  })

  // if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <NavBar Menus={Menus} />

      <Routes>


        <Route path="/" element={<Splash />} />
        <Route path="/post/:postId" element={<PostPgae />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {
          Menus?.map(menu => {
            const title = menu.page?.title
            return <Route key={menu._id} path={`/page/${title}`} element={<PageRoute title={title} />} />
          })
        }
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
