import React from 'react'
import { faDollarSign, faFaceSmile, faIgloo, faPlus, faUserTie } from "@fortawesome/free-solid-svg-icons";

import TenentData from './TenentData'

const Management = () => {
  return (
    <div className='mt-8'>
        <TenentData toolicon={faUserTie} paira="New Tenent info"  bg="bg-white" text="text-brand"/>
        <TenentData toolicon={faDollarSign} paira="New Tenent info"  bg="bg-white" text="text-brand"/>
      
<div className='row container m-auto'>
<TenentData col='col-md-2' width="" border='none' otherclass="mx-md-1"/>
<TenentData toolicon={faIgloo} paira="New Tenent info" col='col-md-3' width="" bg="bg-white" text="text-brand"/>
<TenentData toolicon={faPlus} paira="New Tenent info" col='col-md-3' width="" bg="bg-white" text="text-brand"/>
<TenentData col='col-md-2' width="" border='none' otherclass="mx-md-1" />
</div>
<TenentData paira="Home page" bg="bg-brand" text="text-white"/>
    </div>
  )
}

export default Management