import React from 'react'
import { faUserPlus , faHandHoldingDollar, faUserMinus, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import TenentData from './TenentData'
import { Button } from 'bootstrap';

const Tenent = () => {
  return (
    <div className='mt-8'>
       
        <h3 className='text-brand m-auto text-center '>Tenant Forms</h3>
      <div className='container'>
        <TenentData toolicon={faUserPlus} paira="New Tenent info" bg="bg-brand" text="text-white"/>
        <TenentData toolicon={faHandHoldingDollar} paira="New Tenent info" bg="bg-brand" text="text-white"/>
        <TenentData toolicon={faUserMinus} paira="New Tenent info" bg="bg-brand" text="text-white"/>
        <TenentData toolicon={faFaceSmile} paira="New Tenent info" bg="bg-brand" text="text-white"/>
        <div className='container d-flex justify-content-center'>
            <button className="btn mx-3 bg-danger fs-5 px-4 text-white" type="submit">Email Manager</button>
            <button className='btn mx-3 border-primary bg-white fs-5 px-4 text-brand' type="submit"> Call Manager</button>
        </div>
      <TenentData paira="Home page" bg="bg-brand" text="text-white"/>
      </div>

    </div>
  )
}

export default Tenent