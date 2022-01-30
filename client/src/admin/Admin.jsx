import React from 'react'
import AdminNav from './AdminNav'

const Admin = (props) => {
    return (
        <>
        <AdminNav />
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
