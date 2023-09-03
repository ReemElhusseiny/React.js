import React from 'react'
import { MySlider } from './../components/MySlider';
import { Slides } from './../components/Slides';
import { MyCard } from './../components/MyCard';
import { MyJpg } from './../components/MyJpg';
import { Image } from './../components/Image';
import {Footer} from './../components/Footer'

export function Home() {
  return (
    <div>
      <MySlider/>
      <MyCard/>
      <Slides/>
      <MyJpg/>
      <Image/>
      <Footer/>
  
     
    </div>
  )
}
