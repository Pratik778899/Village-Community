import React, { useState } from "react";
import "./AddWorker.css";

const AddWorker = () => {
  const [showForm, setShowForm] = useState(false);

  const [workerInfo, setWorkerInfo] = useState({
    Wimg: "",
    Wname: "",
    Wcontact: "",
    Wprice: "",
    Wlocation: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkerInfo({ ...workerInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let workers = JSON.parse(localStorage.getItem("workerSubmissions")) || [];
    workers.push(workerInfo);
    localStorage.setItem("workerSubmissions", JSON.stringify(workers));
    setWorkerInfo({
      Wimg: "",
      Wname: "",
      Wcontact: "",
      Wprice: "",
      Wlocation: "",
    });
    setShowForm(false);
  };

  return (
    <div id="addWorkerMain">
      <div id="addWorker">
        {!showForm ? (
          <button onClick={() => setShowForm(true)}>Add Worker</button>
        ) : (
          <div id="form-main">
            <form onSubmit={handleSubmit}>
              <div id="form">
                <label>
                  Image URL:
                  <input
                    type="text"
                    name="Wimg"
                    value={workerInfo.Wimg}
                    placeholder="Worker Image Optional"
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div id="form">
                <label>
                  Name:
                  <input
                    type="text"
                    name="Wname"
                    value={workerInfo.Wname}
                    placeholder="Worker Name"
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div id="form">
                <label>
                  Contact:
                  <input
                    type="text"
                    name="Wcontact"
                    value={workerInfo.Wcontact}
                    placeholder="Worker Contact"
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div id="form">
                <label>
                  Price:
                  <input
                    type="text"
                    name="Wprice"
                    value={workerInfo.Wprice}
                    placeholder="Worker Price"
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div id="form">
                <label>
                  Location:
                  <input
                    type="text"
                    name="Wlocation"
                    value={workerInfo.Wlocation}
                    placeholder="Worker Location"
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div id="form">
                <button type="submit">Add Worker</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddWorker;
