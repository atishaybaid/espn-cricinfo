import { useLayoutEffect, useRef } from "react";

interface TooltipItemProps {
  text: string;
  parentWidth:number,
  display:boolean
}

const TooltipItem = ({ text,parentWidth,display }: TooltipItemProps) => {
  const tooltipRef = useRef(0);
  const toolTipWidth = useRef(0);
  useLayoutEffect(() => {
    console.log("use layout effect fo tooltip item called");
    const toolTipElm = tooltipRef.current.getBoundingClientRect();
    console.log("dimensions");
    console.log(toolTipElm);
    toolTipWidth.current = toolTipElm.width;
  }, []);
  const getToolTipItemClass = ()=>{
    console.log("tooltip width");
    console.log(parentWidth);
    console.log(toolTipWidth.current);

    return {'position':'absolute',left:`calc(${parentWidth/2}px - ${toolTipWidth.current/2}px)`,'opacity':`${display?1:0}`}
  }

  return (
    <div ref={tooltipRef} style={getToolTipItemClass()} className="bottom-center">
      {text}
    </div>
  );
};

export default TooltipItem;
