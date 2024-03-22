
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../styles/form.scss";

//this form is created for submitting policies data(new sold policies ) to database 
   const TestDropDown = () => {
   const [selectedInsurance, setSelectedInsurance] = useState('');
  const [selectedPolicyPlanType, setSelectedPolicyPlanType] = useState('');
  const [policyPlanTypes, setPolicyPlanTypes] = useState([]);
     
    const insuranceTypesMap = {
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

    //   Event Handler for when insurance type is selected
    const handleInsuranceChange = (e) => {
         const selectedInsurance = e.target.value;
         setSelectedInsurance(selectedInsurance);
      // Update the plan type dropdown based on the selected insurance
         setPolicyPlanTypes(insuranceTypesMap[selectedInsurance] || []);
         //reset selected policyplan types
         setSelectedInsurance('');
  }
    
    const handlePolicyPlanTypeChange = (e) => {
              setSelectedPolicyPlanType(e.target.value)
    }

  const [insuranceFormData, setInsuranceFormData] = useState({
   
    insurance_type: "", 
    vehicle_number: "",
    fuel_type: "",
    policy_start: "",
    policy_end: "",
    // Add more fields as needed for other insurance types
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("", insuranceFormData);
      alert("Policy data submitted successfully");
      setInsuranceFormData({
    insurance_type: "", 
    vehicle_number: "",
    fuel_type: "",
    policy_start: "",
    policy_end: "",
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
              <label htmlFor="insurance_type">Insurance Type:</label>
              <select
                id="insurance_type"
                // name="insurance_type"
                value={selectedInsurance}
                onChange={handlePolicyPlanTypeChange}
              >
                <option value="">Select Insurance Type</option>
                {Object.keys(insuranceTypesMap).map((insurance) => (
          <option key={insurance} value={insurance} >
            {insurance} 
          </option>
        ))}
              </select>
            </div>
            <div>
            <label htmlFor="">Plan Type:</label>
      <select id="plan" value={selectedPolicyPlanType} onChange={handleInsuranceChange} >
        <option value="">Select a city</option>
        {policyPlanTypes.map((plans) => (
          <option key={plans} value={plans}>
            {plans}
          </option>
        ))}
      </select>
            </div>
            {renderVehicleFields()}
            {/* Add more conditional rendering for other insurance types */}
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TestDropDown;
