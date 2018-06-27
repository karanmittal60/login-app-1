import React from 'react';
// import {reactLocalStorage} from 'reactjs-localstorage';

import {Link} from 'react-router-dom'

// import {connect } from 'react-redux';
// import { addUser } from "../actions";
//
// import { bindActionCreators  } from 'redux';
let ar = [];

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fname: '',
            lname: '',
            rID: '',
            rpasswd: '',
            dob: '',
            registerType:''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        // this.navigateToLogin=this.navigateToLogin.bind(this);

    }

    componentDidMount() {
        // localStorage.removeItem('registerFormData')
        // const ar = [];
        ar = localStorage.getItem('registerFormData') ? JSON.parse(localStorage.getItem('registerFormData')) : [];
        console.log('===== data ===')
        console.log(ar)
        localStorage.setItem('registerFormData', JSON.stringify(ar));
        // if (data !== null) {
        //     console.log(data.length)
        //     data.map((data) => {
        //         ar.push(data);
        //     })
        // }
    }


    handleSubmit(event){
        event.preventDefault();
        console.log("====Regester Submit============")
        console.log(this.state.fname)


        console.log("+=============list of user=======")
        const listOfUser=this.state.rID;
        console.log("=====userID ==========json array++========1")


        const userData = {
            'fname':this.state.fname,
            'lname':this.state.lname,
            'dob':this.state.dob,
            'rID':this.state.rID,
            'rpasswd':this.state.rpasswd,
            'registerType':this.state.registerType

        }
        // ar.push({listOfUser,userData})
        ar.push(userData)




        console.log("=====userData ==========json array++========")
        console.log(userData)
        console.log(listOfUser)


        // this.props.addUser(userData);      //redux part for register

        // console.log('===== ar ===')
        // console.log(ar)


        localStorage.setItem('registerFormData',JSON.stringify(ar))
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
                                   required
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
                                   required
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
                                   required
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
                                   required
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
                                   required
                            />

                        </div>
                        <br/>
                        <div>
                            Register Type:
                            <select value={this.state.registerType}
                                    onChange={(event)=>  this.setState({registerType: event.target.value})}
                                    required
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

// function mapDispatchToProps(dispatch){                   //redux part for register
//     return bindActionCreators({addUser},dispatch)
//
//
// }
//
// function mapStatetoProps(state){
//     console.log("=======in register mapStatetoProps=========")
//     console.log(state)
//
//     return state
//
// }
// Register.prototype= {
//     userSignupRequest: React.propTypes.func.isRequired
//
// }

export default   Register;
// export default  connect(mapStatetoProps,mapDispatchToProps)( Register);