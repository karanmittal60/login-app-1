import React from 'react';

// import {Link} from 'react-router-dom'

import Header from './../components/Header/Header'


let ar = [];

// let editData = {
//     fname: "88",
//     lname: "88",
//     dob: "0088-08-08",
//     rID: "88",
//     rpasswd: "88",
//     registerType: "User"
// };
// console.log("====Edit registered User edit user Id====")
// console.log(editData)


class EditRegisteredUser extends React.Component{
    constructor(props){
        super(props);

        console.log("===Edit registered User constructor===")
        const data = this.props.location.state

        console.log(data)
        console.log(data.fname)

        this.state={
            fname: data.fname,
            lname: data.lname,
            rID: data.rID,
            rpasswd: data.rpasswd,
            dob: data.dob,
            registerType:data.registerType
        }

        console.log('====== this.state.fname -==-==')
        console.log(this.state.fname)


        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);

    }

    componentWillMount() {
        console.log("====Edit registered User componentWillMount============")
        console.log(this.state.fname)
        console.log(this.state)
        const editData = this.state
        console.log(editData)
        ar = localStorage.getItem('registerFormData') ? JSON.parse(localStorage.getItem('registerFormData')) : [];
        console.log('===== data ===')

        console.log(editData)

        ar = ar.filter(personObj => personObj.rID!==editData.rID);


    }


    handleSubmit(event){
        event.preventDefault();
        console.log("====Edit registered User Submit============")

        const userData = {
            'fname':this.state.fname,
            'lname':this.state.lname,
            'dob':this.state.dob,
            'rID':this.state.rID,
            'rpasswd':this.state.rpasswd,
            'registerType':this.state.registerType

        }

        console.log("=======Edit registered User push data======")

        ar.push(userData)


        localStorage.setItem('registerFormData',JSON.stringify(ar))
        alert("data updated")
        this.props.history.push(`/home/45`)


    }

    handleChange(event){
        console.log("===handle Change Edit registered User ====")
        event.preventDefault();
        this.setState({value: event.target.value});


    }

    render(){
        console.log("====Edit registered User render============")

        return(
            <div>
                <div>

                    {/*<h1>Edit Registered user</h1>*/}
                    <Header editRegisteredUser="editRegisteredUser"/>

                </div>
                <div >


                    <h1 className="text-center">Edit Registered user</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row col-md-2 col-md-offset-4 ">
                            <div className="form-group">
                                <label>Firstname:</label>
                                <br/>
                                <input type="text"
                                       placeholder="First Name"
                                       value={this.state.fname}
                                       onChange={(event)=>  this.setState({fname: event.target.value}) }
                                       required
                                       className="form-control"
                                />
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
                                       disabled
                                />

                            </div>

                            <div className="form-group">
                                <label>Password:</label>
                                <br/>
                                <input type="password"
                                       value={this.state.rpasswd}
                                       placeholder="Password"
                                       onChange={(event)=>  this.setState({rpasswd: event.target.value}) }
                                       required
                                       className="form-control"
                                />

                            </div>

                            <div className="form-group">
                                <label>Register Type:</label>
                                <select value={this.state.registerType}
                                        onChange={(event)=>  this.setState({registerType: event.target.value})}
                                        required
                                        className="form-control"
                                        disabled
                                >
                                    <option value="" disabled >Select Register Type</option>
                                    <option value="Admin"  >Admin</option>
                                    <option value="User" defaultValue >User</option>
                                </select>
                            </div>
                            <br/>

                            <div>
                                <input type="submit" value="Update"  className="btn btn-info"/>
                                {/*{' '}*/}
                                {/*<Link to='/' className="btn btn-info" >Cancel</Link>*/}

                            </div>
                        </div>


                    </form>

                </div>
            </div>

        );
    }
}

export default EditRegisteredUser;