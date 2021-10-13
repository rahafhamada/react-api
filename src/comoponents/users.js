import { useEffect ,useState } from 'react'
import axios from 'axios'
import React from 'react'

const UsersPage = () => {
    const [users,setUsers]=useState([]);
    const[loading,setLoading]=useState(false);
    useEffect(() =>{
        setLoading(true)
    const fetchUsers= async () => {
        const {data}= await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(data);
        setLoading(false);
    };
   
        fetchUsers();
    },[]);
    
    
    return (
        <div>
            {loading? "loading ...."  :users.map((item) =>{
                return <div  key={item.id}><h1 style={{color:"red"}}>{item.name}</h1>
                <h2> {item.name} works at {item.company.name} </h2></div>

            }) }
           
        </div>
    )
}

export default UsersPage


