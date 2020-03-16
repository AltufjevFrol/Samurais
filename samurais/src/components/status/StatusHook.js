import React, {useState} from "react";
import {Field, reduxForm} from 'redux-form';

let FormStatus = (props) => {

	return (
		<form onBlur={props.handleSubmit} onSubmit={props.handleSubmit}>
			<Field component={'input'} placeholder={'new status'} name={'status'} autoFocus={true}/>
		</form>
	);
};
FormStatus = reduxForm({form: 'status'})(FormStatus);

const StatusHook = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	const setEdit = () => {
		if (props.userId === props.myId) {
			setEditMode(true);
		}
	};

	const setShow = (formData) => {
		setEditMode(false);
		props.setStatus(formData.status);
	};

	return (
		<div>
			{
				editMode ?
					<FormStatus onSubmit={setShow}/> :
					<div onDoubleClick={setEdit}>{props.status}</div>
			}
		</div>);
};

export default StatusHook;