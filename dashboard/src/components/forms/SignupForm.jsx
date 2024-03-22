import React,{useState} from 'react';
import axios from 'axios';
import "../../styles/form.scss";

// create form for new account by user
const SignupForm = () => {

    const [createnewData, setCreateNewData] = useState({ 
       name: '',
       email: '',
       password: '',
       phone_umber: '',
       address:'',
       city: '',
       state: '',
       pin: '',
       date_of_birth: '',
       pan_number: ''
       

    });

    const handleChange = (e) => {
        setCreateNewData({...createnewData, [e.target.name]: e.target.value });
      
    };
    console.log(createnewData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:3000/create-form', createnewData);
            alert('Form data submitted successfully');
            setRmData({ 
                name: '',
                email: '',
                password: '',
                phone_umber: '',
                address:'',
                city: '',
                state: '',
                pin: '',
                date_of_birth: '',
                pan_number: ''
            });
        }catch(error) {
            alert('Failed to submit form');
        }
    }
    
  return (
    <form onSubmit={handleSubmit} >
        <div  className="header">
           <h1>Create New Account</h1>
        </div>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter Your Name" value={createnewData.name} name="name" onChange={handleChange} />
       </div>
       <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter Your Email" value={createnewData.email} name="email" onChange={handleChange} />
       </div>
       <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter Your Password" value={createnewData.password} name="password" onChange={handleChange} />
       </div>
       <div>
            <label htmlFor="phone">Phone No.:</label>
            <input type="text" id="phone" placeholder="Enter Your Phone Number" value={createnewData.phone_number} name="phone_number" onChange={handleChange} />
       </div>
      
       <div>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" placeholder="Enter Your Address" value={createnewData.address} name="address" onChange={handleChange} />
       </div>
       <div>
            <label htmlFor="city">City:</label>
            <input type="text" id="city" placeholder="Enter Your City" value={createnewData.city} name="city" onChange={handleChange} />
       </div>
       <div>
            <label htmlFor="state">State:</label>
            <input type="text" id="state" placeholder="Enter Your State" value={createnewData.state} name="state" onChange={handleChange} />
       </div>
       <div>
            <label htmlFor="pin">PIN:</label>
            <input type="text" id="pin" placeholder="Enter Your Pin" value={createnewData.pin} name="pin" onChange={handleChange} />
       </div>
      
       <div>
            <label htmlFor="date-of-birth">D.O.B:</label>
            <input type="date" id="date-of-birth" placeholder="Enter Your Date of Birth" value={createnewData.date_of_birth} name="date_of_birth" onChange={handleChange} />
       </div>
       <div>
            <label htmlFor="pan_number">PAN:</label>
            <input type="text" id="pan-number" placeholder="Enter Your PAN" value={createnewData.pan_number} name="pan_number" onChange={handleChange} />
       </div>

       <button type='submit'>Submit</button>
    
    </form>
  )
}

export default SignupForm;