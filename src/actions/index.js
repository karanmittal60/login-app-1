const ADD_USER = 'ADD_USER'
const DELETE_USER= 'DELETE_USER'
export const addUser = (userData) => {
    return{
        type:ADD_USER,
        payload: userData
    //
    }

}
export const deleteUser = (userID) => {
    return{
        type:DELETE_USER,
        payload:userID
    }
}

export default {addUser, deleteUser } ;