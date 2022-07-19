import React, {useEffect, useState} from 'react'
import rolly from 'rolly.js';

function Tester() {
  useEffect(()=>{
    // const r = rolly({
    //   view:document.querySelector('.tester__container'),
    //   native: true,
    // })
  },[])
  return (
    <div className='tester'>
      <div className = "tester__container">

      </div>
    </div>
  )
}

export default Tester