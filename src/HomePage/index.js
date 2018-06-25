import React from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';

import {connect} from 'react-redux';

import { Link } from 'react-router-dom';

import AllUsers from './AllUsers';


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




        return(
            <div>
                <div>
                    {console.log("=======In home render+========")}
                    {/*{console.log(this.props.users)}*/}

                    {/*{console.log(fval.fname)}*/}

                </div>
                <h1>Home Page</h1>
                <h1>hello {fname}</h1>
                {/*<h1>Hello {fval.fname}</h1>*/}
                <h1>you are logged in with react routes </h1>
                <h1>hello</h1>

                {/*{this.state}*/}
                {console.log(this.props.users)}
                {/*{this.props.tasks.todos.map((task,index)=><Task key={index} task={task} {...this.props} /> )}*/}
                <AllUsers/>


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