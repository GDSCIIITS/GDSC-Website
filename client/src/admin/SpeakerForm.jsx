import { Close } from '@mui/icons-material'
import { CircularProgress, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { eventActions } from '../store/events'
import { sendSpeaker } from './admin-actions'

const SpeakerForm = () => {
    const [data, setData] = useState({
        name: '',
        domain: '',
        rank: ''
    })
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)
    const [photo, setPhoto] = useState()
    const history = useHistory()
    const dispatch = useDispatch()

    const photoHandler = (event) => {
        setPhoto(event.target.files[0])
    }

    const validateForm = () => {
        const errorList = []
        if(!photo) {
            errorList.push("Please upload Profile photo")
        }
        if(data.domain === '') {
            errorList.push("Please select a domain")
        }
        if(data.rank === '') {
            errorList.push("Please select a rank")
        }
        return errorList
    }

    const formSubmitHandler = (event) => {
        setLoading(true)
        event.preventDefault()
        const errorList = validateForm()
        setErrors(errorList)
        if(errorList.length > 0) {
            return
        }
        const photoData = new FormData()
        photoData.append("file", photo)
        photoData.append("upload_preset", "gdsc-iiits-174")
        dispatch(sendSpeaker(photoData, data)).then((response) => {
            console.log(response)
            dispatch(eventActions.addSpeaker(response.body))
            setLoading(false)
            history.push("/admin/speakers")
        })
    }

    return (
        loading ? <div className='container d-flex justify-content-center'>
            <CircularProgress />
        </div> :
        <div className="container">
            <div className="row">
                <form className="" onSubmit={formSubmitHandler}>
                    <h1 className="mb-3" style={{ width: '90%', margin: '0.4em 0.5em', marginTop: '1em' }}>Speaker form</h1>
                    {errors.map((error, index) => {
                        return <div className="col-md-12 col-sm-12 col-lg-12" key={index}>
                        <div className='d-flex justify-content-between align-items-center' style={{ margin: '0.4em 1em', marginTop: '1em', backgroundColor: 'red', color: 'white', width: '90%', padding: '0.5em 0.5em 0.5em 1.5em' }}>
                            <>{error}</>
                            <IconButton onClick={() => {
                                setErrors(prevErrors => prevErrors.filter(error1 => error1 !== error))
                            }}>
                                <Close sx={{color: 'white'}} />
                            </IconButton>
                        </div>
                    </div>
                    })}
                    <div className="col-md-12 col-sm-12 col-lg-12">
                    <TextField label="Name of the Speaker" type={"text"} sx={{ width: '90%', margin: '0.4em 1em' }} onChange={(event) => {setData({...data, name: event.target.value})}} required/>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <label style={{ width: '90%', margin: '0.4em 1em' }}>Profile pic of the speaker ( Passport size recommended )</label>
                        <input type="file" accept='image/*' className="form-control shadow-none" id="floatingTitle" placeholder="@" style={{ width: '90%', margin: '0.4em 1em 1em 1em' }} onChange={photoHandler}/>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <select className="form-select mb-3 shadow-none" required defaultValue={"title"} aria-label="Default select example" style={{ width: '90%', margin: '0.4em 1em' }} onChange={(event) => {setData({...data, domain: event.target.value} )}}>
                            <option value="title" disabled>Select the domain *</option>
                            <option value="Web Development">Web Development</option>
                            <option value="App Development">App Development</option>
                            <option value="AI / ML">AI / ML</option>
                            <option value="Design Team">Design Team</option>
                            <option value="Public Relation">Public Relation</option>
                            <option value="Management Team">Management Team</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <select className="form-select mb-3 shadow-none" required defaultValue={"title"} aria-label="Default select example" style={{ width: '90%', margin: '0.4em 1em' }} onChange={(event) => {setData({...data, rank: event.target.value} )}}>
                            <option value="title" disabled>Select the rank in the domain *</option>
                            <option value="Lead">Lead</option>
                            <option value="Core">Core</option>
                            <option value="Member">Member</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <button type='submit' className='btn btn-primary shadow-none' style={{ margin: '0.4em 1em' }}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SpeakerForm
