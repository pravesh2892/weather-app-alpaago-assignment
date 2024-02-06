import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, database } from '../../Firebase';
import { ref, onValue } from 'firebase/database';
import Navbar from '../Navbar/Navbar';
import './ActiveUser.css'

function Activeuser() {
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      // Listen for authentication state changes
      const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });
  
      // Fetch and listen for changes in user data
      const usersRef = ref(database, 'users');
      const unsubscribeUsers = onValue(usersRef, (snapshot) => {
        const usersData = snapshot.val();
        if (usersData) {
          const userList = Object.keys(usersData).map((userId) => ({
            id: userId,
            ...usersData[userId],
          }));
          setUsers(userList);
        }
      });
  
      return () => {
        unsubscribeAuth();
        unsubscribeUsers();
      };
    }, []);
  
    const getStatus = (user) => {
      // Check if the user is currently logged in (online)
      return user.id === currentUser?.uid ? 'Online' : 'Offline';
    };
  
    return (
      <div>
      <Navbar />
      <div className='user-container'>
      <div className='user-table'>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>{getStatus(user)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
      </div>
    );
  }
  
  export default Activeuser;