import React from 'react';

// import {BootstrapTable , TableHeaderColumn} from 'react-bootstrap-table';
//
// const ReactBsTable = require('react-bootstrap-table');
//
// const BootstrapTable = ReactBsTable.BootstrapTable;
//
// const TableHraderColumn = ReactBsTable.TableHeaderColumn;

import {BootstrapTable , TableHeaderColumn} from 'react-bootstrap-table'

import './TableOfUsers.css'
// import EditRegisteredUser from "../Admin/EditRegisteredUser";


console.log("=====table of user======")
const allRegisteredUser= JSON.parse(localStorage.getItem('registerFormData'));

console.log(allRegisteredUser)

// const columns = [
//     {name:'fname',display:'First name'},
//     {name:'lname',display:'Last name'},
//     {name:'dob',display:'Date of birth'},
//     {name:'rID',display:'Register ID'},
//     {name:'rpasswd',display:'Password'},
//     {name:'registerType',display:'User Type'}
// ]
//
//
// console.log(columns)



class TableOfUsers extends React.Component{
// constructor() {
//     super();
// }


    render(){
        console.log("=fkdjfkfjjf ====")
        console.log(this.props)
        var option ={
            onRowClick: (row) => {
                console.log("=============row Data===========")
                console.log(row)


                this.props.history.push ({
                    pathname: '/editregistereduser',
                    state:row
                })

                // this.props.history.push (`/editregistereduser/`)
                // this.props.history.push (`/editregistereduser/${row}`)

            }

        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <BootstrapTable data={allRegisteredUser}
                                        headers={true}
                                        className="col-md-10"
                                        pagination
                                        options={option}

                        >
                            <TableHeaderColumn dataField='fname' isKey={ true } className="col-md-2" >First name</TableHeaderColumn>
                            <TableHeaderColumn dataField='lname' className="col-md-2" >Last name</TableHeaderColumn>
                            <TableHeaderColumn dataField='dob' className="col-md-3" >Date of birth</TableHeaderColumn>
                            <TableHeaderColumn dataField='rID' className="col-md-1.5" >Register ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='rpasswd' className="col-md-1.5" >Password</TableHeaderColumn>
                            <TableHeaderColumn dataField='registerType' className="col-md-1.5" >First name</TableHeaderColumn>

                        </BootstrapTable>
                    </div>
                </div>
            </div>
        );
    }
}

export default TableOfUsers;