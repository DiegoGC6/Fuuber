import React from 'react'
import Header from '../components/Header'
import SimpleMap from '../components/map'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import CardOne from '../components/CardOne'



function Home() {
  return (
    <>
    <Header />
   <div >
   <SimpleMap/>
   <CardOne />
   </div>
    </> 
  )
}

export default Home