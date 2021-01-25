import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Form } from 'formik'
import TextError from './TextError'
import { Link } from 'react-router-dom'


const initialValues = {
    name:'',
    email:'',
    password:''
}

const onSubmit = values => {
    console.log('Form Data', values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid Email Format').required('Required')    
})

function Login() {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        > 
        <Form>        
            <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='name' name='name' placeholder='Enter Your Full Name'/>
                    <ErrorMessage name='name' component={TextError} />
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <Field type='email' id='email' name='email' placeholder='Enter your email id'/>
                    <ErrorMessage name='email'>
                        {errorMsg => <div className='error'> {errorMsg}</div>}
                    </ErrorMessage>
                </div>

                <div className='form-control'>
                    <label htmlFor='password'> Password </label>
                    <Field type='password' id='password' name='password' />
                </div>
                <button type='submit'>Submit</button>
                <Link to="/registrationForm" style={{boxShadow: "none"}}>Register Here</Link>                
        </Form>
        </Formik>
    )
}

export default Login