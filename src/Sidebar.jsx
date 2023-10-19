import React from 'react'
import 
{ BsHouseGearFill, BsSliders, BsWrenchAdjustable, BsFillCheckCircleFill, BsPersonGear}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsPersonGear  className='icon_header'/> AirCheck Admin
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsHouseGearFill className='icon'/> Home
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsSliders className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsWrenchAdjustable className='icon'/> Processing
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillCheckCircleFill className='icon'/> Completed
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar