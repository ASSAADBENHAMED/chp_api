import React, { useEffect, useState } from 'react';
import axios from 'axios';
const UserList = () => {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(reponse=>{
            console.log(reponse);setPosts(reponse.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [])

    return (
    <div>
    
    {posts.map(post => <li key={post.id}>{post.name} </li>)}    
    
    </div>
  )
}

export default UserList