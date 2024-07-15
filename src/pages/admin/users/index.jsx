import React, { useEffect, useState } from 'react'
import { usersApi } from '../../../services/base';
import { IoIosRemoveCircle } from 'react-icons/io';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await usersApi.getAllUsers();
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchUsers()
  })
  return (
    <main className='main-container' style={{ width: "100%" }}>
      <div className='main-title'>
        <h3>Users</h3>
      </div>
      <div className='main-cards' style={{ width: "100%", display: 'flex' }}>
        <div className="cart-list col-lg-8 col-xl-8 col-md-10 col-sm-10" style={{ width: "100%" }}>
          {users.map(item => (
            <div className='d-flex justify-content-between' style={{ width: "100%", paddingInlineStart: "10px" }} key={item.id}>
              <div className="cart-pr-list col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <h4>User</h4>
                <div className="cart-product">
                  <img src={item.avatar} alt={item.fullName} />
                  <h4>{item.fullName}</h4>
                </div>
              </div>
              <div className="cart-pr-list col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <h4 style={{ textAlign: "center" }}>Email</h4>
                <h4>{item.email}</h4>
              </div>
              <div className="cart-pr-list  adminremove col-xl-2 col-lg-2 col-md-2 col-sm-2">
                <h4 style={{ textAlign: "center" }}>Remove</h4>
                <button id='adminremoveicon' onClick={() => { usersApi.deleteUser(item.id) }}><IoIosRemoveCircle /></button>
              </div>


            </div>
          ))}

        </div>
        </div>
        </main>
  )
}

export default Users