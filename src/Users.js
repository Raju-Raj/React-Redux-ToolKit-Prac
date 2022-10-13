import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userReducer'

const Users = () => {
    const {loading,users,error} = useSelector(state=>state.userValue)
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(fetchUsers())}>Fetch Users</button>
      {
        loading 
        ?
        <h1>Loading....</h1>
        :
        (
          <>
            {
              users && users.map((item,index)=><p key={index}>{item.title}</p>)
            }
          </>
        )

      }
    </div>
  )
}

export default Users
