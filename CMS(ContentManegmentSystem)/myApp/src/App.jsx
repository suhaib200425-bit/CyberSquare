import react, { useState } from 'react'
import { DynamicRenderer } from './ComponentConvertFunction/DynamicRenderer'
import { useQuery } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import PageRoute from './Page/PageRoute/PageRoute';
import NotFound from './Page/NotFound/NotFound';
import Demo from './templateComp/demo/demo';
import { AUTHTEMPLATEAPI, BASEURL, FOOTERTEMPLATEAPI, NAVBARTEMPLATEAPI, PAGEAPI, USERAPI } from './assets/assets';
import SingleArticlePage from './templateComp/SingleArticlePage/SingleArticlePage';
import AuthOne from './templateComp/AuthOne/AuthOne';
import Auth from './templateComp/Auth/Auth';
import useStore from './context/Zustand';
import NavBarOne from './templateComp/NavBarOne';
import Loading from './Page/Loading/Loading';
import Main from './Page/Templates/main';
function App() {
  const location = useLocation();
  const Navigate = useNavigate()
  const { SetUser } = useStore()
  const [validRoutes, setValidRoutes] = useState([])
  const pathname = window.location.pathname
  const webname = pathname.split("/")[1]

  const { data, isPending, error } = useQuery({
    queryKey: ["MULTI_API"],
    queryFn: async () => {


      // setTimeout(async () => {

      //   try {

      //     const token = localStorage.getItem("token");

      //     const LogedeResponse = await axios.get(USERAPI, {
      //       headers: {
      //         Authorization: `Bearer ${token}`
      //       }
      //     });
      //     SetUser(LogedeResponse.data?.user)
      //     // Navigate('/home')

      //   } catch (err) {

      //     Navigate('/auth')
      //     console.log(
      //       err.response?.data || err.message
      //     );
      //   }

      // }, 2000);

      console.log("webname");
      console.log(webname);
      console.log("webname end");

      return Promise.all([
        axios.get(`${BASEURL}/api/web/${webname}`)
      ]).then(([response]) => {
        const routes = response.data?.pages
        console.log(routes);

        setValidRoutes(routes)
        // console.log(response.data);

        return {
          pages: response.data?.pages,
          auth: response.data?.data?.auth,

        };
      });
    }
  });

  if (isPending) return <Loading />

  if (error) return < NotFound />



  return (
    <div className='w-full'>

      <Routes>

        <Route path={`/:webname/demo`} element={<Demo />} />
        <Route path={`/:webname/main`} element={<Main />} />
        <Route path={`/loading`} element={<Loading />} />
        <Route path={`/`} element={<Demo />} />
        {
          data && data?.auth && <Route path={`/:webname/auth`} element={< DynamicRenderer code={data?.auth.template} props={data?.auth.props} />} />
        }


        {
          data && data?.pages?.map(page => {

            const pageId = page?._id
            const slug = page?.slug
            console.log(`${slug}`);
            return <Route key={pageId} path={`/:webname${slug}`} element={<PageRoute slug={slug} pageId={pageId} />} />
          })
        }
        <Route path="*" element={<NotFound />} />
      </Routes>


    </div>
  )
}

export default App
