import { TextField } from '@mui/material'
import React from 'react'
import Select from 'react-select'
import styles from './EventForm.module.css'


const EventForm = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
      
    return (
        <div className='container'>
            <div className="row">
                <form>
                    <h1 className="mb-3" style={{ width: '90%', margin: '0.4em 0.5em', marginTop: '0.5em' }}>Event Form</h1>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <TextField label="Title of the event" sx={{ width: '90%', margin: '0.4em 1em' }} required/>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <TextField multiline rows={4} label="Description of the event" sx={{ width: '90%', margin: '0.4em 1em' }} required/>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <Select options={options} className={styles.speakers} isMulti={true}/>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <select class="form-select mb-3 shadow-none" aria-label="Default select example" style={{ width: '90%', margin: '0.4em 1em' }} required>
                            <option selected disabled>Status of the event</option>
                            <option value="lead">Going on</option>
                            <option value="core">Completed</option>
                            <option value="member">Not started</option>
                        </select>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <label htmlFor="" style={{ width: '90%', margin: '0em 1em' }}>Date & Time of the event</label>
                        <input class="form-control shadow-none" id="datetime-local" type="datetime-local" style={{ width: '90%', margin: '0.6em 1em' }} required/>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <TextField label="Venue of the event" sx={{ width: '90%', margin: '0.4em 1em' }} required/>
                    </div>
                    <button type='submit' className='btn btn-primary shadow-none' style={{ margin: '0.4em 1em' }}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EventForm
