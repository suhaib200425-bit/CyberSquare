import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASEURL } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

function Categories(
    padding = { value: "0px" },
    mobilePadding = { value: "" },
    margin = { value: "20px 0px" },
    title = { value: "Title vhv" },
    subTitle = { value: "SubTitle" }
) {
    const [categoriesList, setCategoriesList] = useState([])

    const Navigate = useNavigate()
    useEffect(() => {
        const GetCategories = async () => {
            try {
                await axios.get(`${BASEURL}/api/category`).then(result => {
                    setCategoriesList(result.data?.data);
                    console.log('then');


                })
            } catch (error) {
                console.log(error.response?.data || error.message);

            }
        }
        GetCategories()
    }, [])
    const isMobile = window.innerWidth < 768;
    return (
        <div className='overflow-hidden' style={{
            margin: margin.value,
            padding: isMobile  ? mobilePadding.value || "0px 10px" : padding.value || "0px 100px",
        }}>
            <div className="flex justify-between gap-3">
                <div className="content">
                    <h2 className='text-[19px] md:text-[23px]'>{title.value || 'Explore Our Categories'}</h2>
                    <p className='leading-none mb-2 text-gray-500 text-[14px] md:text-[17px]'>{subTitle.value || "whatever your needs We have the perfect article"}</p>
                </div>
                {/* <button className='h-max px-2 py-1 rounded-[5px] bg-black text-white whitespace-nowrap'>View</button> */}
            </div>
            <div className="categories flex gap-2  overflow-hidden overflow-x-auto scrollbar-hide">


                <div
                    key={'all'}
                    className="
                            bg-gray-200 
                            text-black 
                            px-3 
                            py-1 
                            rounded-[5px]
                        "
                    onClick={() => {
                        Navigate(`/category`)
                    }}>All
                </div>

                {

                    categoriesList?.map(elem => {
                        return <div
                            key={elem._id}
                            className="
                            bg-gray-200 
                            text-black 
                            px-3 
                            py-1 
                            rounded-[5px]
                        "
                            onClick={() => {
                                Navigate(`/category/${elem.slug}?category=${elem.title}`)
                            }}>{elem.title}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Categories