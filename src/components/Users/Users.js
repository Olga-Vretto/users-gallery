import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data);
    });
    setIsLoaded(false);
  }, []);

  return (
    <div className='main'>
      <h1 className='main-title'>Users Gallery</h1>

      {isLoaded ? (
        <div className='loader'></div>
      ) : (
        users.map((user) => (
          <div className='main-info' key={user.id}>
            <div>
              <h3 className='user-name'>{user.name}</h3>
              <p>Website: {user.website}</p>
              <p>Phone number: {user.phone}</p>
              <p>City: {user.address.city}</p>
            </div>
            <Link to={`/users/${user.id}/albums`} className='link'>
              Albums
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Users;
