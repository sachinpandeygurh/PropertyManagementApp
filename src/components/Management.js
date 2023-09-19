import React from 'react'
import { faDollarSign, faFaceSmile, faIgloo, faPlus, faUserTie } from "@fortawesome/free-solid-svg-icons";

import TenentData from './TenentData'

const Management = () => {
  return (
    <div className='mt-8'>
        <TenentData toolicon={faUserTie} paira="New Tenent info"  bg="bg-white" text="text-brand" otherclass=''/>
        <TenentData toolicon={faDollarSign} paira="New Tenent info"  bg="bg-white" text="text-brand" otherclass=''/>
      
<div className='row container m-auto'>
<TenentData col='col-md-2 col-1 ' width="" border='none' otherclass="mx-1"/>
<TenentData toolicon={faIgloo} paira="New Tenent info" col='col-md-3 col-4' width="" bg="bg-white" text="text-brand"/>
<TenentData toolicon={faPlus} paira="New Tenent info" col='col-md-3 col-4' width="" bg="bg-white" text="text-brand"/>
<TenentData col='col-md-2 col-1 ' width="" border='none' otherclass="mx-1" />
</div>
<TenentData paira="Home page" bg="bg-brand" text="text-white" otherclass='w-md-50 w-75'/>
    </div>
  )
}

export default Management