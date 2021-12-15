import React, { Component } from 'react';
import './login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag:0,
            email:'',
            password:'',
            link:""
        };
    }

    async sendFlag(id){
        await localStorage.setItem('flagKey', id)
    }

    handleEmail(e){
        this.setState({email: e.target.value})
    }

    handlePassword(e){
        this.setState({password: e.target.value})
    }

    onSubmit(){
        if(!this.state.email){
            alert("Email tidak boleh kosong")
        } else if (!this.state.password){
            alert("Password tidak boleh kosong")
        } else {
            if(this.state.email == 'admin@asnursport.com' && this.state.password == '12345678'){
                this.setState({link: 'dashboard', flag: 1})
            } else {
                alert("Email atau Password salah!")
            }
        }
    }
    render() {
        return (
            <div>

                {/* Kotak Login */}
                <div className='container fixing-top'>
                    <h2>Asnur Sport Center</h2>
                    <form className='form'>
                        <div className='fixing-pad'>
                            <h5 style={{float:'left'}}><i className='fa fa-user'></i> Username</h5>
                            <input onChange={this.handleEmail.bind(this)} className='form-control' type="text" />
                        </div>

                        <div className='fixing-pad'>
                            <h5 style={{float:'left'}}><i className='fa fa-lock'></i> Password</h5>
                            <input onChange={this.handlePassword.bind(this)} className='form-control' type="password" />
                        </div>

                        <div className='fixing-pad'>
                            <a className='full btn btn-primary' href={`/${this.state.link}`} onClick={()=>{this.onSubmit();this.sendFlag(this.state.flag)}}>Masuk</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;