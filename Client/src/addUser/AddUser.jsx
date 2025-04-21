import React, { useState } from 'react'
import "./AddUser.css"
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

const AddUser = () => {
    const users={
        name:"",
        email:"",
        address:"",
        phone:""
    }

    const [user, setUser] = useState(users);
    const navigate=useNavigate();

    const inputHandeler=(e) => {
      const {name,value}=e.target;
      console.log(name,value);
      
      setUser({...user,[name]:value})
    }

    const submitHandeler= async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8000/api/create",user)
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
        <h3>Add New User</h3>
        <form className='addUserForm' onSubmit={submitHandeler}>
            <div className="inputGroup">
                <label htmlFor="name">
                    Name:
                </label>
                <input
                onChange={inputHandeler}
                type="text" 
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

export default AddUser
