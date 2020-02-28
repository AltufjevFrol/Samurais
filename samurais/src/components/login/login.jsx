import React from 'react';
import styles from './login.module.css';
import {Field, reduxForm} from 'redux-form';


let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={'input'} name={'name'} placeholder={'Name'}/></div>
            <div><Field component={'input'} name={'password'} placeholder={'password'}/></div>
            <div><label><Field component={'input'} name={'isRemember'} type={'checkbox'}/> remember me </label></div>
            <div>
                <button >Login</button>
            </div>
        </form>
    )
};

LoginForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData)=>{
        console.log(formData);
    }
    return (
        <div className={styles.login}>
            <h1>LOGIN</h1>
            < LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login