import React, { useEffect, useState } from 'react'
import "./Update.css"
import { Link , useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';


const Update= () => {
    const users={
        name:"",
        email:"",
        address:"",
        phone:""
    }

    const [user, setUser] = useState(users);
    const navigate=useNavigate();
    const {id}=useParams();
    useEffect(() => {
      axios.get(`http://localhost:8000/api/singleUser/${id}`)
      .then((response) => {
        setUser(response.data);
      }
      ).catch((error) => {
        console.log(error);
      }
      )
    }, [id])
    


    const inputHandeler=(e) => {
      const {name,value}=e.target;
      console.log(name,value);
      
      setUser({...user,[name]:value})
    }

    const submitHandeler= async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8000/api/update/${id}`,user)
      .then((response) => {
        toast.success(response.data.message,{position:'top-right'});
        navigate("/");
      }
      )
      .catch((err) => {
        console.log(err);
        
      }
      )
    }
    
    

  return (
    <div className="addUser">
        <Link to="/" type="button" className="btn btn-secondary">
            Back <i className="fa-solid fa-circle-arrow-left"></i>
        </Link>
        <h3>Update User</h3>
        <form className='addUserForm' onSubmit={submitHandeler}>
            <div className="inputGroup">
                <label htmlFor="name">
                    Name:
                </label>
                <input
                onChange={inputHandeler}
                type="text"
                value={user.name} 
                id='name'
                name='name'
                autoCapitalize='off'
                placeholder='Enter your name'/>
            </div>
            <div className="inputGroup">
                <label htmlFor="email">
                    Email:
                </label>
                <input 
                onChange={inputHandeler}
                type="email" 
                value={user.email} 
                id='email'
                name='email'
                autoCapitalize='off'
                placeholder='Enter your email'/>
            </div>
            <div className="inputGroup">
                <label htmlFor="address">
                    Address:
                </label>
                <input 
                onChange={inputHandeler}
                type="text"
                value={user.address}  
                id='address'
                name='address'
                autoCapitalize='off'
                placeholder='Enter your address'/>
            </div>
            <div className="inputGroup">
                <label htmlFor="phone">
                    Phone:
                </label>
                <input 
                onChange={inputHandeler}
                type="number" 
                value={user.phone} 
                id='phone'
                name='phone'
                autoCapitalize='off'
                placeholder='Enter your phone number'/>
            </div>
            <div className="inputGroup mt-3">
            <button type="submit" className="btn btn-success">Submit</button>
            </div>
            
        </form>
    </div>
  )
}

export default Update
