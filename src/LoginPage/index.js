import React from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';

import {Link } from 'react-router-dom';

// import {connect} from 'react-redux';
//
// import {bindActionCreators} from 'redux';
//
// import {addUser} from "../actions";

// import {Router,Route,withRouter} from 'react-router';


// import Home from './../HomePage/index';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            lID:'',
            lpasswd:'',
            loginType:''

        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);

    }
    // LoginToHome(){
    //     console.log("=====In Login to home+++++++++++")
    //     // console.log(this.props.router)
    //
    //     this.props.history.push('/home')
    //
    //
    // }





    handleSubmit(event){
        event.preventDefault();
        var lid = this.state.lID;
        var lpasswd = this.state.lpasswd
        var fval =reactLocalStorage.getObject(lid);

        console.log("====Login Submit========")
        console.log(fval)
        console.log(fval.rID)
        console.log(fval.rpasswd)
        console.log(this.state.lID)
        console.log(lid)
        console.log(lpasswd)

        if(lid===fval.rID && lpasswd===fval.rpasswd){
            alert("Login Sucessful")
            // this.props.addUser(lid)
            this.props.history.push('/home')
            console.log("======userid from store========")
            console.log(this.state.userId)



        }else if(lid===fval.rID && lpasswd!==fval.rpasswd){
            alert("Login fail please check your password")

        }
        else{
            alert("Login fail")

        }
    }

    handleChange(event){
        event.preventDefault();
        this.setState({value: event.target.value});

    }

    render(){
        return(
            <div>
                <h1>Login Page</h1>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        <div>
                            Username:
                            <br/>

                            <input type="text"
                                   placeholder="Email or Phone"
                                   value={this.state.lID}
                                   onChange={(event)=> this.setState({lID: event.target.value})}
                            />

                        </div>
                        <br/>
                        <div>
                            Password:
                            <br/>
                            <input type="password"
                                   placeholder="Password"
                                   value={this.state.lpasswd}
                                   onChange={(event)=> this.setState({lpasswd: event.target.value})}
                            />

                        </div>

                        <br/>
                        <div>
                            Register Type:
                            <select value={this.state.loginType}
                                    onChange={(event)=>  this.setState({loginType: event.target.value})}
                            >
                                <option value="" disabled >Select Login Type</option>
                                <option value="Admin" key="Admin" >Admin</option>
                                <option value="User" key="User">User</option>
                            </select>
                        </div>
                        <br/>
                        <div>
                            <input type="submit" value="Login"  />
                            {' '}
                            <Link to='/register'  >Register</Link>

                        </div>
                    </label>

                </form>

            </div>
        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({addUser},dispatch);
//
// }
//
// function mapStateToProps(state) {
//     return state
//
// }


// export default  connect(mapStateToProps,mapDispatchToProps)(Login);
export default  Login;