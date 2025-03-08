import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        age: 0
    })
    let navigate= useNavigate();
    const [users, setUsers] = useState([])
    useEffect(() => {
        const allUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(allUsers);
    }, [])
    let changeInput = (e) => {
        let myUser = { ...user };
        myUser[e.target.name] = e.target.value;
        setUser(myUser);

    }
    const isEmailUnique = (email) => {
        return !users.some(user => user.email === email);
    };
    let validateForm = () => {
        let newError = {}
        let isValid = true
        if (!user.first_name.trim()) {
            newError.first_name = "First name is required";
            isValid = false;
        }
        if (!user.last_name.trim()) {
            newError.last_name = "Last name is required";
            isValid = false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(user.email.trim())) {
            newError.email = "Invalid email format";
            isValid = false;
        }
        else if (!isEmailUnique(user.email.trim())) {
            newError.email = "Email is already registered";
            isValid = false;
        }
        if (user.password.trim().length < 6) {
            newError.password = "Password must be at least 6 characters";
            isValid = false;
        }
        if (user.age <= 0) {
            newError.age = "Age must be a positive number";
            isValid = false;
        }
        setError(newError);
        return isValid;
    }
    let submitForm = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const updatedUsers = [...users, user];
            setUsers(updatedUsers)
            localStorage.setItem('users', JSON.stringify(updatedUsers))
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setUser({
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    age: 0
                })
                navigate('/login')
            }, 1000);
        }
        else {
            //    setLoading(false) 
        }
    }
    return (
        <>
            <div className='container mt-5'>
                <h2 className='mb-4'>Register Now</h2>
                <form action="" onSubmit={submitForm}>
                    <div className="row my-4">
                        <div className='col-md-6'>
                            <label htmlFor="first_name">first_name :</label>
                            <input type="text" className="form-control mb-2" name='first_name' id='first_name' value={user.first_name} onChange={changeInput} />
                            {error.first_name && <div className="alert alert-danger p-1">{error.first_name}</div>}
                        </div>

                        <div className='col-md-6'>
                            <label htmlFor="last_name">last_name :</label>
                            <input type="text" className="form-control mb-2" name='last_name' id='last_name' value={user.last_name} onChange={changeInput} />
                            {error.last_name && <div className="alert alert-danger p-1">{error.last_name}</div>}

                        </div>
                    </div>

                    <div className="row my-4">
                        <div className='col-md-6'>
                            <label htmlFor="email">email :</label>
                            <input type="email" className="form-control mb-2" name='email' id='email' value={user.email} onChange={changeInput} />
                            {error.email && <div className="alert alert-danger p-1">{error.email}</div>}
                        </div>

                        <div className='col-md-6'>
                            <label htmlFor="password">password :</label>
                            <input type="password" className="form-control mb-2" name='password' id='password' value={user.password} onChange={changeInput} />
                            {error.password && <div className="alert alert-danger p-1">{error.password}</div>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="age">age :</label>
                        <input type="number" className="form-control mb-2 w-50" name='age' id='age' value={user.age} onChange={changeInput} />
                        {error.age && <div className="alert alert-danger p-1">{error.age}</div>}
                    </div>
                    <button type='submit' className='btn btn-info mt-4'>
                        {loading?<i className='fas fa-spinner fa-spin'></i>:"register"}
                        </button>
                </form>

            </div>
        </>
    )
}

export default Register
