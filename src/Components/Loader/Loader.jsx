import React, { useEffect, useRef } from 'react'
import gsap, { Bounce, Power1, Power2 } from 'gsap'
import { TextPlugin } from "gsap/TextPlugin"
gsap.registerPlugin(TextPlugin)
const Loader = () => {
  const text = useRef(null)

  useEffect(()=>{

    gsap.to(text.current , {
      duration:4,
      text:'&lt;Abdul Samad/&gt;',
      ease:Bounce.inOut,
      onComplete:()=>{
        
        gsap.to(text.current , {
          duration:1,
          ease:Power1.easeInOut,
          opacity:0
        })

      }
    })
  },[])

  return (
    <div>
        <h1 className='xl:text-5xl lg:text-4xl md:text-3xl  text-xl font-extrabold text-[#fff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' ref={text}></h1>
    </div>
  )
}

export default Loader