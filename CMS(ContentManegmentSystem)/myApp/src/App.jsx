import react, { useState } from 'react'
import { DynamicRenderer } from './ComponentConvertFunction/DynamicRenderer'
import { useQuery } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import PageRoute from './Page/PageRoute/PageRoute';
import NotFound from './Page/NotFound/NotFound';
import Demo from './templateComp/demo/demo';
import { AUTHTEMPLATEAPI, FOOTERTEMPLATEAPI, NAVBARTEMPLATEAPI, PAGEAPI, USERAPI } from './assets/assets';
import SingleArticlePage from './templateComp/SingleArticlePage/SingleArticlePage';
import AuthOne from './templateComp/AuthOne/AuthOne';
import Auth from './templateComp/Auth/Auth';
import useStore from './context/Zustand';
import NavBarOne from './templateComp/NavBarOne';
import Loading from './Page/Loading/Loading';
function App() {
  const hideNavbarRoutes = ["/auth", "/", "/demo", "*"];

  const location = useLocation();
  const Navigate = useNavigate()
  const { SetUser } = useStore()
  const [validRoutes, setValidRoutes] = useState([])
  const { data, isPending, error } = useQuery({
    queryKey: ["MULTI_API"],
    queryFn: async () => {

      console.log("NAVBARTEMPLATEAPI");
      console.log(NAVBARTEMPLATEAPI);
      setTimeout(async () => {

        try {

          const token = localStorage.getItem("token");

          const LogedeResponse = await axios.get(USERAPI, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          SetUser(LogedeResponse.data?.user)
          // Navigate('/home')

        } catch (err) {

          Navigate('/auth')
          console.log(
            err.response?.data || err.message
          );
        }

      }, 2000);

      return Promise.all([
        axios.get(`${NAVBARTEMPLATEAPI}/checked`),
        axios.get(`${PAGEAPI}`),
        axios.get(`${AUTHTEMPLATEAPI}/checked`),
        axios.get(`${FOOTERTEMPLATEAPI}/checked`)
      ]).then(([navbar, pages, auth, footer]) => {
        const routes = pages.data?.data.map(elem => elem.slug)
        setValidRoutes(routes)
        console.log("routes");
        console.log(routes);
        console.log("routes end");

        return {
          navbar: navbar.data?.data,
          pages: pages.data?.data,
          auth: auth.data?.data,
          footer: footer.data?.data
        };
      });
    }
  });

  if (isPending) return <Loading />

  if (error) return 'An error has occurred: ' + error.message



  return (
    <div className='w-full'>


      {
        !hideNavbarRoutes.includes(location.pathname) &&
        data && <DynamicRenderer code={data.navbar?.navbar} props={data?.navbar?.props} />
      }

      <Routes>

        <Route path={`/demo`} element={<Demo />} />
        <Route path={`/loading`} element={<Loading />} />
        {
          data && data?.auth && <Route path={`/auth`} element={< DynamicRenderer code={data?.auth.template} props={data?.auth.props} />} />
        }


        {
          data && data?.pages?.map(page => {

            const pageId = page?._id
            const slug = page?.slug
            console.log(`${slug}`);
            return <Route key={pageId} path={`${slug}`} element={<PageRoute slug={slug} pageId={pageId} />} />
          })
        }
        <Route path="*" element={<NotFound />} />
      </Routes>

      {
        !hideNavbarRoutes.includes(location.pathname) &&
        data && <DynamicRenderer code={data.footer?.footer} props={data?.footer?.props} />
      }
    </div>
  )
}

export default App
