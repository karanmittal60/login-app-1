import React from 'react';

import {connect} from 'react-redux';

console.log("======in all user+===========")

class AllUsers extends React.Component{

    render(){
        return(
            <div>

                <h1>in all users</h1>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state)
    return state

}

export default connect(mapStateToProps)( AllUsers);