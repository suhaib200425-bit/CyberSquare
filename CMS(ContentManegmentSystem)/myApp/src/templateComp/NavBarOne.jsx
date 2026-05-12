import { useEffect, useState } from "react";
import axios from "axios";
import { BASEURL } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../context/Zustand";

export default function NavBarOne({
  backgroundColor={value:'black'},
  textColor={value:"white"},
  btnColor={value:"white"},
  hoverColor={value:"red"},
  btnTextColor={value:"black"},
  padding={value:"10px"}
}) {

  const [open, setOpen] = useState(false);
  const [menus, setMenus] = useState([]);
  const [hover,setHover] = useState(false)
  const { user, SetUser } = useStore()
  const Navigate = useNavigate()
  useEffect(() => {

    const getMenus = async () => {

      try {

        const response = await axios(
          `${BASEURL}/api/menu`
        );

        setMenus(response.data.data);

      } catch (error) {

        console.log(
          error.response?.data || error.message
        );

      }

    };

    getMenus();

  }, []);

  return (
    <>

      <nav
      style={{backgroundColor:backgroundColor.value,}}
      
        className="
                    sticky
                    top-0
                    z-50
                    w-full
                    bg-white
                    backdrop-blur-md
                    border
                    border-white/20
                    px-5
                    py-3
                    flex
                    items-center
                    justify-between
                    text-black
                    relative
                "
      >

        {/* LOGO */}
        <div className="font-bold text-2xl" style={{color:textColor.value}}>
          Digitro
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-5">
          {
            menus?.map((item, i) => (

              <Link

      onMouseEnter={() => setHover(item?.title)}

      onMouseLeave={() => setHover('')}
              style={{color: hover==item?.title ? hoverColor.value : textColor.value}}
                key={i}
                to={item?.page?.slug}
                className="
                                    hover:text-orange-500
                                    transition
                            "
              >{item?.title}</Link>

            ))
          }

        </div>

        {/* DESKTOP RIGHT */}
        <div className="hidden md:flex items-center gap-2">

          <input
            type="text"
            placeholder="Search"
            className="
                            px-3
                            py-1
                            border
                            border-gray-400
                            rounded-lg
                            outline-none
                        "
          />
          {
            user ?
              <>
                <p style={{color:textColor.value}}>{user.username}</p>
                <button
                style={{backgroundColor:btnColor.value,color:btnTextColor.value}}
                  onClick={() => {
                    localStorage.setItem("token", null)
                    SetUser(null)
                  }}
                  className="
                            bg-black
                            text-white
                            p-2
                            text-[17px]
                            rounded-full
                            hover:bg-gray-800
                        "
                >
                  <i class="fa-solid fa-right-from-bracket"></i>
                </button>
              </>
              : <button
                onClick={() => {
                  Navigate('/auth')
                }}
                className="
                            bg-black
                            text-white
                            px-4
                            py-1.5
                            rounded-full
                            hover:bg-gray-800
                        "
              >
                Sign In
              </button>
          }


        </div>

        {/* MOBILE MENU BUTTON */}
        <div
        style={{color:textColor.value}}
          className="
                        block
                        md:hidden
                        text-xl
                        cursor-pointer
                    "
          onClick={() => setOpen(!open)}
        >
          {open ? '✖' : '☰'}
        </div>

      </nav>

      {/* MOBILE MENU */}
      {
        open && (

          <div
            className="
                            fixed
                            top-20
                            //left-1/2
                            //-translate-x-1/2
                            w-[90%]
                            bg-black
                            backdrop-blur-md
                            rounded-xl
                            p-3
                            md:hidden
                            z-50
                        "
          >

            {
              menus?.map((item, i) => (

                <Link
                  key={i}
                  to={item?.page?.slug}
                  className="
                                        block
                                        py-2
                                        border-b
                                        border-white/20
                                        text-white
                                    "
                >{item?.title}</Link>

              ))
            }
            {
              user ?
                <div className="flex gap-5 py-1 
                            rounded-full item-center justify-center bg-white text-black">
                  <p className="text-black">{user.username}</p>
                  <button
                    onClick={() => {
                      localStorage.setItem("token", null)
                      SetUser(null)
                    }}
                    className="
                            text-black
                            text-[17px]
                            rounded-full
                            // hover:bg-gray-800
                        "
                  >
                    <i className="text-black fa-solid fa-right-from-bracket"></i>
                  </button>
                </div>
                : <button
                  onClick={() => {
                    Navigate('/auth')
                  }}
                  className="
                            bg-white
                            text-black
                            px-4
                            py-1.5
                            rounded-full
                            // hover:bg-gray-800
                        "
                >
                  Sign In
                </button>
            }


          </div>

        )
      }

    </>
  );

}