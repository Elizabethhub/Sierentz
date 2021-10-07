import React, { useEffect, useState } from "react";
import { Styles } from "./TableStyles";
import { tableData } from "../../data";

const genders = ["male", "female"];
const actions = ["take", "make"];

export const TableOld = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState(genders[0]);
  const [action, setAction] = useState(actions[0]);
  const [items, setItems] = useState([]);

  const dataItem = { message, action, name, gender };
  console.log(`dataItem`, dataItem);
  // updateMessage = (event) => {

  // this.setState({ [name]: value });
  //   this.setState({
  //     message: event.target.value,
  //   });
  // };

  // handleClick = () => {
  // const items = {
  //   message: this.state.message,
  //   action: this.state.action,
  //   gender: this.state.gender,
  // };
  // this.props.onSubmit(items);
  // this.setState({ name: "", action: "", item: "", gender: "" });
  //   let items = this.state.items;
  //   items.push(this.state.message);
  //   this.setState({
  //     items: items,
  //     message: "",
  //   });
  // };

  const handleChange = (e) => {
    console.log(`e`, e);
    const { name, value } = e.target;
    switch (name) {
      case "message":
        setMessage(value);
        break;
      case "name":
        setName(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "action":
        setAction(value);
        break;
      // no default
    }
  };
  const handleClose = () => {
    // handleChange();
    // this.handleClick();
    console.log(dataItem);
    // console.log(this.state.items);
    // window.close();
  };

  const RenderRows = ({ items }) => {
    // console.log(`this`, this);
    return items.map((i, key) => {
      return (
        <tr key={key}>
          <td>{i.item}</td>
          <td>{i.action}</td>
          <td>{i.name}</td>
          <td>{i.gender}</td>
        </tr>
      );
    });
  };
  useEffect(() => {
    setItems(tableData);
  }, []);
  return (
    <Styles>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Action</th>
              <th>Name</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            <RenderRows items={items} />
          </tbody>
          {/* <tbody>{this.renderRows()}</tbody> */}
          <tfoot>
            <tr>
              <td>
                <input
                  className="input"
                  name="message"
                  value={message}
                  type="text"
                  // onChange={this.updateMessage} />
                  onChange={handleChange}
                />
              </td>
              <td>
                <select name="action" value={action} onChange={handleChange}>
                  {/* value={this.action} onChange={this.handleItemChanged}> */}
                  {actions.map((action) => (
                    <option value={action} key={action}>
                      {action}
                    </option>
                  ))}
                </select>
              </td>

              <td>
                <select
                  name="gender"
                  // value={this.gender}
                  value={gender}
                  // onChange={this.handleItemChanged}
                  onChange={handleChange}
                >
                  {genders.map((gender) => (
                    <option value={gender} key={gender}>
                      {gender}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  className="input"
                  type="text"
                  onChange={handleChange}
                  name="name"
                  value={name}
                  placeholder="*required"
                  title="comment is required"
                  required
                />
                {/* onChange={this.updateMessage} /> */}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="button-wrapper">
        <button type="button" onClick={handleClose}>
          {/* <button type="button" onClick={this.handleClose}> */}
          Close
        </button>
      </div>
    </Styles>
  );
};
// }
export default TableOld;
