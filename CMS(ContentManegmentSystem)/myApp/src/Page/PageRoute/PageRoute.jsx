import React from 'react'
import { DynamicRenderer } from '../../ComponentConvertFunction/DynamicRenderer';
import axios from 'axios';
import { useQuery } from "@tanstack/react-query";
import { PAGEAPI } from '../../../../CMS/src/assets/assets';

function PageRoute({ slug }) {

    const { data, isPending, error } = useQuery({
        queryKey: ["PageBySLug"],
        queryFn: async () => {
                const res = await axios.get(`${PAGEAPI}/slug/${slug}`);
                console.log(res.data.data);
                return res.data?.data;
            
        }
    });

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            {
                data && data?.sections?.map((elem, i) => {
                    return < DynamicRenderer code={elem.template} props={elem.props} />
                })
            }

        </div>
    )
}

export default PageRoute