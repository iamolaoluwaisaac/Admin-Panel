import React from 'react'
import Chart from '../../components/Charts/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./Home.css"
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

const Home = () => {
  return (
    <div className='home'> 
        <FeaturedInfo/> 
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>  

        <div className='homeWidgets'>
          <WidgetSm/>
          <WidgetLg/>
        </div> 

    </div>
  )
}

export default Home
