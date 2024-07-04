import React from 'react'
import { Navigate, Outlet } from 'react-router';
import {useAuthState} from '../Hooks/useAuthState'
import Spinner from "./Spinner"
export default function PrivateRoute() {
const {loggedIn, checkingStatus} = useAuthState();
if(checkingStatus) {
    return <Spinner />
}
return loggedIn ? <Outlet /> : <Navigate to="/signin"/>
}