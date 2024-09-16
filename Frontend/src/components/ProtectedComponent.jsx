import React from 'react'
import { Navigate } from 'react-router-dom';


const isAuthenticatedUser = ()=>{
    return !!localStorage.getItem("authToken");
}



function ProtectedComponent({children}) {


    if (!isAuthenticatedUser()) {
        return <Navigate to={"/login"} replace/>
    }
    
  return children
}

export default ProtectedComponent