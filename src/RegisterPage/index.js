import React from 'react';
// import {reactLocalStorage} from 'reactjs-localstorage';

import {Link} from 'react-router-dom'

import Header from './../components/Header/Header'

// import {connect } from 'react-redux';
// import { addUser } from "../actions";
//
// import { bindActionCreators  } from 'redux';

//password check





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
        this.strengthBar = 0;
        this.checkName=this.checkName.bind(this)
        this.wrongName='';
        // this.navigateToLogin=this.navigateToLogin.bind(this);

    }

    componentDidMount() {
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

        const alreadyRegisterData = JSON.parse(localStorage.getItem('registerFormData'))

        const userExist = alreadyRegisterData.filter((userObj)=>{
            return (userObj.rID===userData.rID)
        });
        console.log("===user Exist====")
        console.log(userExist)
        if(userExist.length>0){
            console.log("===already register===")
            alert("user already exist")
        }
        else{
            localStorage.setItem('registerFormData',JSON.stringify(ar))
            alert("Register Sucessful Id"+this.state.rID)
            this.props.history.push('/')

        }
    }

    checkPassword(password) {
        console.log("=====password Check====")
        const pass= password;

        console.log(pass)
        var strengthBar = 0;
        var strength = 0 ;

        if (pass.match(/[a-zA-Z0-9][a-zA-Z0-9]+/ )){//2 words matches
            strength+=1
        }
        if (pass.match(/[~<>?]+/ )){//special character
            strength+=1
        }
        if (pass.match(/[!@#$%^&*()]+/ )){// other special character"
            strength+=1
        }
        if (pass.length>5){//length greater than 5
            strength+=1
        }

        console.log(strength)


        console.log("=====after password Check====")
        switch (strength){
            case 0:
                strengthBar ='0'
                break
            case 1:
                strengthBar ='40'
                break
            case 2:
                strengthBar ='60'
                break
            case 3:
                strengthBar ='80'
                break
            case 4:
                strengthBar ='100'
                break
            default:
                strengthBar = 0

        }
        this.strengthBar = strengthBar;
    }
    checkName(event){
        console.log("===register check name ======")
        event.preventDefault();
        this.setState({fname: event.target.value})

        console.log("====fname =========")
        console.log(event.target.value)
        // console.log(name)

        if (!event.target.value.match(/[a-zA-Z]+/ )) {
            console.log("please enter character only")
            this.wrongName="please enter characters"

        }
        else if(event.target.value.match(/[0-9~`?><,.!@#$%^&*()_=+-]+/ )){
            this.wrongName="please enter characters"

        }
        else{
            this.wrongName=''
        }

    }
    handleChange(event){
        console.log("===register handle change ======")
        event.preventDefault();

        this.setState({rpasswd: event.target.value})

        console.log(this.state.rpasswd)

        this.checkPassword(this.state.rpasswd);

        // this.setState({value: event.target.value});
        //
        // this.checkPassword({value: event.target.value});



    }


    // navigateToLogin = () => {
    //     console.log('===== in navigate ===')
    //     console.log(this.props)
    //     this.props.history.push('/')
    //
    // }

    render(){
        console.log(this.props)
        console.log('========== this.strengthBar ===')
        console.log(this.strengthBar)
        return(
            <div>
                <div>
                    <Header register="register"/>

                </div>
                <div >


                    <h1 className="text-center">Create An Account</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row col-md-2 col-md-offset-4 ">
                            <div className="form-group">
                                <label>Firstname:</label>
                                <br/>
                                <input type="text"
                                      placeholder="First Name"
                                      value={this.state.fname}
                                      onChange={this.checkName }
                                      // onChange={(event)=>  this.setState({fname: event.target.value}) }
                                       required
                                       className="form-control"
                                />
                                <p>{this.wrongName}</p>
                            </div>

                            <div className="form-group">
                                <label>Lastname:</label>
                                <br/>
                                <input type="text"
                                        value={this.state.lname}
                                        placeholder="SurName"
                                        onChange={(event)=>  this.setState({lname: event.target.value}) }
                                       required
                                       className="form-control"
                                />

                            </div>

                            <div className="form-group">
                                <label>Date Of Birth:</label>
                                <br/>
                                <input type="date"
                                       value={this.state.dob}
                                       placeholder="Date Of Birth"
                                       onChange={(event)=>  this.setState({dob: event.target.value}) }
                                       required
                                       className="form-control"
                                />

                            </div>

                            <div className="form-group">
                                <label>Email or Phone:</label>
                                <br/>
                                <input type="text"
                                       value={this.state.rID}
                                       placeholder="Email or Phone"
                                       onChange={(event)=>  this.setState({rID: event.target.value}) }
                                       required
                                       className="form-control"
                                       // pattern="[1-9]{1}[0-9]{9}"
                                />

                            </div>

                            <div className="form-group">
                                <label>Password:</label>
                                <br/>
                                <input type="password"
                                       value={this.state.rpasswd}
                                       placeholder="Password"
                                       onChange={this.handleChange }
                                       required
                                       className="form-control"
                                />

                                <progress max="100"
                                          value={this.strengthBar}
                                          id="strength"

                                >

                                </progress>

                                <p>password must contain one Upper case, lower case, and digit</p>

                            </div>

                            <div className="form-group">
                                <label>Register Type:</label>
                                <select value={this.state.registerType}
                                        onChange={(event)=>  this.setState({registerType: event.target.value})}
                                        required
                                        className="form-control"
                                >
                                    <option value="" disabled >Select Register Type</option>
                                    <option value="Admin"  >Admin</option>
                                    <option value="User" defaultValue >User</option>
                                </select>
                            </div>
                            <br/>

                            <div>
                                <input type="submit" value="Sign Up"  className="btn btn-info"/>
                                {' '}
                                <Link to='/' className="btn btn-info" >Cancel</Link>

                            </div>
                        </div>


                    </form>

                </div>
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