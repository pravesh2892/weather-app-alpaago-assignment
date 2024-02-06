import React from 'react'
import LeftComponents from '../../Components/Left'
import ChooseStateComponents from '../../Components/ChooseState'
import WeekInfoCardComponents from '../../Components/WeekInfoCard'
import HumidityComponents from '../../Components/HUMIDITY'
import Navbar from '../../Components/Navbar/Navbar'

function Home() {
  return (
    <>
     <Navbar />
     <div className='homeWrap'>
       
                <div className='weatherSection'>
                    <LeftComponents />
                    <div className='rightSide'>
                        <ChooseStateComponents />
                        <WeekInfoCardComponents />
                        <HumidityComponents />
                    </div>
                </div>
            </div>
    </>
  )
}

export default Home