
import './NavBarCollection.css'
import Navbar from '../../components/NavBar/NavBar'
import './NavBarCollection.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { NAVBARTEMPLATEAPI } from '../../assets/assets'
import { useMutation, useQuery } from '@tanstack/react-query'
import { DynamicRenderer } from '../../ComponentConvertFunction/DynamicRenderer'
import { queryClient } from '../../Context/Tanstack'
import TargetValueChange from '../../components/TargetValueChange/TargetValueChange'

import { useNavigate } from "react-router-dom";

function NavBarCollection() {
    const [ActiveNavBar, setActiveNavBar] = useState('')
    const [target, setTarget] = useState(null)
    const [navbarItems, setNavbarItems] = useState([])
    const Navigate = useNavigate()
    const listNavbar = [NavBarOne,
        SimpleNavbar,
        DropdownNavbar,
        MobileNavbar,
        StickyNavbar,
    ];

    const { isPending, error, data: NavBars } = useQuery({
        queryKey: ['NavBarTemplates'],
        queryFn: async () => {
            try {
                const token = localStorage.getItem("token")
                const response = await axios.get(NAVBARTEMPLATEAPI, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                console.log(response.data?.data);
                const activeId = response.data?.data.find(item => item.checked)?._id;
                setActiveNavBar(response.data?.active)
                setNavbarItems(response.data?.data)
                console.log(response.data);

                return response.data?.data
            } catch (error) {
                console.log(error.response?.data || error.message);

            }
        }
    })

    // Mutations
    const checkedmutation = useMutation({
        mutationFn: async (NavbarId) => {
            const token = localStorage.getItem("token")
            const response = await axios.patch(`${NAVBARTEMPLATEAPI}/checked/${NavbarId}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })

            console.log("result");
            console.log(response.data);
            console.log("result end");
            setActiveNavBar(response.data?.data)

        },
        onSuccess: (result) => {

            queryClient.invalidateQueries({ queryKey: ['NavBarTemplates'] })
        },

        onError: (error) => {
            console.log("onError called:");
            console.log(error.response?.data || error.message);

        },
    })

    // Value change Mutations
    const updatemutation = useMutation({
        mutationFn: async (NavbarId) => {
            const token = localStorage.getItem('token')
            const updateNavBar = navbarItems.find(item => item._id === NavbarId)?.props
            await axios.patch(`${NAVBARTEMPLATEAPI}/${NavbarId}`, {
                props: updateNavBar
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        },
        onSuccess: (result) => {
            alert("updated")
            queryClient.invalidateQueries({ queryKey: ['NavBarTemplates'] })
        },
        onError: (error) => {

            console.log("onError called:");
            console.log(error.response?.data || error.message);
        },
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="NavBarCollection">
            <div className="CollectionList">
                <div className="BackBtn mb-2 " onClick={() => {
                    Navigate(-1)
                }}><i class="fa-solid fa-chevron-left"></i> Back</div>
                {navbarItems?.map((Elem, i) => {

                    return <div key={i} className="NavbarItem" >

                        <div className="navBar" onClick={(e) => {
                            e.stopPropagation()
                            if (target?._id == Elem._id) setTarget(null)
                            else {
                                if (Elem._id == ActiveNavBar.navbar._id) {
                                    console.log(Elem);
                                    const changeProps = { ...Elem, props: ActiveNavBar.navbarProps }
                                    setTarget(changeProps)
                                } else setTarget(Elem)
                            }
                        }}>
                            <DynamicRenderer key={Elem._id} code={Elem.navbar} props={Elem._id === ActiveNavBar.navbar._id ? ActiveNavBar.navbarProps : Elem.props} />
                        </div>
                        <div className="checkNavbar">
                            <input onClick={(e) => {
                                checkedmutation.mutate(Elem._id)
                            }} type="radio" name="navbar" id="" v
                                checked={Elem._id === ActiveNavBar.navbar._id} style={{ color: 'green' }} />

                        </div>
                    </div>;
                })}

            </div>
            {
                target &&
                <div className="" style={{ width: "350px" }}>
                    <button className="px-3 py-2 bg-black m-2 text-white" onClick={() => {
                        updatemutation.mutate(target._id)
                    }}>SAVE</button>
                    <TargetValueChange TargetValue={target} onChangeFunction={(key, value) => {
                        setNavbarItems(prev => {
                            const valuechange = prev.map(elem => {
                                if (elem._id == target._id) {
                                    return {
                                        ...elem,
                                        props: {
                                            ...elem.props,
                                            [key]: {
                                                ...elem.props[key],
                                                value: value
                                            }
                                        }
                                    }
                                } return elem
                            })
                            console.log(valuechange);
                            console.log("valuechange");

                            return valuechange

                        })
                        setTarget(prev => {

                            return {
                                ...prev,
                                props: {
                                    ...prev.props,
                                    [key]: {
                                        ...prev.props[key],
                                        value: value
                                    }
                                }
                            }
                        })

                    }} />
                </div>
            }
        </div>
    );
}

export default NavBarCollection

function NavBarOne() {
    const [open, setOpen] = useState(false);
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        const getMenus = async () => {
            try {
                const response = await axios("http://localhost:5000/api/menu");
                setMenus(response.data.data);
            } catch (error) {
                console.log(error.response?.data || error.message);
            }
        };
        getMenus();
    }, []);

    return (
        <>
            <nav className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 flex items-center justify-between text-black relative">

                {/* Logo */}
                <div className="font-bold text-2xl">Digitro</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-5">
                    {menus?.map((item, i) => (
                        <a key={i} href={`/page/${item?.page?.slug}`} className="hover:text-orange-500 transition">
                            {item.title}
                        </a>
                    ))}
                </div>

                {/* Right Side */}
                <div className="hidden md:flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-3 py-1 border border-gray-400 rounded-lg outline-none"
                    />
                    <button className="bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-800">
                        Sign In
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div
                    className="block md:hidden text-xl cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✖" : "☰"}
                </div>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className="absolute top-20 w-[90%] bg-white/10 backdrop-blur-md rounded-xl p-3 md:hidden">
                    {menus?.map((item, i) => (
                        <a
                            key={i}
                            href={`/page/${item?.page?.slug}`}
                            className="block py-2 border-b border-white/20 text-black"
                        >
                            {item?.title}
                        </a>
                    ))}
                </div>
            )
            }
        </>
    );
}

function SimpleNavbar() {
    const [Menus, setMenus] = useState([])
    useEffect(() => {
        const getMenus = async () => {
            try {
                const response = await axios("http://localhost:5000/api/menu");
                setMenus(response.data.data);
            } catch (error) {
                console.log(error.response?.data || error.message);
            }
        };
        getMenus();
    }, []);
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
            <h1 className="text-lg font-bold">Logo</h1>
            <ul className="flex gap-6">
                {
                    Menus?.map((item, i) => (
                        <li><a href={`/page/${item?.page?.slug}`}>{item?.title}</a></li>
                    )
                    )}
                <li className='ms-2' style={{ color: 'red' }}>LOGOUT</li>
            </ul>
        </nav>
    );
}


function DropdownNavbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
            <h1 className="font-bold">Logo</h1>

            <div className="relative">
                <button onClick={() => setOpen(!open)}>Services ▾</button>

                {open && (
                    <ul className="absolute bg-white text-black mt-2 p-2 shadow rounded">
                        <li className="p-2 hover:bg-gray-200">Web Design</li>
                        <li className="p-2 hover:bg-gray-200">SEO</li>
                    </ul>
                )}
            </div>
        </nav>
    );
}


function MobileNavbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-black text-white p-4">
            <div className="flex justify-between items-center">
                <h1>Logo</h1>

                <div
                    className="block md:hidden text-2xl cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✖" : "☰"}
                </div>

                <ul className="hidden md:flex gap-6">
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </div>

            {open && (
                <ul className="flex flex-col mt-4 gap-4 md:hidden">
                    <li>Home</li>
                    <li>About</li>
                </ul>
            )}
        </nav>
    );
}

function SidebarNavbar() {
    return (
        <div className="flex">
            <div className="w-64 h-screen bg-gray-800 text-white p-4">
                <h1 className="mb-6 font-bold">Dashboard</h1>
                <ul className="space-y-4">
                    <li>Home</li>
                    <li>Users</li>
                    <li>Settings</li>
                </ul>
            </div>

            <div className="flex-1 p-6">Main Content</div>
        </div>
    );
}

function StickyNavbar() {
    return (
        <nav className="sticky top-0 bg-white shadow p-4 flex justify-between">
            <h1 className="font-bold">Logo</h1>
            <ul className="flex gap-6">
                <li>Home</li>
                <li>About</li>
            </ul>
        </nav>
    );
}