import React from 'react';
// import {reactLocalStorage} from 'reactjs-localstorage';

import {connect} from 'react-redux';

import { Link } from 'react-router-dom';
import TableOfUsers from "./TableOfUsers";

// import AllUsers from './AllUsers';


console.log("=======In home outside+========");


// const registeredUsers = localStorage.getItem('registerFormData')
// console.log("===registeredUsers======")
//
// console.log(registeredUsers)




class Home extends React.Component{
    constructor(props){
        super(props);
        this.onLogout=this.onLogout.bind(this);
        this.handleUserDelete= this.handleUserDelete.bind(this);
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




        const loginUserID= this.props.users.user;
        console.log("====login user id====")
        console.log(loginUserID)



        const registeredUsers =localStorage.getItem('registerFormData');
        const JSONregisteredUsers=JSON.parse(registeredUsers)
        console.log("=====all registeredUsers======")
        console.log(JSONregisteredUsers)

        console.log("====login user object ======")
        const loginUserArray = JSONregisteredUsers.filter(personObj => !personObj.fname.indexOf(loginUserID));
        console.log(loginUserArray);

        console.log("====login user name ======")
        const loginUserName = loginUserArray[0].fname;
        console.log(loginUserName)

        // console.log("=====delete practice=======")
        // const dataFromLocal = JSON.parse(localStorage.getItem('registerFormData'))
        // console.log(dataFromLocal)
        // const deleteID= 222;
        // const afterDelete = dataFromLocal.filter(deleteObj => deleteObj.rID.indexOf(deleteID));
        // console.log(afterDelete);
        // const itemAfterDelete = JSON.stringify(afterDelete);
        // localStorage.setItem("registerFormData",itemAfterDelete)


        return(
            <div>
                <div>
                    {console.log("=======In home render+========")}
                </div>
                    <div>
                        <h1>Home Page</h1>
                        <h1>Hello {loginUserName}</h1>

                    </div>
                <div>
                    {console.log("=====all registered user print")}
                    <ul>
                        {JSONregisteredUsers.map(p => <li key={p.userID}>{p.fname} <button onClick={() => this.handleUserDelete(p.rID)} >Delete User</button> </li>)}
                        {/*<button onClick={this.handleClick} >Delete</button>*/}
                    </ul>
                </div>
                <div>
                    {/*{this.props.tasks.todos.map((task,index)=><Task key={index} task={task} {...this.props} /> )}*/}

                    <button onClick={this.onLogout} >Logout</button>
                    <Link to='/'  >Logout</Link>
                </div>
                <div>
                    <TableOfUsers/>
                </div>


            </div>
        );
    }
}

// function  mapDispatchToProps(dispatch){
//
//
// }

function mapStateToProps(state) {
    console.log("=======In home mapStateToProps+========")
        console.log(state)
        console.log(state.users)

     return{
        users: state.users

     }




}

export default connect(mapStateToProps)( Home);

// return {
//     userI: state.user,
// }