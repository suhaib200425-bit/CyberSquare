import React from 'react'
import './LeftSideBar.css'
import useStore from '../../Context/Zustand'
function LeftSideBar() {
const {ActiveLeftMenu}=useStore()
    return (
        <div className='LeftSideBar' style={{width:ActiveLeftMenu?'200px':'60px'}}>
            <h6 className={!ActiveLeftMenu?'Opacity':''}>Content</h6>
            <MenuIcon Title={'Dashboard'} Icon={<i class="fa-solid fa-table-cells-large"></i>} />
            <MenuIcon Title={'Posts'} Icon={<i class="fa-regular fa-note-sticky"></i>} />
            <MenuIcon Title={'Pages'} Icon={<i class="fa-solid fa-file-lines"></i>} />
            <MenuIcon Title={'Categories'} Icon={<i class="fa-solid fa-layer-group"></i>} />
            <h6 className={!ActiveLeftMenu?'Opacity':''} >Design</h6>
            <MenuIcon Title={'Page Builder'} Icon={<i class="fa-solid fa-paintbrush"></i>} />
            <MenuIcon Title={'Menus'} Icon={<i class="fa-solid fa-table-list"></i>} />
            <h6 className={!ActiveLeftMenu?'Opacity':''} >System</h6>
            <MenuIcon Title={'User'} Icon={<i class="fa-solid fa-user"></i>} />
            <MenuIcon Title={'Settings'} Icon={<i class="fa-solid fa-gear"></i>} />
        </div>
    )
}

export default LeftSideBar

function MenuIcon({ Title, Icon }) {
     const {leftMenu,SetleftMenu,ActiveLeftMenu} = useStore()
    return (
        <div className={leftMenu==Title?'ActiveMenuIcon':'MenuIcon'} 
        onClick={()=>{
            SetleftMenu(Title)
        }}>
            <div className="Icon">{Icon}</div>
            <div className={!ActiveLeftMenu?"Display":"IconName"}>{Title}</div>
        </div>
    )
}