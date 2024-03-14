import React from "react";


function Rm() {

    const OnSubmitHandler = window.alert("Sumbitted")
    return (
        <form className="container" action="post">
            <div  className="header">
           
                <h1>RM From</h1>
            </div>


            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Enter Your Name" name="name" />
            </div>
             
           
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Enter your Email" name="email" />
            </div>

            <div>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" placeholder="Enter your Address" name="address" />
            </div>
            <div>
                <label htmlFor="phone_number">Phone Number:</label>
                <input type="phone_number" id="address" placeholder="Enter your Phone Number" name="phone_number" />
            </div>

            <div>
                <label htmlFor="pan_number">PAN Number:</label>
                <input type="pan_number" id="pan_number" placeholder="Enter your PAN Number" name="pan_number" />
            </div>
            <div>
                <label htmlFor="agent_code">Agent Code:</label>
                <input type="agent_code" id="agent_code" placeholder="Enter Agent Code" name="agent_code" />
            </div>



        </form>
    );
}


export default Rm;