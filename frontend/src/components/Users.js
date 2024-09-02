import React, { useState } from 'react';
import AddUser from './AddUser';
import UserList from './UserList';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';
import Navbar from './Navbar';

const Users = () => {
    const [showAddUser, setShowAddUser] = useState(false);
    const [showUserList, setShowUserList] = useState(false);
    const [showUpdateUser, setShowUpdateUser] = useState(false);
    const [showDeleteUser, setShowDeleteUser] = useState(false);

    const handleUserCreated = (newUser) => {
        console.log('User created:', newUser);
    };

    return (
        <div style={styles.container}>
             <Navbar/>
             <br/>
            <h3>Users Management</h3>
            <br/>
            <button
                onClick={() => {
                    setShowAddUser(!showAddUser);
                    setShowUserList(false);
                    setShowUpdateUser(false);
                    setShowDeleteUser(false);
                }}
                className="btn btn-dark"
            >
                Add User
            </button>

            <button
                onClick={() => {
                    setShowUserList(!showUserList);
                    setShowAddUser(false);
                    setShowUpdateUser(false);
                    setShowDeleteUser(false);
                }}
                className="btn btn-dark"
            >
                List Users
            </button>

            <button
                onClick={() => {
                    setShowUpdateUser(!showUpdateUser);
                    setShowAddUser(false);
                    setShowUserList(false);
                    setShowDeleteUser(false);
                }}
                className="btn btn-dark"
            >
                Update User
            </button>

            <button
                onClick={() => {
                    setShowDeleteUser(!showDeleteUser);
                    setShowAddUser(false);
                    setShowUserList(false);
                    setShowUpdateUser(false);
                }}
                className="btn btn-dark"
            >
                Delete User
            </button>

            {showAddUser && <AddUser onUserCreated={handleUserCreated} />}
            {showUserList && <UserList />}
            {showUpdateUser && <UpdateUser />}
            {showDeleteUser && <DeleteUser />}
        </div>
    );
};

export default Users;

const styles = {
    container: {
       
    },
};
