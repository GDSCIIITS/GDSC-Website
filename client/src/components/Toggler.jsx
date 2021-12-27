import React from 'react'
import classes from './Toggler.module.css'
import { themeActions } from '../store/DarkThemeReducer'
import { useSelector, useDispatch } from 'react-redux'

const Toggler = () => {
    const themeData = useSelector((state) => state.DarkMode)
    const dispatch = useDispatch()
    const logger = (logs) => {
        dispatch(
            themeActions.toggleTheme(logs.target.checked)
        );
    }
    const classname = themeData.theme ? classes.dark : '';
    return (
        <div className={"form-check form-switch form-switch-sm " + classes.button + " " + classname}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={logger} checked={themeData.theme} />
        </div>
    )
}

export default Toggler
