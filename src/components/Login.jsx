import React, { useState } from 'react';
import { TextField, MenuItem} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { validateField } from "../components/Validation"; 
import logo from "../assets/logo.png";
import "../App.css";

const branches = ['CBE3', 'HSR', 'KGR'];

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    currentBranch: '',
    ecno: '',
    pin: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
  const { name, value } = e.target;
    if (name === "ecno" && (!/^\d*$/.test(value) || value.length > 4)) return;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    const error = validateField(name, value, { ...formData, [name]: value });
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
  };
  
  const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = {};
      Object.keys(formData).forEach((field) => {
        const error = validateField(field, formData[field], formData);
        if (error) newErrors[field] = error;
      });
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        console.log("Submitted:", formData);
        navigate("/home");
      }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center">
    <div className="row justify-content-center w-100" style={{ maxWidth: "600px" }}>
      <div className="col-md-8 col-sm-6">
        <img src={logo} alt="Vikkys Logo" className="img-fluid mb-5 text-center" style={{ width: "100px" }} />
      
        <div className="card shadow rounded-5 p-3 mt-4 mb-5">
          <div className="card-body">
            <h5>Login</h5>
            <form onSubmit={handleSubmit}>
            
            <div className="col-12">
              <TextField select label="Branch" name="branch" value={formData.branch} onChange={handleChange} fullWidth variant="standard" color="warning" error={!!errors.branch} helperText={errors.branch} className="mb-1 mt-1">
                {branches.map((branch) => <MenuItem key={branch} value={branch}>{branch}</MenuItem>)}
              </TextField>
              <TextField label="Ecno" type="text" name="ecno" value={formData.ecno} onChange={handleChange} fullWidth variant="standard" color="warning" error={!!errors.ecno} helperText={errors.ecno} className="mb-1" />
              <TextField label="Pin" type="password" name="pin" value={formData.pin} onChange={handleChange} fullWidth variant="standard" color="warning" error={!!errors.pin} helperText={errors.pin}  className="mb-1" />
            </div>
  
            <div className="col-12 mt-3 d-flex justify-content-center">
              <button type="submit" className="btn btn-outline-success w-50 py-2">  Login </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
  }
  export default Login;