import React, { useEffect, useState } from 'react'
import './DashboardPage.css'
import DashboardnavBar from '../../Components/DashboardnavBar/DashboardnavBar'
import MenuIcon from '../../Components/MenuIcon/MenuIcon'
import { useLMS } from '../../Context/LmsContext'
import DashBoardMain from '../../Sections/DashboardSextions/DashBoard/DashBoardMain'
import DashBoardLearning from '../../Sections/DashboardSextions/DashBoardLearning/DashBoardLearning'
import DashBoardCertification from '../../Sections/DashboardSextions/DashBoardCertification/DashBoardCertification'
import DashBoardWishlist from '../../Sections/DashboardSextions/DashBoardWishlist/DashBoardWishlist'
import DashBoardOrders from '../../Sections/DashboardSextions/DashBoardOrders/DashBoardOrders'
import DashBoardProfile from '../../Sections/DashboardSextions/DashBoardProfile/DashBoardProfile'
import { useNavigate } from 'react-router-dom'
import CreateCourse from '../../Sections/StaffDashboardSections/CreateCourse'
import MyCourses from '../../Sections/StaffDashboardSections/MyCourses/MyCourses'
function DashboardPage() {
  const { DashboardMenu, setUser, User } = useLMS()
  const Navigate = useNavigate()
  const menuItems = {
    "student": [
      { Icon: <i className="bi bi-speedometer"></i>, Title: "Dashboard" },
      { Icon: <i className="bi bi-book"></i>, Title: "My Learning" },
      { Icon: <i className="bi bi-award-fill"></i>, Title: "Certification" },
      { Icon: <i className="bi bi-heart"></i>, Title: "Wishlist" },
      { Icon: <i className="bi bi-credit-card"></i>, Title: "Order" },
      { Icon: <i className="bi bi-person"></i>, Title: "Profile" }
    ],
    "staff": [
      { Icon: <i className="bi bi-speedometer"></i>, Title: "Staffboard" },
      { Icon: <i className="bi bi-book"></i>, Title: "My Courses" },
      { Icon: <i class="bi bi-plus-circle-fill"></i>, Title: "Create Course" },
      { Icon: <i class="bi bi-people-fill"></i>, Title: "Students" },
      { Icon: <i class="bi bi-graph-up-arrow"></i>, Title: "Analytics" }
    ]
  };
  const [DashboardMenus, setDashboardMenus] = useState(menuItems["student"])
  const [Menu, setMenu] = useState('')


  const Tags = {
    "Dashboard": <DashBoardMain Title={`Welcome back, ${User?.username}!`} SubTitle={"Continue your learning journey"} />,
    "My Learning": <DashBoardLearning />,
    "Certification": <DashBoardCertification />,
    "Wishlist": <DashBoardWishlist />,
    "Order": <DashBoardOrders />,
    "Profile": <DashBoardProfile />,
    // STAFF DASHBOARD 
    "Staffboard": <DashBoardMain Title={"Instructor Dashboard"} SubTitle={`Welcome back, ${User?.username}`} />,
    "Create Course":<CreateCourse/>,
    "My Courses":<MyCourses/>
  };

  useEffect(() => {
    if (User &&User.username) {
      setMenu(DashboardMenu)
    }
  }, [User, DashboardMenu])

  return (
    <div className='DashboardPage'>

      <DashboardnavBar />
      <div className="row content col-12">
        <div className="col-2 leftDashboardIcons">
          {
            DashboardMenus && DashboardMenus.map(elem => (
              <MenuIcon Icon={elem.Icon} Title={elem.Title} />
            ))
          }

          <hr />
          <MenuIcon Icon={<i class="bi bi-arrow-left-short"></i>} Title={'Back to site'} OnTap={() => {
            Navigate('/home')
          }} />
          <MenuIcon Icon={<i class="bi bi-box-arrow-left"></i>} Title={'LogOut'} OnTap={() => {
            setUser(null)
            localStorage.setItem('token', '')
            Navigate('/home')
          }} />
        </div>

        <div className="col-10 rightDashboardContents">
          {Tags[Menu]}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage