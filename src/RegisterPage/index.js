import React from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';

import {Link} from 'react-router-dom'

import {connect } from 'react-redux';
import { addUser } from "../actions";

import { bindActionCreators  } from 'redux';
// import Routes from "../Routes";

// import {Switch,Route} from 'react-router-dom'
// import Login from "../LoginPage";


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fname: '',
            lname: '',
            rID: '',
            rpasswd: '',
            dob: '',
            registerType:'User'
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        // this.navigateToLogin=this.navigateToLogin.bind(this);

    }


    handleSubmit(event){
        event.preventDefault();
        console.log("====Regester Submit============")
        console.log(this.state.fname)
        reactLocalStorage.set('name',"karan");
        var nm= reactLocalStorage.get('name');
        console.log(nm)
        console.log("++++++======this.state++++++++")
        console.log(this.state)

        console.log("+=============list of user=======")
        const listOfUser=this.state.rID;
        console.log("=====userID ==========json array++========1")
        console.log(listOfUser)
        const userData = {
            'fname':this.state.fname,
            'lname':this.state.lname,
            'dob':this.state.dob,
            'rID':this.state.rID,
            'rpasswd':this.state.rpasswd,
            'registerType':this.state.registerType

        }

        console.log("=====userData ==========json array++========")
        console.log(userData)
        // const userData1= JSON.stringify(userData);
        // console.log(userData1)
        // this.props.addUser(this.state);
        this.props.addUser(userData);


        reactLocalStorage.setObject(listOfUser,userData)
        alert("Register Sucessful Id"+this.state.rID)
        // this.setState({
        //     fname: '',
        //     lname: '',
        //     rID: '',
        //     rpasswd: '',
        //     dob: ''
        // })
        this.props.history.push('/')

    }

    handleChange(event){
        event.preventDefault();
        this.setState({value: event.target.value});


    }

    // navigateToLogin = () => {
    //     console.log('===== in navigate ===')
    //     console.log(this.props)
    //     this.props.history.push('/')
    //
    // }

    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Create An Account</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <div>
                            Firstname:
                            <br/>
                            <input type="text"
                                  placeholder="First Name"
                                  value={this.state.fname}
                                  onChange={(event)=>  this.setState({fname: event.target.value}) }
                            />
                        </div>
                        <br/>
                        <div>
                            Lastname:
                            <br/>
                            <input type="text"
                                    value={this.state.lname}
                                    placeholder="SurName"
                                    onChange={(event)=>  this.setState({lname: event.target.value}) }
                            />

                        </div>
                        <br/>
                        <div>
                            Date Of Birth:
                            <br/>
                            <input type="date"
                                   value={this.state.dob}
                                   placeholder="Date Of Birth"
                                   onChange={(event)=>  this.setState({dob: event.target.value}) }
                            />

                        </div>
                        <br/>
                        <div>
                            Email or Phone:
                            <br/>
                            <input type="text"
                                   value={this.state.rID}
                                   placeholder="Email or Phone"
                                   onChange={(event)=>  this.setState({rID: event.target.value}) }
                            />

                        </div>
                        <br/>
                        <div>
                            Password:
                            <br/>
                            <input type="password"
                                   value={this.state.rpasswd}
                                   placeholder="Password"
                                   onChange={(event)=>  this.setState({rpasswd: event.target.value}) }
                            />

                        </div>
                        <br/>
                        <div>
                            Register Type:
                            <select value={this.state.registerType}
                                    onChange={(event)=>  this.setState({registerType: event.target.value})}
                            >
                                <option value="" disabled >Select Register Type</option>
                                <option value="Admin"  >Admin</option>
                                <option value="User" defaultValue >User</option>
                            </select>
                        </div>
                        <br/>

                        <div>
                            <input type="submit" value="Sign Up"  />
                            {' '}
                            <Link to='/'  >Cancel</Link>

                        </div>
                    </label>


                </form>

            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addUser},dispatch)


}

function mapStatetoProps(state){
    console.log("=======in register mapStatetoProps=========")
    console.log(state)

    return state

}

// Register.prototype= {
//     userSignupRequest: React.propTypes.func.isRequired
//
// }

export default  connect(mapStatetoProps,mapDispatchToProps)( Register);