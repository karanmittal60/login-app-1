const initialState={
    // users:[],                ////redux part for register
    users:'',
}

const reducer = (state=initialState ,action) => {
    switch (action.type){

        case 'ADD_USER':
            return{
                ...state,
                users:
                {
                   user: action.payload
                }


            }

        // case 'ADD_USER':                 //redux part for register
        //     return{
        //         ...state,
        //         users:[
        //             ...state.users,{
        //                 userID: action.payload.rID,
        //                 userfname: action.payload.fname,
        //                 userlname: action.payload.lname,
        //                 userdob: action.payload.dob,
        //                 userrPasswd: action.payload.rpasswd,
        //                 userType: action.payload.registerType
        //             }
        //
        //         ]
        //
        //     }
        case 'DELETE_USER':
            return{


            }
        default:
            return state;
    }

}

export default reducer;
// return{
//     ...state,
//     users:[
//         ...state.users,{
//             user: action.payload
//
//         }
//     ]
// }