import React from 'react'
import { Spinner } from 'react-bootstrap';

export default function Loading() {
  return (
    <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
          <Spinner animation="grow" size="sm"   className='color-spinner' />
          <Spinner animation="grow"  className='color-spinner'   />
          <div className='text-center color-spinner loading-text' dir="rtl">در حال بارگزاری...</div>
    </div> 
  )
}
