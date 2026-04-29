import React from 'react'
import { PAGEAPI } from '../../assets/assets'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import NotFound from '../NotFound/NotFound'
import CategoryList from '../../components/CategoryList/CategoryList';
import PostRow from '../../components/PostRow/PostRow';
function PageRoute({ title }) {

  const { isPending, error, data: Page } = useQuery({
    queryKey: ['repoData2'],
    queryFn: async () => {
      const res = await axios.get(`${PAGEAPI}/title/${title ? title : 'HomePage'}`);
      console.log(res.data?.data);
      return res.data?.data; // ✅ MUST return here

    }
  })

  if (isPending) return 'Loading...'

  // if (error) return <NotFound error={`An error has occurred: + ${error.message}`} />

  function renderTemplate(html, values) {
    let output = html;

    for (let key in values) {
      const regex = new RegExp(`{{${key}}}`, "g");
      output = output.replace(regex, values[key].value);
    }

    return output;
  }

  return (
    <div className="Sections w-full" >
      {
         Page?.sections?.map((elem, i) => {
          console.log(elem);
          return <div className="PagesColumn" key={elem._id}
            dangerouslySetInnerHTML={{ __html: renderTemplate(elem.template, elem.values) }}>

          </div>

        })

      }

      {Page && Page?.slug == '/home' && <CategoryList />}
      {Page && Page?.slug == '/home' && <PostRow />}
    </div>
  )
}

export default PageRoute