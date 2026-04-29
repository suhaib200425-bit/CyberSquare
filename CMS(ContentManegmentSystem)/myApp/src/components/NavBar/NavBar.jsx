import { useState } from "react";
import './NavBar.css'
import { MENUAPI } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import useStore from "../../context/Zustand";

const NavBar = ({ Menus }) => {

    const [open, setOpen] = useState(false);

    const Navigate = useNavigate()

    const { user } = useStore()

    return (
        <nav className="w-full bg-black z-50 bg-white backdrop-blur-lg border-b border-white/10">

            <div className="NavBar max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <div className="text-2xl font-bold  tracking-wider">
                    MyBrand
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10 text-sm uppercase tracking-widest text-gray-700">
                    {Menus?.map((menu, i) => (
                        <a
                            key={menu._id}
                            href={`/page/${menu.page?.title}`}
                            className="relative hover:text-black transition"
                        >
                            {menu.title}
                            <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-white transition-all duration-300 hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Buttons */}
                <div className="hidden md:flex gap-3">
                    {
                        user != null ? <> <button onClick={() => {
                            console.log('log');

                            // Navigate('/login')
                        }} className="py-2 px-3 text-black rounded-full font-semibold">
                            {user.username}
                        </button>
                            <button onClick={() => {
                                console.log('log');

                                Navigate('/login')
                            }} className="py-2 px-3 bg-yellow-500 text-black rounded-full font-semibold">
                                Logout
                            </button> </>
                            : <button onClick={() => {
                                console.log('log');

                                Navigate('/login')
                            }} className="py-2 px-3 bg-yellow-500 text-black rounded-full font-semibold">
                                Sign Now
                            </button>
                    }
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white text-2xl"
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu (Full Screen Overlay) */}
            {open && (
                <div className="fixed h-max top-[60px] inset-0 bg-black flex flex-col items-center justify-center gap-2 pt-3 pb-3 text-white text-xl tracking-widest">

                    {Menus?.map((menu, i) => (
                        <a key={i} href={`/page/${menu.page?.title}`} onClick={() => setOpen(false)}>
                            {menu.title}
                        </a>
                    ))}

                    <div className="flex flex-col gap-4 mt-6 mb-5 w-max">
                        {
                            user != null ? <button onClick={() => {
                                console.log('log');

                                // Navigate('/login')
                            }} className="py-2 px-3 bg-yellow-500 text-black rounded-full font-semibold">
                                {user.username}
                            </button>
                                : <button onClick={() => {
                                    console.log('log');

                                    Navigate('/login')
                                }} className="py-2 px-3 bg-yellow-500 text-black rounded-full font-semibold">
                                    Sign Now
                                </button>
                        }

                    </div>

                </div>
            )}
        </nav>
    );
};

export default NavBar;