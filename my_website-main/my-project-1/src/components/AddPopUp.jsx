import React, { useState } from 'react';
import '../assets/css/LoginPopup.css';
import { UseFireStore } from './hooks/UseFireStore';

const AddPopUp = ({ onClose, toAddLink }) => {
  const [image, setImage] = useState(""); // State to hold the image file
  const [name, setName] = useState("");
  const { AddDocument, error } = UseFireStore(toAddLink);

  const handleAdd = async (event) => {
    event.preventDefault();
    // Ensure image is selected before attempting to add document
    if (!image) {
      console.error("Please select an image.");
      return;
    }

    // Log image and name values
    console.log("Image (Base64):", image);
    console.log("Name:", name);

    try {
      await AddDocument({ image:image, name:name });
      console.log("Document added successfully");
      onClose();
    } catch (err) {
      console.error("Error adding document:", err);
    }
  };

  // Function to handle file input change
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set image as Base64 string
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleAdd}>
          <label>
            Image:
            <input type="file" accept="image/*" onChange={handleImageChange} required />
          </label>
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddPopUp;
