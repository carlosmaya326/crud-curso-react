import React, { useState } from "react";

import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";

import { v4 as uuidv4 } from "uuid";

function App() {
  const usersData = [
    { id: uuidv4(), name: 'Taiga', username: 'taiga' },
    { id: uuidv4(), name: 'Ryuji', username: 'ryuji' },
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = (user) => { 
    user.id = uuidv4();
    setUsers([
      ...users,
      user
    ]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }

  // Editar Usuario
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: '',
    username: ''
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    });
  }

  const editUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)));
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm 
                  currentUser={currentUser}
                  editUser={editUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable 
            users={users} 
            deleteUser={deleteUser} 
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
