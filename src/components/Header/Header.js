import React from 'react';

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

import {bindActionCreators} from 'redux'

import deleteUser from './../../actions/index'

// import './Header.css'

class Header extends React.Component{

    render(){
        console.log('====== in header =====')
        console.log(this.props)
        console.log('====== in header =====')
        // const loginUserID= this.props.users.user;   //id from state
        // console.log("====login user id====")
        // console.log(loginUserID)
        // const registeredUsers =localStorage.getItem('registerFormData');   //all register users
        // const JSONregisteredUsers=JSON.parse(registeredUsers)
        // console.log("=====all registeredUsers======")
        // console.log(JSONregisteredUsers)
        //
        // console.log("====login user object ======")//on the bases of id userLogin Data
        // const loginUserArray = JSONregisteredUsers.filter(personObj => !personObj.fname.indexOf(loginUserID));
        // console.log(loginUserArray);
        // console.log("====login user name ======")//user name
        // const loginUserName = loginUserArray[0].fname;
        // console.log(loginUserName)

        return(
                <div>
                    <div >


                    </div>
                    <div className="App-header">
                    <header>
                        <nav>

                                <h1>Welcome to Jellyfish Technologies</h1>
                                <ul>
                                {(this.props.login || this.props.register) && <Link to='/' > Login</Link>}
                                    {'   '}
                                {(this.props.login || this.props.register) && <Link to='/register' > Register</Link>}

                                {this.props.home && <div><Link to='/' > Logout</Link>
                                <h1>{this.props.name}</h1></div>}

                            </ul>
                        </nav>
                    </header>
                    </div>
                </div>
        );
    }
}

function  mapDispatchToProps(dispatch){
    return bindActionCreators({deleteUser},dispatch)
}
function mapStateToProps(state) {
    console.log("=======In header mapStateToProps+========")
    console.log(state)
    console.log(state.users)
    return{
        users: state.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Header);