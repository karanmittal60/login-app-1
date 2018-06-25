import React from 'react';

import {Link} from 'react-router-dom';

class Header extends React.Component{

    render(){
        console.log('====== in header =====')

        return(
                <div>
                    <div>
                        <h1>.</h1>
                    </div>
                    <div>
                    <head>
                        <nav>
                            <ul>
                                <li><Link to='/' > Login</Link> </li>
                                <li><Link to='/register' > Register</Link> </li>

                            </ul>
                        </nav>
                    </head>
                    </div>
                </div>
        );
    }
}

export default Header;