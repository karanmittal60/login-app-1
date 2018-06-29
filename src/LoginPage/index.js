import React from 'react';

import {Link } from 'react-router-dom';

import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import {addUser} from "../actions";

import Header from './../components/Header/Header'
// import {reactLocalStorage} from 'reactjs-localstorage';

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

            return (authObj.rID === lid)
            // return (((authObj.rID === lid)&&(authObj.rpasswd === lpasswd)&&(authObj.registerType === ltype) )>0) //3 checks
        });

        console.log("====authenticate user object==== ");
        console.log(rVal)

        if (rVal.length>0){
            console.log("authenticate user is not null")
            const rID1 = rVal[0].rID;
            const rpasswd1 = rVal[0].rpasswd;
            const registerType1 = rVal[0].registerType;
            console.log("register data ")
            console.log(rID1,rpasswd1,registerType1)



                if (rID1 === lid && rpasswd1 === lpasswd && registerType1 === ltype) {
                    alert("Login Sucessful")
                    this.props.addUser(lid)
                    this.props.history.push (`/home/${lid}`)     ///"`" special operator to fetch the values
                    console.log("======userid from store========")
                    // console.log(" LOgin Id = "+idReturn)
                    console.log(this.state.userId)


                } else if (rID1 === lid && rpasswd1 !== lpasswd && registerType1 === ltype) {
                    alert("Login fail please check your password")

                } else if (rID1 === lid && rpasswd1 === lpasswd && registerType1 !== ltype) {
                    alert("Login fail please check User Type")

                }
                else {
                    alert("Login fail please check id and password")

                }



        }
        else {
            alert("no registered user")
        }

        // const rID = rVal[0].rID;
        // const rpasswd = rVal[0].rpasswd;
        // const registerType = rVal[0].registerType;
        // console.log("register data ")
        // console.log(rID,rpasswd,registerType)
        // console.log(rID)
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




    }

    handleChange(event){
        event.preventDefault();
        this.setState({value: event.target.value});

    }

    render(){
        return(
            <div>
                <div>
                    <Header login="login" />

                </div>
                <div>

                    <h1 className="text-center">Login Page</h1>
                    <form onSubmit={this.handleSubmit} >

                        <div className="row">
                            <div className="col-md-2 col-md-offset-4 ">
                                <div className="form-group">
                                    <label>Username:</label>


                                    <input type="text"
                                           placeholder="Email or Phone"
                                           value={this.state.lID}
                                           onChange={(event)=> this.setState({lID: event.target.value})}
                                           required
                                           className="form-control"

                                    />

                                </div>

                                <div className="form-group">
                                    <label>Password:</label>
                                    <br/>
                                    <input type="password"
                                           placeholder="Password"
                                           value={this.state.lpasswd}
                                           onChange={(event)=> this.setState({lpasswd: event.target.value})}
                                           required
                                           className="form-control"
                                    />

                                </div>


                                <div className="form-group">
                                    <label>Register Type:</label>
                                    <select value={this.state.loginType}
                                            onChange={(event)=>  this.setState({loginType: event.target.value})}
                                            required
                                            className="form-control"
                                    >
                                        <option value="" disabled >Select Login Type</option>
                                        <option value="Admin"  >Admin</option>
                                        <option value="User" defaultValue >User</option>
                                    </select>
                                </div>
                                <br/>
                                <div>
                                    <input type="submit" value="Login"  className="btn btn-info"/>
                                    {' '}
                                    <Link to='/register' className="btn btn-info" >Register</Link>

                                </div>
                            </div>
                        </div>

                    </form>

                </div>

            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addUser},dispatch);

}

function mapStateToProps(state) {
    console.log("===== login page map state to props =====")
    console.log(state)
    return state

}


export default  connect(mapStateToProps,mapDispatchToProps)(Login);
// export default  Login;