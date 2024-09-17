/*
- it should pass down props for positioning
- it should pass down color
- it should pass delay to dissappear the tooltip

implementation approach
 wrap the component the tooltip wrapper,
 capture hover event on the child


 - why do we need use layout effect?
  - to set the position of tooltip.
    only in case of race conditoin,when it is near to view port
    - 

    - what will be the default behaviour
     center botton


     50% - width of tooltip


*/
"use client";

import {
    cloneElement,
    useState,
    ReactNode,
    Children,
    useLayoutEffect,
    useRef,
  } from "react";
  import TooltipItem from "./TooltipItem";
  
  interface tootipPropTypes {
    children: ReactNode[];
    text: string;
  }
  
  const Tooltip = ({ children, text }: tootipPropTypes) => {
    const [displayTooltip, setDisplayTooltip] = useState(false);
    const tooltipWrapperRef = useRef(null);
    const toolTipWidth = useRef(0);
  
    useLayoutEffect(() => {
      const tooltipWrapper = tooltipWrapperRef.current.getBoundingClientRect();
      console.log("tooltipWrapper dim")
      console.log(tooltipWrapper);
      toolTipWidth.current = tooltipWrapper.width;
  
     
    }, []);
  
    const mouseEntered = () => {
      setDisplayTooltip(true);
    };
  
    const mouseLeft = () => {
      setDisplayTooltip(false);
    };
  
    const renderChildren = () => {
      return (
        <div
          onMouseEnter={mouseEntered}
          onMouseLeave={mouseLeft}
          ref={tooltipWrapperRef}
        >
          {Children.map(children, (child) => {
            return <div className="child-item">{child}</div>;
          })}
        </div>
      );
    };
  
    return (
      <div className="tooltip-wrapper" ref={tooltipWrapperRef}>
        {renderChildren()}
        {displayTooltip  || true ? <TooltipItem text={text} parentWidth={toolTipWidth.current} display={displayTooltip} /> : null}
      </div>
    );
  };
  
  export default Tooltip;
  