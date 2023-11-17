import React, { useState } from "react";
import "./Villager.css";

const Villager = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    Pimg: "",
    Ptitle: "",
    Pcontact: "",
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    // console.log("Form submitted:", formData);
    const formDataString =
      JSON.parse(localStorage.getItem("formSubmissions")) || [];
    const updatedSubmissions = [...formDataString, formData];
    localStorage.setItem("formSubmissions", JSON.stringify(updatedSubmissions));

    setFormData({
      Pimg: "",
      Ptitle: "",
      Pcontact: "",
    });
    setShowForm(false);
  };

  return (
    <>
      <div id="addProductMain">
        <div id="addProduct">
          <button onClick={() => setShowForm(!showForm)}>Add Product</button>

          {showForm && (
            <div id="form-main">
              <form>
                <div id="form">
                  <label>
                    Product Image:
                    <input
                      type="text"
                      name="Pimg"
                      value={formData.Pimg}
                      placeholder="Product Image Optional"
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div id="form">
                  <label>
                    Product Titile:
                    <input
                      type="text"
                      name="Ptitle"
                      value={formData.Ptitle}
                      placeholder="Product Title"
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div id="form">
                  <label>
                    Product Contact:
                    <input
                      type="text"
                      name="Pcontact"
                      value={formData.Pcontact}
                      placeholder="Product Contact"
                      onChange={handleInputChange}
                    />
                  </label>  
                </div>
                <div id="form">
                <button type="button" onClick={handleFormSubmit}>
                  Submit
                </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Villager;
