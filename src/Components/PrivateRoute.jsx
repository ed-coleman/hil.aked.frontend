import React, { useContext, useEffect } from 'react'
import { SessionContext } from '../Contexts/SessionContext'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({children}) {


const { isLoading, isAuth, token } = useContext(SessionContext)



    if (!isLoading && !isAuth || !token) {
        return <Navigate to='/login' />
    }
    
      return <>{children}</>
}