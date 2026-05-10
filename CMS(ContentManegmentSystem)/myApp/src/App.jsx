import react from 'react'
import { DynamicRenderer } from './ComponentConvertFunction/DynamicRenderer'
import { useQuery } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import axios from 'axios';
import PageRoute from './Page/PageRoute/PageRoute';
import NotFound from './Page/NotFound/NotFound';
import Demo from './templateComp/demo/demo';
import { AUTHTEMPLATEAPI, NAVBARTEMPLATEAPI, PAGEAPI } from './assets/assets';
import SingleArticlePage from './templateComp/SingleArticlePage/SingleArticlePage';
import AuthOne from './templateComp/AuthOne/AuthOne';
import Auth from './templateComp/Auth/Auth';
function App() {
const hideNavbarRoutes = ["/auth", "/"];
  const location = useLocation();
  const { data, isPending, error } = useQuery({
    queryKey: ["MULTI_API"],
    queryFn: () => {
      console.log("NAVBARTEMPLATEAPI");
      console.log(NAVBARTEMPLATEAPI);

      return Promise.all([
        axios.get(`${NAVBARTEMPLATEAPI}/checked`),
        axios.get(`${PAGEAPI}`),
        axios.get(`${AUTHTEMPLATEAPI}/checked`)
      ]).then(([navbar, pages, auth]) => {
        return {
          navbar: navbar.data?.data,
          pages: pages.data?.data,
          auth:auth.data?.data
        };
      });
    }
  });

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message



  return (
    <div className='w-full'>
      

{
  !hideNavbarRoutes.includes(location.pathname) &&
  data &&  <DynamicRenderer code={data.navbar?.navbar} />
  
}
      <Routes>

        {/* <Route path={`/`} element={<Demo />} /> */}
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
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  )
}

export default App
