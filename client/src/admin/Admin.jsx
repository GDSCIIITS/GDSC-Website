import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { eventActions } from '../store/events'
import { pingAdmin } from './admin-actions'
import AdminNav from './AdminNav'

const Admin = (props) => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.activity.isAuthenticated)
    const history = useHistory()
    useEffect(() => {
        dispatch(eventActions.setAuthStatus(localStorage.getItem("isAuthenticated") === "true"))
        dispatch(pingAdmin()).then((response) => {
            if(response.payload.msg === 'token is not valid') {
                dispatch(eventActions.setAuthStatus(false))
                localStorage.setItem("isAuthenticated", false)
                history.replace({pathname: "/admin", state: {message: "Session expired! Please login again"}})
            }
        })
    }, [])
    
    return (
        <>
        <AdminNav isAuth={isAuth} />
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    {props.children}
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
        </>
    )
}

export default Admin
