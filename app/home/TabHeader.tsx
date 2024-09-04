import { Children, ReactNode } from 'react';

interface TabHeaderProps {
    children:ReactNode[]
}

const TabHeader = ({children}:TabHeaderProps)=>{

const renderTabItem = ()=>{
    return Children.map(children,(child)=>{
        return (
            <div className='child-item'>
                {child}

            </div>
        )
    })
}

return (
    <div className="flex justify-between p-2">
        {renderTabItem()}

    </div>
)


}


export default TabHeader;