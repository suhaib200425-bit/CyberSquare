import React from 'react'
import './CategoryList.css'
import { CATEGORYAPI } from '../../assets/assets';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
function CategoryList() {
    const { isPending, error, data: Categories } = useQuery({
        queryKey: ['repoData3'],
        queryFn: async () => {
            const res = await axios.get(CATEGORYAPI);
            console.log(CATEGORYAPI);
            console.log(res.data?.data);
            return res.data?.data; // ✅ MUST return here

        }
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: + ${error.message}'

    return (
        <div className='CategoryList'>
            {
                Categories?.map(elem => (
                    <div key={elem._id} className="items">{elem.title}</div>
                ))
            }
        </div>
    )
}

export default CategoryList