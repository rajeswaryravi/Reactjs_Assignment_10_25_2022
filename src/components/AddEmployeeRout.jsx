import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import './css/LoginComponent.css';
const AddEmployeeRout = () => {
    const [firstname,setFirstname] = useState('')
    const [designation,setDesignation] = useState('')
    const [salary,setSalary] = useState('')
    const [department,setDepartment] = useState('')
    const [success,setSuccess] = useState('')
    const [error,setError]= useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        if(firstname===""||designation===""||salary===""||department==="") {
            setError("Missing mandetory details")
            setSuccess("")
        }
        else {
            setSuccess("Employee added successfully")
            setError("")
        }
    }
   
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="fname"
              value={firstname}
              onChange={(event)=>setFirstname(event.target.value)}
              className="form-control"
              placeholder="Enter Name"            />
          </div>
          <div className="form-group">
            <label htmlFor="designation"></label>
            <input
              type="text"
              id="designation"
              value={designation}
              onChange={(event)=>setDesignation(event.target.value)}
              className="form-control"
              placeholder="Enter Designation"
            />
          </div>
          <div className="form-group">
            <label htmlFor="salary"></label>
            <input
               type="text"
              id="salary"
              value={salary}
              onChange={(event)=>setSalary(event.target.value)}
              className="form-control"
              placeholder="Enter Salary"
            />
          </div>
          <div className="form-group">
            <label htmlFor="department"></label>
            <input
              type="text"
              id="department"
              value={department}
              onChange={(event)=>setDepartment(event.target.value)}
              className="form-control"
              placeholder="Enter Department"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Employee
          </button>
          {success?<div className="text-success">{success}</div>:null}
          {error?<div className="text-danger">{error}</div>:null}
        </form>
      </div>
    </>
  );
};
export default AddEmployeeRout;