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
import { ReactNode } from 'react'

interface  CarouselProp {
    children :ReactNode[],
    simultanousCards:string | number
}

const Carousel = ({children,simultanousCards = 1}:CarouselProp)=>{

    return (
        <div className="flex  w-[900px] overflow-scroll">
          {children.map((child, i, arr) => {
            if (i + 1 === arr.length) return child
            return (
              <>
                {child}
                <br />
              </>
            )
          })}
        </div>
      )

}


export default Carousel;