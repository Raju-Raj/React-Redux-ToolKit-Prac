import React from 'react'
import { useDispatch } from 'react-redux'
import { postUserData } from './postUserReducer'

const PostUser = () => {
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(postUserData({userId: 1,title:'raju'}))}>Post User</button>
    </div>
  )
}

export default PostUser
