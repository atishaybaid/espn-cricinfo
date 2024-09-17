/*
two approches for composition pattern

1)get the contnent in the form of the array

[
    {
        key:"1",
        label:"tab 1",
        content:<children jsx>,
        isDisabled:true/false
        isDefaultActive:true/false
    },
    {
        key:"2",
        label:"tab 2",
        content:"",

    },




    ,onCLick=(currentActivetab)=>{

    }
]








*/
"use client";
import { ReactNode, useMemo, useState } from "react";
import TabHeadderItem from "./TabHeadderItem";
import TabHeader from "./TabHeader";


interface tabContentType {
    key:string | number,
    label:string,
    content:ReactNode,
    width?:string
   

}

interface tabGroupProps {
    tabContent : Array<tabContentType>,
    defaultActiveTab:number
}


interface tab{
    activeTab:number,
    setActiveTab:Function
}

const TabGroup = ({tabContent,defaultActiveTab=0,width}:tabGroupProps)=>{
    const [activeTab,setActiveTab]= useState<number>(defaultActiveTab);

  const  onClickTabHeader  = (index:string|number)=>{
        setActiveTab(index)
    }


    const renderTabs = ()=>{
       return tabContent.map((tabItem,index)=>{
            const {label} = tabItem
            return <TabHeadderItem title={label} index={index} onClickTabHeader={onClickTabHeader} isActive={activeTab==index} />
            
        })
    }

    const renderContainer = ()=>{
        const activeContainer = tabContent[activeTab].content;
        return <div>
            {
                activeContainer
            }
        </div>
    }

    // const getWidth = useMemo(()=>{
    //     if (width){
    //         return `${width}px`;
    //     } else {
    //         return "w-96"
    //     }

    // },[width])

    const getWidth = ()=>{
        if (width){
            return `${width}px`;
        } else {
            return "w-96"
        }

    }
/*

<tabHeader>
 <tabHeaderItem />
 <tabHeaderItem />
<tabHeaderItem />
 <tabHeaderItem />

 </tabHeader>
<tabContainer>
  
</tabContainer>

- get the width of the container before rendering 

*/

const tabGroupClass =  `flex flex-col border-solid border-2 border-indigo-600 ${getWidth()}`

return (
    <div className={tabGroupClass}>
    <TabHeader>
        {renderTabs()}
    </TabHeader>
    {renderContainer()}
    </div>






)


}


export default TabGroup;