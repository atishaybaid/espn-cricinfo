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

import { Children, ReactNode, cloneElement, useState } from 'react'

interface  CarouselProp {
    children : ReactNode |ReactNode[],
    simultanousCards:string | number,
    cycle:boolean
}

const Carousel = ({children,simultanousCards = 3,cycle=false}:CarouselProp)=>{
    const [sliderStartIndex,setSliderStartIndex]= useState(0);
    const carouseWidth = `${344*simultanousCards}px`
    const chlidCount = Children.count(children);

    const onClickNext = ()=>{
         console.log("on click next called");
         console.log(sliderStartIndex);
        setSliderStartIndex((currenIndex)=>{
            if(!cycle){
             return  Math.min(chlidCount-simultanousCards,currenIndex + parseInt(simultanousCards));
            } else {
            return (currenIndex + parseInt(simultanousCards))%chlidCount;
            }
        })
    }


    const onClickPrev = ()=>{
        console.log("on click prev called");
        console.log(sliderStartIndex);
        setSliderStartIndex((currenIndex)=>{

            if(!cycle){
                return  Math.max(0,currenIndex -parseInt(simultanousCards));
               } else {
                return currenIndex -parseInt(simultanousCards);
               }
            
        })
    }


    return (
        <div className="flex">
            <img src="/leftArrow.svg" className='w-6 cursor-pointer z-100' onClick={onClickPrev}/>
            <div className={`flex overflow-hidden`} style={{width:carouseWidth}}>
          {children.map((child, i, arr) => {
            // const clonnedChild = cloneElement(child,{sliderStartIndex:sliderStartIndex})
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

