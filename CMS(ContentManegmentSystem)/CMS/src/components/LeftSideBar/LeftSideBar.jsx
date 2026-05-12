import React from 'react'
import './LeftSideBar.css'
import useStore from '../../Context/Zustand'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function LeftSideBar() {
    const { ActiveLeftMenu } = useStore()
    

    return (
        <div className='LeftSideBar' style={{ width: ActiveLeftMenu ? '200px' : '60px' }}>
            
            <h6 className={!ActiveLeftMenu ? 'Opacity' : ''}>Content</h6>
            <MenuIcon to={'/'} Title={'Dashboard'} Icon={<i class="fa-solid fa-table-cells-large"></i>} />
            <MenuIcon to={'/post'} Title={'Posts'} Icon={<i class="fa-regular fa-note-sticky"></i>} />
            <MenuIcon to={'/pages'} Title={'Pages'} Icon={<i class="fa-solid fa-file-lines"></i>} />
            <MenuIcon to={'/category'} Title={'Categories'} Icon={<i class="fa-solid fa-layer-group"></i>} />
            <h6 className={!ActiveLeftMenu ? 'Opacity' : ''} >Design</h6>
            <MenuIcon to={'pagebuilder'} Title={'Page Builder'} Icon={<i class="fa-solid fa-paintbrush"></i>} />
            <MenuIcon to={'/menu'} Title={'Menus'} Icon={<i class="fa-solid fa-table-list"></i>} />
            <h6 className={!ActiveLeftMenu ? 'Opacity' : ''} >System</h6>
            <MenuIcon to={'/users'} Title={'User'} Icon={<i class="fa-solid fa-user"></i>} />
            <MenuIcon to={'/codeditor'} Title={'Editor'} Icon={<i class="fa-solid fa-code"></i>} />
            <MenuIcon Title={'Settings'} Icon={<i class="fa-solid fa-gear"></i>} />
        </div>
    )
}

export default LeftSideBar

function MenuIcon({ to, Title, Icon }) {
    const Navigate = useNavigate()
    const { leftMenu, SetleftMenu, ActiveLeftMenu } = useStore()
    return (
        <div className={leftMenu == Title ? 'ActiveMenuIcon' : 'MenuIcon'}
            onClick={() => {
                SetleftMenu(Title)
                to && Navigate(to)
            }}>
            <div className="Icon">{Icon}</div>
            <div className={!ActiveLeftMenu ? "Display" : "IconName"}>{Title}</div>
        </div>
    )
}