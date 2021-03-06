import React from 'react';

import {AddButton, LogoutButton} from './SVGs';
import './Home.css';

const fetch = require('node-fetch');

const RButtons = (props) =>
{
	const doAdd = async() =>
    {
        // switch to add contact screen
        //window.location.replace("/register");
		props.toggleAddContact();
    };

    const doLogout = async() =>
    {
        // actually logout!
		await fetch('api/logout', {
		  method: 'POST',
		  headers: {'Content-Type': 'application/json'},
		  credentials: 'same-origin',
		  body: '{}'
		}).then(response => {return response.json()});

        window.location.replace("/login");
    };

    // return render(<Buttons />, document.getElementById("root"));
    return (
        <div>
            <LogoutButton onClick={() => doLogout()}/>
            <AddButton onClick={() => doAdd()}/>
        </div>
    );
};

export default RButtons;
