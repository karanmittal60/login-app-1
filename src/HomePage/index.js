import React from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';

import {connect} from 'react-redux';

import { Link } from 'react-router-dom';

// import AllUsers from './AllUsers';


console.log("=======In home outside+========");

// const hel =this.props.userId;
// console.log(hel);


// const fval =reactLocalStorage.getObject(fvalue);
// const fname=fval.fname;
// console.log(fval);
// console.log(fname);



class Home extends React.Component{
    constructor(props){
        super(props);
        this.onLogout=this.onLogout.bind(this);
    }


    onLogout(event){
        this.props.history.push('/');

    }



    render(){
        console.log("=====outside return")
        const hel =this.props.userId;
        console.log(hel)
        const fval =reactLocalStorage.getObject(hel);
        const fname=fval.fname;
        console.log("===fname====")
        console.log(fname)

        const users11= this.props.users;
        console.log("====user11====")
        console.log(users11)


        // handleClick(event){
        //
        //
        // }

        var registerUsers =localStorage.getItem('registerFormData');
        console.log(registerUsers)




        return(
            <div>
                <div>
                    {console.log("=======In home render+========")}


                    {/*{console.log(fval.fname)}*/}

                </div>
                <div>
                <h1>Home Page</h1>

                </div>
                <div>



                    <ul>

                        {users11.map(p => <li key={p.userID}>{p.userfname}  <button onClick={this.handleClick} >Delete</button>   </li>)}
                        {/*<button onClick={this.handleClick} >Delete</button>*/}

                    </ul>
                </div>



                {/*{this.props.tasks.todos.map((task,index)=><Task key={index} task={task} {...this.props} /> )}*/}




                <button onClick={this.props.onLogout} >Logout</button>
                <Link to='/'  >Logout</Link>


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