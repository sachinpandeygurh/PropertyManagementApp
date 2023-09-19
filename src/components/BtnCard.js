import React from 'react'
import { Link } from 'react-router-dom'

const BtnCard = () => {
  return (
    <div className='btncard card py-5'>
<h2 className='m-auto'>You are a property  </h2>
<div className='card-body d-flex my-md-3 row   justify-content-around'>
<Link className="nav-link col-5" to="/contact">
    <button type="submit" className="btn w-100 bg-brand btn-primary">Manager</button>
</Link>
<Link className="nav-link col-5" to="/contact">
    <button type="submit" className="btn w-100 bg-brand btn-primary">Tenent</button>
</Link>
</div>
    </div>
  )
}

export default BtnCard