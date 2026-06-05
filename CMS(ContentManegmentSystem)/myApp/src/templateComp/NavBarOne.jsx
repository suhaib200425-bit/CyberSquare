import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useStore from "../context/Zustand";
import { BASEURL } from "../assets/assets";

function NavBarTwo({
  backgroundColor = { value: "white" },
  textColor = { value: "black" },
  btnColor = { value: "black" },
  hoverColor = { value: "red" },
  btnTextColor = { value: "white" },
  padding = { value: "" },
  mobilePadding = { value: "" }
}) {
  const [open, setOpen] = useState(false);
  const [menus, setMenus] = useState([]);
  const [hover, setHover] = useState("");

  const { user, SetUser } = useStore();
  const {webname} = useParams()
  const Navigate = useNavigate();

  useEffect(() => {
    const getMenus = async () => {
      try {
        const response = await axios(`${BASEURL}/api/menu/get/Menus?website=${webname}`);
        setMenus(response.data.data);
        console.log(response.data);

        
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };

    getMenus();
  }, []);

  const Logout = () => {
    localStorage.removeItem("token");
    SetUser(null);
    Navigate(`/${webname}/auth`);
  };

  const ToggleMenu = () => {
    setOpen(!open);
  };

  const NavigateToAuth = () => {
    Navigate(`/${webname}/auth`);
  };

  const NavigateToPage = (slug) => {
    Navigate(slug);
    setOpen(false);
  };

  const isMobile = window.innerWidth < 768;

  return (
    <>
      <nav
        style={{
          backgroundColor: backgroundColor.value,
          padding: isMobile
            ? mobilePadding.value || "15px 10px"
            : padding.value || "15px 100px",
        }}
        className="sticky top-0 z-50 w-full backdrop-blur-md border border-white/20 px-5 py-3 flex items-center md:justify-between relative"
      >
        <div
          style={{ color: textColor.value }}
          className="block md:hidden text-xl cursor-pointer"
          onClick={ToggleMenu}
        >
          {open ? "✖" : "☰"}
        </div>

        <div className="hidden md:flex gap-5">
          {menus?.map((item, i) => (
            <Link
              key={i}
              to={`/${webname}/${item?.page?.slug}`}
              onMouseEnter={() => setHover(item?.title)}
              onMouseLeave={() => setHover("")}
              style={{
                color:
                  hover === item?.title
                    ? hoverColor.value
                    : textColor.value,
              }}
            >
              {item?.title}
            </Link>
          ))}
        </div>

        <div
          className="font-bold text-2xl w-full text-center"
          style={{ color: textColor.value }}
        >
          Digitro
        </div>

        <div className="hidden md:flex items-center gap-2">
          {user ? (
            <>
              <p style={{ color: textColor.value }}>
                {user.username}
              </p>

              <button
                style={{
                  backgroundColor: btnColor.value,
                  color: btnTextColor.value,
                }}
                onClick={Logout}
                className="p-2 text-[17px] rounded-full"
              >
                <i className="fa-solid fa-right-from-bracket"></i>
              </button>
            </>
          ) : (
            <button
              onClick={NavigateToAuth}
              style={{
                backgroundColor: btnColor.value,
                color: btnTextColor.value,
              }}
              className="whitespace-nowrap px-4 py-1.5 rounded-full"
            >
              Sign In
            </button>
          )}
        </div>
      </nav>

      {open && (
        <div className="fixed top-20 w-[100%] bg-black backdrop-blur-md rounded-sm p-3 md:hidden z-50">
          {menus?.map((item, i) => (
            <div
              key={i}
              onClick={() => NavigateToPage(`/${webname}/${item?.page?.slug}`)}
              className="block py-2 border-b border-white/20 text-white cursor-pointer"
            >
              {item?.title}
            </div>
          ))}

          {user ? (
            <div className="flex gap-5 py-1 rounded-full items-center justify-center bg-white text-black">
              <p>{user.username}</p>

              <button
                onClick={Logout}
                className="text-[17px] rounded-full"
              >
                <i className="fa-solid fa-right-from-bracket"></i>
              </button>
            </div>
          ) : (
            <button
              onClick={NavigateToAuth}
              className="bg-white text-black px-4 py-1.5 rounded-full"
            >
              Sign In
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default NavBarTwo;