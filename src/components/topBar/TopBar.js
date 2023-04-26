import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@mui/icons-material';
import Avatar from "../../Assets/TOPE1.jpg"

export default function TopBar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo' style={{fontFamily:"tesla"}}>I-KONSULT</span>
            </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
                    <NotificationsNone/>
                    <span className='topIconBadge'>2</span>
                </div>

                <div className='topbarIconContainer'>
                    <Language/>
                    <span className='topIconBadge'>2</span>
                </div>

                <div className='topbarIconContainer'>
                    <Settings/>
                </div>

                <img src={Avatar} alt='avatar-1' className='topAvatar'/>
            </div>
        </div>
    </div>
  )
}
