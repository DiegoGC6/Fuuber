import React from 'react'
import Header from '../components/Header'
import SimpleMap from '../components/map'
import { Map, GoogleApiWrapper } from 'google-maps-react'



function Home() {
  return (
    <>
    <Header />
   <div >
   <SimpleMap/>
   </div>
    </> 
  )
}

export default Home