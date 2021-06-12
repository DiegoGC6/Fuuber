import React from 'react'
import Header from '../components/Header'
import SimpleMap from '../components/map'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import CardOne from '../components/CardOne'
import '../components/containers.css'



function Home() {
  return (
    <>
    <Header />
   <div className="center" >
   <SimpleMap/>
   <div style={{position:"relative"}}>
   <CardOne />
   </div>
   </div>
    </> 
  )
}

export default Home