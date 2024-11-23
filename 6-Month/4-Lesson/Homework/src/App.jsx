import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const handleCahnge = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    users.push(form);
    setUsers([...users]);
    event.target.reset();
  };
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <form id="submit" onSubmit={handleSubmit}>
                <input
                  required
                  onChange={handleCahnge}
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control my-2"
                />
                <input
                  required
                  onChange={handleCahnge}
                  type="text"
                  name="age"
                  placeholder="Age"
                  className="form-control my-2"
                />
                <input
                  required
                  onChange={handleCahnge}
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="form-control my-2"
                />
                <input
                  required
                  onChange={handleCahnge}
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="form-control my-2"
                />
              </form>
            </div>
            <div className="card-footer">
              <button type="submit" form="submit">
                Add user
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <td>T/R</td>
                <td>Name</td>
                <td>Age</td>
                <td>Phone</td>
                <td>Address</td>
              </tr>
            </thead>
            <tbody>
              {users?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
