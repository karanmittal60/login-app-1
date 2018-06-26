import React from 'react';
// import {reactLocalStorage} from 'reactjs-localstorage';

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
        var lpasswd = this.state.lpasswd;
        var ltype = this.state.loginType;
        var fval =localStorage.getItem('registerFormData');

        var formValues = JSON.parse(fval);

        console.log("login data")

        console.log(lid,lpasswd,ltype)


        var rVal = formValues.filter((authObj) => {
            return (authObj.rID === lid)&&(authObj.rpasswd === lpasswd)&&(authObj.registerType === ltype)
        });

        console.log("authenticate user object ");
        console.log(rVal)

        const rID = rVal[0].rID;
        const rpasswd = rVal[0].rpasswd;
        const registerType = rVal[0].registerType;

        console.log("register data ")

        console.log(rID,rpasswd,registerType)



        console.log(rID)


        // console.log(formValues)
        // console.log(formValues.rID)
        //
        // const IDs = formValues.map(e => e.rID);
        // console.log("====IDs++++====")
        // console.log(IDs)
        // const pass = formValues.map(e => e.rpasswd);
        // console.log("====rpasss++++====")
        // console.log(pass)
        // const loginType1 = formValues.map(e => e.registerType);
        // console.log("====loginType1++++====")
        // console.log(loginType1)
        //
        //
        // console.log("====Login Submit========")
        //
        //
        // console.log("lid = "+lid)
        // console.log("lpasswd = "+lpasswd)
        // console.log("ltype = "+ltype)
        //
        // const idReturn=IDs.filter(IDs => IDs===lid );
        // console.log("idReturn= "+idReturn)
        //
        // const idPassword=IDs.filter(pass => pass===lpasswd );
        // console.log("idPassword= "+idPassword)


        // const formValid = formValues.filter(formValues =>formValues.rID===lid
        // );
        // console.log("formValues ="+formValid)
        // var a = [1, 2, 3, 3, null, 5 ,6,'richardgong', undefined],
        //     b = a.filter(function(item, index, array){
        //         return index;
        //     });
        // console.log(b);// [2, 3, 3, null, 5, 6, "richardgong", undefined]

        if(lid!==null&&lpasswd!==null&&ltype!==null) {

            if (rID === lid && rpasswd === lpasswd && registerType === ltype) {
                alert("Login Sucessful")
                // this.props.addUser(lid)
                this.props.history.push('/home')
                console.log("======userid from store========")
                // console.log(" LOgin Id = "+idReturn)
                console.log(this.state.userId)


            } else if (rID === lid && rpasswd !== lpasswd && registerType === ltype) {
                alert("Login fail please check your password")

            } else if (rID === lid && rpasswd === lpasswd && registerType !== ltype) {
                alert("Login fail please check User Type")

            }
            else {
                alert("Login fail please check id and password")

            }
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
                                <option value="Admin"  >Admin</option>
                                <option value="User" defaultValue >User</option>
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