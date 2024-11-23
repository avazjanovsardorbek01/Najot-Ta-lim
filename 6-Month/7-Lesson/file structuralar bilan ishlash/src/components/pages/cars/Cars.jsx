import { useEffect, useState } from "react";
import "./cars.css";
import UserModal from "../../UserModal";
import { NavLink } from "react-router-dom";
import axios from "axios";
const Cars = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    axios.get("https://fakestoreapi.com/users").then((response) => {
      console.log(response.data);
    });
  });
  const [cars, setCars] = useState([]);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <UserModal
        open={modal}
        toggle={closeModal}
        cars={cars}
        setCars={setCars}
      />
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-10 offset-1">
            <div className="row">
              <div className="col-4">
                <button className="btn btn-success" onClick={openModal}>
                  Add user
                </button>
              </div>
              <div className="col-8">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <td>T/R </td>
                <td>Name</td>
                <td>Price</td>
                <td>Year</td>
                <td>Color</td>
                <td>Brand</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {cars.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.year}</td>
                  <td>{item.color}</td>
                  <td>{item.brand}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button className="btn btn-info">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button className="btn btn-danger">
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                      <NavLink
                        to={`/main/single-car/${item.id}`}
                        className="btn btn-primary"
                      >
                        <span>
                          <i class="fa-solid fa-eye"></i>
                        </span>
                      </NavLink>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cars;
