import react from 'react'
import { DynamicRenderer } from './ComponentConvertFunction/DynamicRenderer'
import { useQuery } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import PageRoute from './Page/PageRoute/PageRoute';
import NotFound from './Page/NotFound/NotFound';
import Demo from './templateComp/demo/demo';
import { NAVBARTEMPLATEAPI, PAGEAPI } from './assets/assets';
import SingleArticlePage from './templateComp/SingleArticlePage/SingleArticlePage';
function App() {

  const { data, isPending, error } = useQuery({
    queryKey: ["MULTI_API"],
    queryFn: () => {
      console.log("NAVBARTEMPLATEAPI");
      console.log(NAVBARTEMPLATEAPI);
      
      return Promise.all([
        axios.get(`${NAVBARTEMPLATEAPI}/checked`),
        axios.get(`${PAGEAPI}`)
      ]).then(([navbar, pages]) => {
        return {
          navbar: navbar.data?.data,
          pages: pages.data?.data
        };
      });
    }
  });

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className='w-full'>
      {data && <DynamicRenderer code={data.navbar?.navbar} />}


      <Routes>

        <Route path={`/`} element={<Demo />} />
        {/* <Route path={`/post/:id`} element={<SingleArticlePage />} /> */}

        {
          data && data?.pages?.map(page => {
            const pageId = page?._id
            const slug = page?.slug
            return <Route key={pageId} path={`/${slug}`} element={<PageRoute slug={slug} pageId={pageId} />} />
          })
        }
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  )
}

export default App
