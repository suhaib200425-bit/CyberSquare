import { useEffect, useState } from "react";
import axios from "axios";

export default function NavBarOne() {
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
            <a key={i} href="#" className="hover:text-orange-500 transition">
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
              href="#"
              className="block py-2 border-b border-white/20 text-black"
            >
              {item.title}
            </a>
          ))}
        </div>
      )
    }
      </>
  );
}