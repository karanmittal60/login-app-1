import React from 'react';
// import {connect} from 'react-redux';  //redux part to fetch data
// import TableOfUsers from "./TableOfUsers";
// import {reactLocalStorage} from 'reactjs-localstorage';
// import { Link } from 'react-router-dom';
// import AllUsers from './AllUsers';

import Header from './../components/Header/Header'
import User from "../User/User";
import Admin from "../Admin/Admin";

console.log("=======In home outside+========");


// const registeredUsers = localStorage.getItem('registerFormData')
// console.log("===registeredUsers======")
//
// console.log(registeredUsers)



class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
        this.onLogout=this.onLogout.bind(this);
        this.handleUserDelete= this.handleUserDelete.bind(this);

    }

    componentWillMount() {
        const { pathname } = this.props.location; // user id from url
        console.log('===== componDi jkjl==')
        console.log(pathname)
        const parts = pathname.split('/');
         this.logedInUserID =  parts.pop();
        console.log(this.logedInUserID);
    }
    onLogout(event){
        this.props.history.push('/')

    }
    handleUserDelete(userDeleteID){
        console.log("===user delete ID====")
        console.log(userDeleteID)
        const dataFromLocal = JSON.parse(localStorage.getItem('registerFormData'))

        console.log(dataFromLocal)

        const afterDelete = dataFromLocal.filter(deleteObj => deleteObj.rID.indexOf(userDeleteID));

        console.log(afterDelete);

        const itemAfterDelete = JSON.stringify(afterDelete);

        localStorage.setItem("registerFormData",itemAfterDelete)




    }



    render(){
        console.log("=====home render======")
        console.log(this.logedInUserID)
        const loginUserID = this.logedInUserID;
        console.log(loginUserID)

        // const loginUserID= this.props.users.user;   //id from state
        // console.log("====login user id====")
        // console.log(loginUserID)



        const registeredUsers =localStorage.getItem('registerFormData');   //all register users
        const JSONregisteredUsers=JSON.parse(registeredUsers)
        console.log("=====all registeredUsers======")
        console.log(JSONregisteredUsers)

        console.log("====login user object ======")
        const loginUserArray = JSONregisteredUsers.filter(personObj => !personObj.rID.indexOf(loginUserID));//on the bases of id userLogin Data
        console.log(loginUserArray);

        console.log("====login user name ======")
        const loginUserName = loginUserArray[0].fname;  //user name
        console.log(loginUserName)

        console.log("======login user type======")
        const loginUserType = loginUserArray[0].registerType;
        console.log(loginUserType)


        // console.log("=====delete practice=======")
        // const dataFromLocal = JSON.parse(localStorage.getItem('registerFormData'))
        // console.log(dataFromLocal)
        // const deleteID= 222;
        // const afterDelete = dataFromLocal.filter(deleteObj => deleteObj.rID.indexOf(deleteID));
        // console.log(afterDelete);
        // const itemAfterDelete = JSON.stringify(afterDelete);
        // localStorage.setItem("registerFormData",itemAfterDelete)

        console.log("=====this.props+++++======")
        console.log(this.props)

        return(
            <div>
                <div>
                    <Header home='home' name={loginUserName}/>
                    {console.log("=======In home render+========")}
                </div>
                    <div>
                        <h1 className="text-center">Home Page</h1>
                        {/*<h1>Hello {loginUserName}</h1>*/}

                    </div>
                <div>
                    {console.log("=====all registered user print")}
                    {/*<ul>*/}
                        {/*{JSONregisteredUsers.map(p => <li key={p.userID}>{p.fname} <button onClick={() => this.handleUserDelete(p.rID)} className="btn" >Delete User</button> </li>)}*/}
                        {/*/!*<button onClick={this.handleClick} >Delete</button>*!/*/}
                    {/*</ul>*/}
                </div>
                <div>
                    {/*{this.props.tasks.todos.map((task,index)=><Task key={index} task={task} {...this.props} /> )}*/}

                    {/*<button onClick={this.onLogout} className="btn-danger">Logout</button>*/}

                </div>
                <br/><br/><br/>


                <div>
                    {/*{loginUserType}*/}


                    { (loginUserType==='User') && <User/>}

                    { (loginUserType==='Admin') && <Admin {...this.props} />}





                    {/*<TableOfUsers/>*/}
                </div>


            </div>
        );
    }
}

// function  mapDispatchToProps(dispatch){  //redux part to fetch data from redux
//     return bindActionCreators({logoutUser},dispatch)
// }
// function mapStateToProps(state) {
//     console.log("=======In home mapStateToProps+========")
//         console.log(state)
//         console.log(state.users)
//
//      return{
//         users: state.users
//
//      }
//
// }

export default  Home;
// export default connect(mapStateToProps)(Home);   //redux part to fetch data

// return {
//     userI: state.user,
// }