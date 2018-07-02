import React from 'react';
import TableOfUsers from "../HomePage/TableOfUsers";

class Admin extends React.Component{
    render(){

        console.log("==admin user page===")
        console.log(this.props)
        return(
            <div  >

                <h1 className="text-center bg-danger">you are Admin of website you have rights to change user</h1>

                <TableOfUsers {...this.props} />

            </div>
        );
    }
}

export default Admin;