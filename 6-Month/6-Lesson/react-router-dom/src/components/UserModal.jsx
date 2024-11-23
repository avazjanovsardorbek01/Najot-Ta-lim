import { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
const UserModal = (props) => {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { cars, setCars, toggle } = props;
    cars.push(form);
    setCars([...cars]);
    toggle();
  };
  return (
    <Modal isOpen={props.open} toggle={props.toggle}>
      <ModalHeader>
        <h1>Add user</h1>
      </ModalHeader>
      <ModalBody>
        <form id="submit" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Name"
            name="name"
            className="form-control my-2"
          />
          <input
            onChange={handleChange}
            type="number"
            placeholder="Price"
            name="price"
            className="form-control my-2"
          />
          <input
            onChange={handleChange}
            type="date"
            placeholder="Year"
            name="year"
            className="form-control my-2"
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Color"
            name="color"
            className="form-control my-2"
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Brand"
            name="brand"
            className="form-control my-2"
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={props.toggle}>
          Cancel
        </button>
        <button className=" btn btn-success" type="submit" form="submit">
          Save
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default UserModal;
