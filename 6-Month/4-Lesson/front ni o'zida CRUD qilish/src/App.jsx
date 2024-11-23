import { useState } from "react";
import { nanoid } from "nanoid";
function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let id = nanoid();
    console.log(id, "id");
    setUsers([...users, form]);
    setForm({}); // Optionally reset the form after submission
  };

  const deleteUser = (index) => {
    let new_users = users.filter((item, i) => i !== index);
    setUsers(new_users);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card-body">
            <form id="submit" onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Name"
                className="form-control mt-2"
                value={form.name || ""}
              />
              <input
                onChange={handleChange}
                type="text"
                name="age"
                placeholder="Age"
                className="form-control mt-2"
                value={form.age || ""}
              />
              <input
                onChange={handleChange}
                type="text"
                name="phone"
                placeholder="Phone"
                className="form-control mt-2"
                value={form.phone || ""}
              />
              <input
                onChange={handleChange}
                type="text"
                name="address"
                placeholder="Address"
                className="form-control mt-2"
                value={form.address || ""}
              />
            </form>
          </div>
          <div className="card-footer">
            <button type="submit" form="submit">
              Add User
            </button>
          </div>
        </div>
        <div className="col-md-8 my-2">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <td>T/R</td>
                <td>Name</td>
                <td>Age</td>
                <td>Phone</td>
                <td>Address</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(index)}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
