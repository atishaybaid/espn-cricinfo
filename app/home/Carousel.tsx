/*

Logic for carousel
number of cards to show simultanously

pass down all children  as a prop
number of children to render as a prop
imprlemt show logic


//

1)via setting array idexs to show
 - 
check for react entry and exit animation


2)transform x

- render all,
- modify the x axis coordinates with animation


logic for translate


 





*/
"use client";

import { ReactNode, cloneElement, useState } from 'react'

interface  CarouxselProp {
    children :ReactNode[],
    simultanousCards:string | number
}

const Carousel = ({children,simultanousCards = 3}:CarouselProp)=>{
    const [sliderStartIndex,setSliderStartIndex]= useState(0);
    const carouseWidth = `${344*simultanousCards}px`

    const onClickNext = ()=>{
         console.log("on click next called");
         console.log(sliderStartIndex);
        setSliderStartIndex((currenIndex)=>{
            return currenIndex + parseInt(simultanousCards);
        })
    }


    const onClickPrev = ()=>{
        console.log("on click prev called");
        console.log(sliderStartIndex);
        setSliderStartIndex((currenIndex)=>{
            return currenIndex -parseInt(simultanousCards);
        })
    }


    return (
        <div className="flex">
            <img src="/leftArrow.svg" className='w-6 cursor-pointer z-100' onClick={onClickPrev}/>
            <div className={`flex overflow-hidden`} style={{width:carouseWidth}}>
            {/* <div className={`flex  w-[1032px] overflow-hidden`}> */}
          {children.map((child, i, arr) => {
            // const clonnedChild = cloneElement(child,{sliderStartIndex:sliderStartIndex})
            if (i + 1 === arr.length) return child
            return (
              <div style={{
                transform: `translateX(-${100*(sliderStartIndex)}%)`,
            }}
            className='transition duration-300 ease-in-out'>
                {child}
                <br />
              </div>
            )
          })}
          </div>
             <img src="/rightArrow.svg" className='w-6 cursor-pointer z-100' onClick={onClickNext}/>
        </div>
      )

}


export default Carousel;

