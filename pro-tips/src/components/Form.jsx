import React, { useState }  from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [formError, setFormError] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    let { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    
    let errors = validate(formData);
    setFormError(errors);

    let errorKeyArray = Object.keys(errors);

    if (errorKeyArray.length == 0) {
      toast.success('Form Submitted', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      setFormSubmit(true);
    } else {
      setFormSubmit(false);
      toast.error('Please fill the form with the required info.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };

  const validate = (data) => {
    let error = {};
    if (data.firstName.trim() == "") {
      error.firstName = "Please enter your First Name";
    }
    if (data.lastName.trim() == "") {
      error.lastName = "Please enter your Last Name";
    }
    if (data.email.trim() == "") {
      error.email = "Please enter your Email Address";
    }
    if (data.phone.trim() == "") {
      error.phone = "Please enter your Phone Number";
    }
    if (data.phone.trim().length != 10) {
      error.phone = "Please enter 10-digit Phone Number";
    }

    return error;
  };

  return (
    <div className="form-container">
    <ToastContainer />
      <fieldset>
        <legend>Fill this Form</legend>
        <form onSubmit={formSubmitHandler} autoComplete="off">
          {formSubmit && (
            <div>
              <p className="success">Registration Successful !</p>
            </div>
          )}

          <label> First Name:</label>
          <input type="text" name="firstName" onChange={handleInputChange} />
          {formError.firstName && <p className="err">{formError.firstName}</p>}

          <label> Last Name:</label>
          <input type="text" name="lastName" onChange={handleInputChange} />
          {formError.lastName && <p className="err">{formError.lastName}</p>}

          <label> Email Address:</label>
          <input type="email" name="email" onChange={handleInputChange}/>
          {formError.email && <p className="err">{formError.email}</p>}

          <label> Phone Number:</label>
          <input type="text" name="phone" onChange={handleInputChange} />
          {formError.phone && <p className="err">{formError.phone}</p>}

          <input type="submit" value="Register" onClick={formSubmitHandler} />
        </form>
      </fieldset>
    </div>
  );
};

export default Form;
