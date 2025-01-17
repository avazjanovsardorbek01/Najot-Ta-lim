import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [users, setUsers] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(age);
    console.log(phone);
    console.log(address);
    users.push({ name, age, phone, address });
    setUsers([...users]);
  };
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td>T/R</td>
                  <td>Name</td>
                  <td>Age</td>
                  <td>Phone number</td>
                  <td>Address</td>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center ">Add user</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} id="todo">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                    className="form-control my-2"
                  />
                  <input
                    onChange={(e) => setAge(e.target.value)}
                    type="number"
                    placeholder="Age"
                    className="form-control my-2"
                  />
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    placeholder="Phone"
                    className="form-control my-2"
                  />
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    placeholder="Address"
                    className="form-control my-2"
                  />
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" form="todo" className="btn btn-primary">
                  Add user
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
