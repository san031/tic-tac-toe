import React, { useState } from 'react'

function Cell({classname , value, onCellClick}) {

  return (
    <div  className={classname}     onClick={onCellClick}>
      {value}
       
    </div>
  )
}

export default Cell