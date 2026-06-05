import React from 'react'
import { DynamicRenderer } from '../../ComponentConvertFunction/DynamicRenderer';
import axios from 'axios';
import { useQuery } from "@tanstack/react-query";
import { BASEURL, PAGEAPI } from '../../assets/assets';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

function PageRoute({ slug, pageId }) {
    const { webname } = useParams()
    const hideNavbarRoutes = ["/auth", "/demo", `/${webname}/`, "*"];

    const Navigate = useNavigate()
    const { data, isPending, error } = useQuery({

        queryKey: ["PageBySLug", pageId],
        queryFn: async () => {
            window.scrollTo(0, 0)
            return Promise.all([
                axios.get(`${BASEURL}/api/web/${webname}`),
                axios.get(`${PAGEAPI}/getbyid/${pageId}`)
            ]).then(([response, page]) => {

                return {
                    activePage: page.data?.data,
                    navbar: response.data?.data?.navbar,
                    navbarProps: response.data?.data?.navbarProps,
                    pages: response.data?.pages,
                    auth: {},
                    footer: response.data?.data?.footer
                };
            }).catch(error=>{
                console.log(error.response?.data || error.message);
                
            });


        }
    });

    if (isPending) return <Loading />

    if (error) return 'An error has occurred: ' + error.message

    return (
        <>
            {
                !hideNavbarRoutes.includes(location.pathname) &&
                data && <DynamicRenderer code={data?.navbar?.navbar} props={data?.navbarProps} />
            }
            <div className='w-full'>
                {
                    data && data?.activePage?.sections?.map((elem, i) => {
                        return < DynamicRenderer code={elem.template} props={elem.props} />
                    })
                }

            </div>

            {
                !hideNavbarRoutes.includes(location.pathname) &&
                data && <DynamicRenderer code={data.footer?.footer} props={data?.footer?.props} />
            }

        </>
    )
}

export default PageRoute