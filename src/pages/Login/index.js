import React, { Component } from 'react';
import './login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>

                {/* Kotak Login */}
                <div className='container fixing-top'>
                    <h2>Asnur Sport</h2>
                    <form className='form' action='#'>
                        <div className='fixing-pad'>
                            <h5 style={{float:'left'}}><i className='fa fa-user'></i> Username</h5>
                            <input className='form-control' type="text" />
                        </div>

                        <div className='fixing-pad'>
                            <h5 style={{float:'left'}}><i className='fa fa-lock'></i> Password</h5>
                            <input className='form-control' type="password" />
                        </div>

                        <div className='fixing-pad'>
                            <input className='btn btn-primary full' type={"submit"} />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;