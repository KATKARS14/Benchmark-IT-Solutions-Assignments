
import './App.css';

import React from "react";
import { useState } from "react";


const User = () => {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    age: 0,
    gender: '',
    skills: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={data.gender === 'Male'}
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={data.gender === 'Female'}
          onChange={handleChange}
        />
        Female
      </div>

      <div>
        <label>Skills:</label>
        <select
          name="skills"
          value={data.skills}
          onChange={handleChange}
        >
          <option value="">Select Skills</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
          <option value="NodeJS">NodeJS</option>
        </select>
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={data.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Address:</label>
        <textarea
          name="address"
          value={data.address}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default User;
