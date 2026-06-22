import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DropdownMenu({ Height,PageMenus, setactiveMenu, activeMenu }) {
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState();

    useEffect(() => {
        console.log("PageMenus");
        console.log(PageMenus);
        console.log("PageMenus End");
        setMenu(PageMenus)
    }, [PageMenus])
    return (
        <div className="relative inline-block mb-2">
            <button
            style={{
                height:Height
            }}
                onClick={() => {

                    console.log(PageMenus);
                    setOpen(!open)
                }}
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg border border-black hover:bg-white hover:text-black transition-all"
            >
                {activeMenu.title}
                <ChevronDown size={18} />
            </button>

            {open && (


                <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-black rounded-lg shadow-lg overflow-hidden z-50">
                    {
                        PageMenus?.map(elem => {
                            if (activeMenu.title == elem.title) return
                            return <span
                                onClick={() => { 
                                    setactiveMenu(elem)
                                    setOpen(false)
                                 }}
                                className="block px-4 py-3 text-black hover:bg-black hover:text-white transition-colors"
                            >
                                {elem.title}
                            </span>
                        })
                    }

                </div>
            )}
        </div>
    );
}