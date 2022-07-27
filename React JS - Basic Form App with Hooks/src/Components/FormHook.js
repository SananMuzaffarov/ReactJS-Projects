import React, {useState} from "react";

const Form = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        Email: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const [valid, setValid] = useState(false);

    const handleChangeName = (e) => {
        setValues({...values, firstName: e.target.value })
    }
    const handleChangeLastName = (e) => {
        setValues({...values, lastName: e.target.value })
    }
    const handleChangeEmail = (e) => {
        setValues({...values, Email: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(values.firstName && values.lastName && values.Email){
            setValid(true)
        }
        setSubmitted(true)
    }

    return(
          <div className="container">
            <form onSubmit={handleSubmit}>
            <h1>{submitted && valid ? <div>You're successfully registered.</div> : null}</h1>
                <input
                type='text'
                name="firstName"
                value={values.firstName}
                placeholder="Enter Your First Name"
                onChange={handleChangeName}
                />
                <p id="error">{submitted && !values.firstName ? <span>Please Enter Name</span> : null}</p>
                <input
                type='text'
                name="lastName"
                value={values.lastName}
                placeholder="Enter Your Last Name"
                onChange={handleChangeLastName}
                />
                <p id="error">{submitted && !values.lastName ? <span>Please Enter Last Name</span> : null}</p>
                <input
                type='email'
                name="email"
                value={values.Email}
                placeholder="Enter Your Email"
                onChange={handleChangeEmail}
                />
                <p id="error">{submitted && !values.Email ? <span>Please Enter Email</span> : null}</p>
                <button type="submit">Submit</button>
            </form>
          </div>
    )
}
export default Form;