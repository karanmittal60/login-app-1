import React from 'react';

import {connect} from 'react-redux';

console.log("======in all user+===========")

class AllUsers extends React.Component{


    handleClick(){
        var persons = [
            {id : 1, name : "John", tags : "javascript"},
            {id : 2, name : "Alice", tags : "javascript"},
            {id : 3, name : "Roger", tags : "java1"},
            {id : 4, name : "Adam", tags : "javascript"},
            {id : 5, name : "Alex", tags : "java"}
        ];
        var javscriptPersons = persons.filter(personObj =>personObj.name.indexOf("Roger"));
//es5 style
//         var javscriptPersons = persons.filter(function(personObj){
//             return personObj.tags.indexOf("javascript") > -1
//         });
        console.log(javscriptPersons);

    }

    render(){
        return(
            <div>

                <h1>in all users</h1>
                <button onClick={this.handleClick}>all users</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state)
    return state

}

export default connect(mapStateToProps)( AllUsers);