import React  from 'react'
import { Spinner } from 'react-bootstrap';

export const loading = () => {
   
   
  
  return (
    <div  className="text-center bg-primary"  style={{width:"500px" , height:"500px" , margin: "auto", width: "50%", border: "3px solid green", padding: "auto"}} >
<Spinner animation="border" role="status" ></Spinner>
<div>Loading...</div>
    </div>
    
  )
}
