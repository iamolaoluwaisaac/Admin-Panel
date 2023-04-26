import React from 'react'
import "./WidgetSm.css"
import Profile1 from "../../Assets/profile1.jpg"
import { Visibility } from '@mui/icons-material'

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className='widgetSmTitle'>New joined Members</span>
        <ul className='widgetSmList'>
            <li className='widgetSmListItem'>
                <img src={Profile1} alt='profile1' className='widgetSmImg'/>
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Victoria Smith</span>
                    <span className='widgetSmUserTitle'>Head of Operations</span>
                </div>
                <button className='widgetSmButton'>
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>

            <li className='widgetSmListItem'>
                <img src={Profile1} alt='profile1' className='widgetSmImg'/>
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Victoria Smith</span>
                    <span className='widgetSmUserTitle'>Head of Operations</span>
                </div>
                <button className='widgetSmButton'>
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>

            <li className='widgetSmListItem'>
                <img src={Profile1} alt='profile1' className='widgetSmImg'/>
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Victoria Smith</span>
                    <span className='widgetSmUserTitle'>Head of Operations</span>
                </div>
                <button className='widgetSmButton'>
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>

            <li className='widgetSmListItem'>
                <img src={Profile1} alt='profile1' className='widgetSmImg'/>
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Victoria Smith</span>
                    <span className='widgetSmUserTitle'>Head of Operations</span>
                </div>
                <button className='widgetSmButton'>
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>

            <li className='widgetSmListItem'>
                <img src={Profile1} alt='profile1' className='widgetSmImg'/>
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Victoria Smith</span>
                    <span className='widgetSmUserTitle'>Head of Operations</span>
                </div>
                <button className='widgetSmButton'>
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
