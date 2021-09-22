import React from "react";
import { Styles } from "./TableStyles";
import { tableData } from "../../data";
const genders = ["male", "female"];
const actions = ["take", "make"];

export default class Table extends React.Component {
  state = {
    message: "",
    items: [],
    names: [],
    gender: genders[0],
    action: actions[0],
  };

  updateMessage = (event) => {
    this.setState({
      message: event.target.value,
    });
  };
  handleClick = () => {
    let items = this.state.items;
    items.push(this.state.message);
    this.setState({
      items: items,
      message: "",
    });
  };

  handleClose = () => {
    this.handleClick();
    console.log(`this.message`, this.state.message);
    window.close();
  };

  handleItemChanged = (event) => {
    let items = this.state.items;
    items = event.currentTarget.value;

    this.setState({
      items: items,
    });
  };

  renderRows = () => {
    // console.log(`this`, this);
    return tableData.map((i, key) => {
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
  render() {
    return (
      <Styles>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Actions</th>
              <th>Name</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
          <tfoot>
            <tr>
              <td>
                <input className="input" type="text" onChange={this.updateMessage} />
              </td>
              <td>
                <select name="action" value={this.action} onChange={this.handleItemChanged}>
                  {actions.map((action) => (
                    <option value={action} key={action}>
                      {action}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input className="input" type="text" onChange={this.updateMessage} />
              </td>
              <td>
                <select name="gender" value={this.gender} onChange={this.handleItemChanged}>
                  {genders.map((gender) => (
                    <option value={gender} key={gender}>
                      {gender}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </tfoot>
        </table>
        <button type="button" onClick={this.handleClose}>
          Close
        </button>
      </Styles>
    );
  }
}
