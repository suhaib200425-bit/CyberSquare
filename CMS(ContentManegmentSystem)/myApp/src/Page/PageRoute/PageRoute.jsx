import React from 'react'
import { DynamicRenderer } from '../../ComponentConvertFunction/DynamicRenderer';
import axios from 'axios';
import { useQuery } from "@tanstack/react-query";
import { PAGEAPI } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

function PageRoute({ slug, pageId }) {
    const Navigate = useNavigate()
    const { data, isPending, error } = useQuery({

        queryKey: ["PageBySLug", pageId],
        queryFn: async () => {
            window.scrollTo(0, 0)
            try {

                // if (slug == '/') Navigate('/home')
                const res = await axios.get(`${PAGEAPI}/${pageId}`);
                console.log(res.data.data);

                

                return res.data?.data;


            } catch (err) {

                console.log(err.response?.data || err.message);

            }

        }
    });

    if (isPending) return <Loading/>

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='w-full'>
            {
                data && data?.sections?.map((elem, i) => {
                    return < DynamicRenderer code={elem.template} props={elem.props} />
                })
            }

        </div>
    )
}

export default PageRoute