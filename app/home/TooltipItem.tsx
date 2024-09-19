import { useLayoutEffect, useRef } from "react";

interface TooltipItemProps {
  text: string;
  parentDimensions:number,
  display:boolean
}

const TooltipItem = ({ text,parentDimensions,display }: TooltipItemProps) => {
  const tooltipRef = useRef(0);
  const toolTipWidth = useRef(0);
  useLayoutEffect(() => {
    console.log("use layout effect fo tooltip item called");
    const toolTipElm = tooltipRef.current.getBoundingClientRect();
    console.log("dimensions");
    console.log(toolTipElm);
    toolTipWidth.current = toolTipElm.width;
  }, []);

  const calculateTooltipLeft = ()=>{
    /*
        req:it should be in center of the container
        logic
         - get the width of container
          center point will be 50% of width
          now half of tooltip's content should,left of center,half should be right
          so it should be
          left = container_width/2-tooltip_width/2

        - what if tooltip width is greater then container width,
          - then also it will be fine as position will be in negative.


        - what if there is not enough space in left?
            how to check this?
            - get x and y coordnates of container
            

            approach 1
             - if x of container is less then negative value of left then keep left zero
             


    */

             console.log("parentDimensions");
             console.log(parentDimensions);

    const parentStarting= parentDimensions.x;
   const parentEnding = parentStarting +parentDimensions.width;
    const parentCenter = parentDimensions.width/2;
    const parentCenterCoordinates = (parentEnding-parentStarting)/2;




    console.log("toolTipWidth");
    console.log(toolTipWidth);
    console.log(parentCenter);
    
    return parentCenterCoordinates - toolTipWidth.current/2;


  }

  const calculateTooltipY = ()=>{

    const parentStarting_y = parentDimensions.y
    const parentEnding_y = parentStarting_y + parentDimensions.height;
    return parentEnding_y;
  }

  const getToolTipItemClass = ()=>{
    console.log("tooltip");
    console.log({'position':'absolute',left:`${calculateTooltipLeft()}px`,'opacity':`${display?1:0}`,  'transform': `translate3d(${calculateTooltipLeft()}px, ${calculateTooltipY()}px, 0)`});

    return {'position':'absolute',left:`${calculateTooltipLeft()}px`,'opacity':`${display?1:0}`}
  }

  return (
    <div ref={tooltipRef} style={getToolTipItemClass()} className="bottom-center border-solid border-2 border-indigo-600 ">
      {text}
    </div>
  );
};

export default TooltipItem;
