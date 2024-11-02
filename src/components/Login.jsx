import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login(props) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    let navigate = useNavigate();
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
    let validateForm = () => {
        let newError = {}
        let isValid = true
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(user.email.trim())) {
            newError.email = "Invalid email format";
            isValid = false;
        }
        if (user.password.trim().length < 6) {
            newError.password = "Password must be at least 6 characters";
            isValid = false;
        }
        setError(newError);
        return isValid;
    }
    let submitForm = (e) => {
        e.preventDefault();
        if (validateForm()) {
            let currentUser = users.find(u => u.email === user.email && u.password === user.password)
            if (currentUser) {
                localStorage.setItem('currentUser', JSON.stringify(currentUser))
                setLoading(true);
                setTimeout(() => {
                    props.saveUserData();
                    setLoading(false);
                    setUser({
                        email: "",
                        password: "",
                    })
                    navigate('/');
                }, 1000);

            }
            else {
                alert("Email or password is incorrect")
                setUser({
                    email: "",
                    password: "",
                })
            }
        }
        else {
            //    setLoading(false) 
        }
    }
    return (
        <>
            <div className='container mt-5'>
                <h2 className='mb-4'>Login Now</h2>
                <form action="" onSubmit={submitForm}>
                    <div >
                        <label htmlFor="email">email :</label>
                        <input type="email" className="form-control mb-2" name='email' id='email' value={user.email} onChange={changeInput} />
                        {error.email && <div className="alert alert-danger p-1">{error.email}</div>}
                    </div>

                    <div>
                        <label htmlFor="password">password :</label>
                        <input type="password" className="form-control mb-2" name='password' id='password' value={user.password} onChange={changeInput} />
                        {error.password && <div className="alert alert-danger p-1">{error.password}</div>}
                    </div>
                    <button type='submit' className='btn btn-info mt-4'>
                        {loading ? <i className='fas fa-spinner fa-spin'></i> : "Login"}
                    </button>
                </form>

            </div>
        </>
    )
}

export default Login
