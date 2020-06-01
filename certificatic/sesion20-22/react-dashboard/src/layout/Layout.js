import React from 'react'
import LayoutLeft from './LayoutLeft'
import LayoutRight from './LayoutRight'

const Layout =()=>{
    return(
        <>
           <div className="columns">
               <div className="column is-one-fifth">
                   <LayoutLeft/>
               </div>
               <div className="column">
                   <LayoutRight/>
               </div>
           </div>
        </>
    )
}
export default Layout