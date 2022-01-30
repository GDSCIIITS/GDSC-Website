import { Close } from '@mui/icons-material'
import { CircularProgress, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'
import { eventActions } from '../store/events'
import { sendEvent } from './admin-actions'
import styles from './EventForm.module.css'


const EventForm = () => {
    const speakers = useSelector(state => state.events.speakers)
    const getOptions = () => {
        const options = []
        speakers.forEach((speaker, index) => {
            options.push({value: speaker._id, label: speaker.name})
        })
        return options
    }

    const options = getOptions()
    const dispatch = useDispatch()
    const [data, setData] = useState({
        title: '',
        description: '',
        speakers: [],
        status: '',
        date: '',
        venue: ''
    })
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const multiHandler = (event) => {
        setData({...data, speakers: event})
    }

    const validateForm = () => {
        const errors = []
        if(data.speakers.length === 0) {
            errors.push("Please select speakers")
        }
        if(data.status === '') {
            errors.push("Please select the status")
        }
        return errors
    }

    const formSubmitHandler = (event) => {
        setLoading(true)
        event.preventDefault()
        const errorList = validateForm()
        if(errorList.length > 0) {
            setErrors(errorList)
            return
        }
        const date = new Date(data.date)
        dispatch(sendEvent({...data, date: date})).then((response) => {
            console.log(response)
            dispatch(eventActions.addEvent({...data, date: date}))
            setLoading(false)
            history.push("/admin/events")
        })
    }
      
    return (
        loading ? <div className='container d-flex justify-content-center'>
            <CircularProgress />
        </div> :
        <div className='container'>
            <div className="row">
                <form onSubmit={formSubmitHandler}>
                    <h1 className="mb-3" style={{ width: '90%', margin: '0.4em 0.5em', marginTop: '0.5em' }}>Event Form</h1>
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
                        <TextField label="Title of the event" sx={{ width: '90%', margin: '0.4em 1em' }} onChange={(event) => {setData({...data, title: event.target.value})}} required/>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <TextField multiline rows={4} label="Description of the event" sx={{ width: '90%', margin: '0.4em 1em' }} onChange={(event) => {setData({...data, description: event.target.value})}} required/>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <Select options={options} className={styles.speakers} placeholder={"Select Speakers"} isMulti={true} onChange={multiHandler}/>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <select defaultValue={"none"} className="form-select mb-3 shadow-none" aria-label="Default select example" style={{ width: '90%', margin: '0.4em 1em' }} onChange={(event) => {setData({...data, status: event.target.value})}} required>
                            <option value="none" disabled>Status of the event</option>
                            <option value="Going on">Going on</option>
                            <option value="Completed">Completed</option>
                            <option value="Not started">Not started</option>
                        </select>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <label htmlFor="" style={{ width: '90%', margin: '0em 1em' }}>Date & Time of the event</label>
                        <input className="form-control shadow-none" id="datetime-local" type="datetime-local" style={{ width: '90%', margin: '0.6em 1em' }} onChange={(event) => {setData({...data, date: event.target.value})}} required/>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <TextField label="Venue of the event" sx={{ width: '90%', margin: '0.4em 1em' }} onChange={(event) => {setData({...data, venue: event.target.value})}} required/>
                    </div>
                    <button type='submit' className='btn btn-primary shadow-none' style={{ margin: '0.4em 1em' }}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EventForm
