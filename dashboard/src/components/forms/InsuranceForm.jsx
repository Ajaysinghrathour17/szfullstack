import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../styles/form.scss";

//this form is created for submitting policies data(new sold policies ) to database 
const InsuranceForm = () => {

    const insuranceTypes = {
        "Car Insurance": [
          "Comprehensive",
          "First Party",
          "Third Party",
          "SOAD",
          "Own Damage",
          "Zero Depreciation",
          "EV Car",
          "Old Car",
          "Pay As You Drive",
          "Used Car",
          "Commercial Car"

        ],
        "Bike Insurance": [
          "Scooter",
          "Comprehensive",
          "First Party",
          "Third Party",
          "SOAD",
          "EV Bike",
          "Own Damage",
          "Used Bike",
          "Pay As You Drive"
        ],
        "Travel": [
          "Travel Insurance",
          "International Travel Insurance",
          "USA Travel Insurance",
          "Schengen Travel Insurance",
        ],
        "Life": [
          "Term Insurance",
          "Life Insurance",
          "Critical Illness Insurance",
          "Accidental Death Benefit Rider",
          "Disability Income Rider",
          "Life Insurance Riders In India"
        ],
        "General Insurance": [
          "Miscellaneous",
          "Commercial",
          "School Bus",
          "Taxi"
        ],
    
        "COMMERCIAL": [
          "Commercial",
          "School Bus",
          "Bus",
          "GCV", 
          "GCV E CART",
          "Taxi",
          "PCV E RIKSHAW",
          "TRACTOR",
          "Miscellaneous",
        ],
        "Health": [
            "Health Insurance",
            "Family Health Insurance",
            "Individual Health Insurance",
            "Cashless Health Insurance",
            "Group Health Insurance",
            "Corporate Health Insurance",
            "COVID-19 Health Insurance",
            "Corona Kavach Policy",
          ],
          
        "Other Insurance": [
            "Home Insurance",
            "Family Health Insurance",
            "Individual Health Insurance",
            "Cashless Health Insurance",
            "Group Health Insurance",
            "Corporate Health Insurance",
            "COVID-19 Health Insurance",
            "Corona Kavach Policy",
          ],
      };
      
    
  const [insuranceFormData, setInsuranceFormData] = useState({
    policy_booking_date: "",
    customer_name: "",
    email: "",
    customer_group: "",
    insurer: "",
    // insurance_type: "",
    // vehicle_number: "",
    // fuel_type: "",
    policy_start: "",
    policy_end: "",
    idv: "",
    od_amount: "",
    tp_amount: "",
    gst_amount: "",
    total_premeium: "",
    indirect_broker: "",
    rm_name: "",
    agent_name: "",
    agent_code: "",
    medium: "",
    given_payout: "",
    incoming_payout: "",
    payout_slab: "",
    policy_copy: "",
    payout: "",
    payin: "",
    // Add more fields as needed for other insurance types
  });

  console.log(insuranceFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInsuranceFormData({
      ...insuranceFormData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/new-policy", insuranceFormData);
      alert("Policy data submitted successfully");
      setInsuranceFormData({
        policy_booking_date: "",
        customer_name: "",
        email: "",
        customer_group: "",
        insurer: "",
        // insurance_type: "",
        // vehicle_number: "",
        // fuel_type: "",
        policy_start: "",
        policy_end: "",
        idv: "",
        od_amount: "",
        tp_amount: "",
        gst_amount: "",
        total_premeium: "",
        indirect_broker: "",
        rm_name: "",
        agent_name: "",
        agent_code: "",
        medium: "",
        given_payout: "",
        incoming_payout: "",
        payout_slab: "",
        policy_copy: "",
        payout: "",
        payin: "",
        // Reset other fields here
      });
    } catch (error) {
      alert("Failed to submit form");
    }
  };

  const renderVehicleFields = () => {
    if (insuranceFormData.insurance_type === "Car insurance" || insuranceFormData.insurance_type === "Bike insurance") {
      return (
        <>
          <div>
            <label htmlFor="vehicle_number">Vehicle Number:</label>
            <input
              type="text"
              id="vehicle_number"
              placeholder="Enter Vehicle Number"
              name="vehicle_number"
              value={insuranceFormData.vehicle_number}
              onChange={handleChange}
            />
          </div>
        
          <div>
              <label htmlFor="vehicle_make_and_model">Vehicle Model:</label>
              <input
                type="text"
                id="vehicle_make_and_model"
                placeholder="Enter your Vehicle Model"
                name="vehicle_make_and_model"
                value={insuranceFormData.vehicle_make_and_model}
                onChange={handleChange}
              />
            </div>
            <div>
            <label htmlFor="fuel_type">Fuel Type:</label>
            <select
              id="fuel_type"
              name="fuel_type"
              value={insuranceFormData.fuel_type}
              onChange={handleChange}
            >
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="cng">CNG</option>
              <option value="lpg">LPG</option>
              <option value="other">Other</option>
            </select>
          </div>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="registration_form">
        <div className="header">
          <h1>Insurance Registration Form</h1>
          <Link to="/admin/customer">back</Link>
        </div>

        <form className="container" onSubmit={handleSubmit}>
          <div className="form_ui">
            {/* form starts for insurance registration */}
            <div>
              <label htmlFor="policy_booking_date">Policy Booking Date:</label>
              <input
                type="date"
                placeholder="Enter Policy Booking Date"
                name="policy_booking_date"
                value={insuranceFormData.policy_booking_date}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="customer_name">Customer Name:</label>
              <input
                type="text"
                name="customer_name"
                placeholder="Enter Customer Name"
                value={insuranceFormData.customer_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={insuranceFormData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="customer_group">Customer Group:</label>
              <input
                type="text"
                placeholder="Enter Customer Group"
                name="customer_group"
                value={insuranceFormData.customer_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="insurer">Insurer:</label>
              <input
                type="text"
                placeholder="Insurer.."
                name="insurer"
                value={insuranceFormData.customer_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="insurance_type">Insurance Type:</label>
              <select
                id="insurance_type"
                name="insurance_type"
                value={insuranceFormData.insurance_type}
                onChange={handleChange}
              >
                <option value="">Select Insurance Type</option>
                <option value="Car insurance">Car Insurance</option>
                <option value="Bike insurance">Bike Insurance</option>
                <option value="four_wheeler">Health Insurance</option>
                <option value="pvt_car">Life Insurance</option>
                <option value="commercial_vehicle">General Insurance</option>
                <option value="gcv">Travel Insurance</option>
                <option value="car">Other Insurance</option>
              </select>
            </div>
            {renderVehicleFields()}
            {/* Add more conditional rendering for other insurance types */}
            <div>
              <label htmlFor="policy_start">Policy Start:</label>
              <input
                type="date"
                name="policy_start"
                placeholder="Enter Policy Start Date"
                value={insuranceFormData.policy_start}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="policy_end">Policy End:</label>
              <input
                type="date"
                id="policy_end"
                placeholder="Enter Policy End Date"
                name="policy_end"
                value={insuranceFormData.policy_end}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="idv">IDV:</label>
              <input type="number"  placeholder="IDV Value"
                name="idv" 
                value={insuranceFormData.idv}
                onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="od">OD:</label>
              <input type="number" 
               placeholder="OD Amount" 
               name="od_amount" 
               value={insuranceFormData.od_amount}
               onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="tp">TP:</label>
              <input             
               type="number"
               placeholder="TP Amount" 
               name="tp_amount"
               value={insuranceFormData.tp_amount}
               onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="gst_percentage">GST Amount:</label>
              <input
                type="number"
                placeholder="Enter GST Percentage"
                name="gst_amount"
                value={insuranceFormData.gst_amount}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="total_premeium">Total Premium:</label>
              <input
                type="text"
                id="total_premeium"
                placeholder="Enter Total Premium"
                name="total_premeium"
                value={insuranceFormData.total_premeium}
                onChange={handleChange}
                
              />
            </div>
            <div>
              <label htmlFor="indirect_broker">Indirect Broker:</label>
              <input
                type="text"
                id="indirect_broker"
                placeholder="Enter Indirect Broker"
                name="indirect_broker"
                value={insuranceFormData.total_premeium}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="rm_name">RM Name:</label>
              <input
                type="text"
                id="rm_name"
                placeholder="Enter RM Name"
                name="rm_name"
                value={insuranceFormData.rm_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="agent_name">Agent Name:</label>
              <input
                type="text"
                id="agent_name"
                placeholder="Enter Agent Name"
                name="agent_name"
                value={insuranceFormData.agent_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="agent_code">Agent Code:</label>
              <input
                type="text"
                id="agent_code"
                placeholder="Enter Agent Code"
                name="agent_code"
                value={insuranceFormData.agent_code}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="medium">Medium:</label>
              <select
              name="medium"
              value={insuranceFormData.medium}
              onChange={handleChange}>
                <option value="offline">Offline</option>
                <option value="online">Online</option>
                <option value="other">Others</option>
              </select>
            </div>
            <div>
              <label htmlFor="given_payout">Given Payout %:</label>
              <input
                type="number"
                placeholder="Enter Given Payout"
                name="given_payout"
                value={insuranceFormData.given_payout}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="incoming_payout">Incoming Payout %:</label>
              <input
                type="number"
                placeholder="Enter Incoming Payout"
                name="incoming_payout"
                value={insuranceFormData.incoming_payout}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="payout_slab">Payout Slab:</label>
              <select
                id="payout_slab"
                placeholder="Enter Payout Slab"
                name="payout_slab"
                value={insuranceFormData.payout_slab}
                onChange={handleChange}
              >
                 <option value="T+1">T+1</option>
                <option value="T+15">T+15</option>
                <option value="T+45">T+45</option>
                <option value="T+30">T+30</option>
              </select>
            </div>
        
            <div>
              <label htmlFor="policy_copy">Policy Copy:</label>
              <input
                type="text"
                id="policy_copy"
                placeholder="Enter Policy Copy Link"
                name="policy_copy"
                value={insuranceFormData.policy_copy}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="payout">PayOut:</label>
              <input
                type="number"
                id="payout"
                placeholder="Enter PayOut Amount"
                name="payout"
                value={insuranceFormData.payout}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="payin">PayIn:</label>
              <input
                type="number"
                id="payin"
                placeholder="Enter PayIn Amount"
                name="payin"
                value={insuranceFormData.payin}
                onChange={handleChange}
              />
            </div>


            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default InsuranceForm;
