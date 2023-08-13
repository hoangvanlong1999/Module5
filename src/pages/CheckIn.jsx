import React, { useState } from 'react';
import Masterlayout from '../layouts/Masterlayout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function CheckIn(props) {
    const navigate = useNavigate();

    const [account, setAccount] = useState({
        email: '',
        password: ''
    });

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/login_customer', account);
            const { token } = response.data?.authorization;
            // Lưu JWT vào bộ nhớ trình duyệt
            localStorage.setItem('jwtToken', token);

            const {user} = response.data;
            localStorage.setItem('user', JSON.stringify(user));
            Swal.fire({
                icon: "success",
                title: "Đăng nhập thành công!",
                showConfirmButton: false,
                timer: 1500,
            });

            // Điều hướng tới trang sau khi đăng nhập thành công
            navigate('/');
        } catch (error) {
            alert('đăng nhập thất bại');
            navigate('/checkin');
        }
    };

    const handleOnChange = (e) => {
        setAccount({ ...account, [e.target.name]: e.target.value })
    }



    // register

    const [registerdata, setRegisterdata] = useState({
        name: '',
        emai: '',
        address: '',
        phone: '',
        password: ''
    });

    const handleOnChange1 = (e) => {
        setRegisterdata({ ...registerdata, [e.target.name]: e.target.value })
    }
    const register = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/register', registerdata);
            console.log(response.data.user);

            if (response.data?.user) {
                Swal.fire({
                    icon: "success",
                    title: "Đăng Ký thành công!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setRegisterdata({
                    name: '',
                    emai: '',
                    address: '',
                    phone: '',
                    password: ''
                })
            } else {
                alert('đăng ký thất bại')
            }

            // Điều hướng tới trang sau khi đăng nhập thành công
            // navigate('/');
        } catch (error) {
            // navigate('/checkin');
            alert('đăng ký thất bại')
        }
    }

    return (
        <Masterlayout>
            <section className="main-content">
                <div className="row">
                    <div className="span5">
                        <h4 className="title">
                            <span className="text">
                                <strong>Login</strong> Form
                            </span>
                        </h4>
                        <form onSubmit={handleLogin}>
                            <input type="hidden"
                                defaultValue="/"
                            />
                            <fieldset>
                                <div className="control-group">
                                    <label className="control-label">Email</label>
                                    <div className="controls">
                                        <input
                                            type="text"
                                            placeholder="Enter your username"
                                            id="username"
                                            className="input-xlarge"
                                            name="email"
                                            value={account.email}
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <label className="control-label">Password</label>
                                    <div className="controls">
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            id="password"
                                            className="input-xlarge"
                                            name='password'
                                            value={account.password}
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <input
                                        tabIndex={3}
                                        className="btn btn-inverse large"
                                        type="submit"
                                        defaultValue="Sign into your account"
                                    />
                                    <hr />
                                    <p className="reset">
                                        Recover your{" "}
                                        <a tabIndex={4}
                                            href="#"
                                            title="Recover your username or password"
                                        >
                                            username or password
                                        </a>
                                    </p>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div className="span7">
                        <h4 className="title">
                            <span className="text">
                                <strong>Register</strong> Form
                            </span>
                        </h4>
                        <form onSubmit={register} action="#" method="post" className="form-stacked">
                            <fieldset>
                                <div className="control-group">
                                    <label className="control-label">Username</label>
                                    <div className="controls">
                                        <input
                                            type="text"
                                            placeholder="Enter your username"
                                            className="input-xlarge"
                                            name='name'
                                            value={registerdata.name}
                                            onChange={handleOnChange1}
                                        />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <label className="control-label">Email address:</label>
                                    <div className="controls">
                                        <input
                                            type="text"
                                            placeholder="Enter your email"
                                            className="input-xlarge"
                                            name='email'
                                            value={registerdata.email}
                                            onChange={handleOnChange1}
                                        />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <label className="control-label">Address:</label>
                                    <div className="controls">
                                        <input
                                            type="text"
                                            placeholder="Enter your email"
                                            className="input-xlarge"
                                            name='address'
                                            value={registerdata.address}
                                            onChange={handleOnChange1}
                                        />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <label className="control-label">Phone:</label>
                                    <div className="controls">
                                        <input
                                            type="text"
                                            placeholder="Enter your email"
                                            className="input-xlarge"
                                            name='phone'
                                            value={registerdata.phone}
                                            onChange={handleOnChange1}
                                        />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <label className="control-label">Password:</label>
                                    <div className="controls">
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            className="input-xlarge"
                                            name='password'
                                            value={registerdata.password}
                                            onChange={handleOnChange1}
                                        />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <p>
                                        Now that we know who you are. I'm not a mistake! In a comic, you
                                        know how you can tell who the arch-villain's going to be?
                                    </p>
                                </div>
                                <hr />
                                <div className="actions">
                                    <input
                                        tabIndex={9}
                                        className="btn btn-inverse large"
                                        type="submit"
                                        defaultValue="Create your account"
                                    />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section>

        </Masterlayout>
    );
}

export default CheckIn;