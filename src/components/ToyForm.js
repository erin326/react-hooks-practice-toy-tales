import React, { useState } from "react";

function ToyForm({ addToy }) {

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    likes: 0
  
  });

  const handleSubmit = (event) => {
   
    event.preventDefault();
    
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(data => addToy(data))
  }

  
  return (
    <div className="container">
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}
          value={formData.name}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={e => setFormData({...formData, [e.target.name]: e.target.value})} 
          value={formData.image}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          onClick={handleSubmit}
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
