import React from 'react';

const AddUser = ( props ) => {
    const addUserHndler = ( event ) => {
        event.preventDefault();
    };
    
    return (
        <form onSubmit={addUserHndler }>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age (years)</label>
            <input id="age" type="number"></input>
            <button type="submit">Add User</button>
      </form>
    );
    
}

export default AddUser;
