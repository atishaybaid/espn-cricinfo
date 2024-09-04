interface tabHeaderProps {
    title:string,
    index:string|number,
    onClickTabHeader:Function,
    isActive:boolean
}

const TabHeadderItem = ({title,index,onClickTabHeader}:tabHeaderProps)=>{
    return (
        <div onClick={()=>{
            onClickTabHeader(index);
        }}>
            {title}
        </div>
    )


}


export default TabHeadderItem