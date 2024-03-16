import React, { useState , useEffect} from 'react'
import AdminSidebar from '../components/AdminSidebar'
import Ajay from '../components/Ajay';
import { Link } from 'react-router-dom';

const Customers = () => {
  const  [data, setData] = useState(null);

//  useEffect(() => {
//    fetchData();

//  }, [])

//  const fetchData = async()  => {
//      const response = await fetch("http://localhost:3000/users")
//     //  console.log(response.json())
//     if(!response.ok){
//       throw new Error("Network response was not ok")
//     }
//     const insuranceUserData = response.json()
//      console.log(insuranceUserData)
//  }

// for opening on new window 
const openLinkInNewWindow = (url) => {
  window.open(url, '_blank', 'width=800,height=800');
};
  return (
    <div className='adminContainer'>
       {/* sidebar */}
     <AdminSidebar />

{/* main */}
<main> 

 <br />
   <button onClick={() => openLinkInNewWindow('/admin/customer/register-agent')}>
    Create new agent
    </button>


    <button onClick={() => openLinkInNewWindow('/admin/customer/register-insurance')}>
      Register Insurance Data
    </button>

    <button onClick={() => openLinkInNewWindow('/admin/customer/signup')}>
      create user
    </button>

    <Link to="/admin/customer/insurance-form">
    Insurance Form
    </Link>

    <a href="/admin/customer/register-insurance">Regist</a>
 <br /> <br />
{/* <a href="" target='_blank'>
  <button>Create RM</button>
</a> */}
</main>
  
 
    </div>
  )
}

export default Customers