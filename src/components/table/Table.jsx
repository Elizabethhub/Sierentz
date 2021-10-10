import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Styles } from "./TableStyles";
import { tableData } from "../../data";
import { validationSchema } from "../../validation/Validator";

// let yup = require("yup");

export const Table = () => {
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [items, setItems] = useState([]);

  const dataItem = { value, date, user, comment };
  console.log(`dataItem`, dataItem);

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + "." + dd + "." + yyyy;
  console.log(`today`, today);

  const handleChange = (e) => {
    console.log(`e`, e);
    const { name, value } = e.target;
    switch (name) {
      case "value":
        setValue(value);
        break;
      case "user":
        setUser(value);
        break;
      case "date":
        setDate(value);
        break;
      case "comment":
        setComment(value);
        break;
      // no default
    }
  };
  const handleAdd = (dataItem) => {
    // setItems((items) => ({ items: [...items, dataItem] }));
    setItems((prevItems) => [...prevItems, dataItem]);
    console.log("dataItem", dataItem);

    console.log(dataItem);

    // window.close();
  };

  const handleCalculation = () => {
    console.log(`calculation`);
    window.resizeTo(500, 500);
  };

  const RenderRows = ({ items }) => {
    console.log(`items`, items);
    return items.map((i, key) => {
      return (
        <tr key={key}>
          <td>{i.value}</td>
          <td>{i.date}</td>
          <td>{i.user}</td>
          <td>{i.comment}</td>
        </tr>
      );
    });
  };
  useEffect(() => {
    setItems(tableData);
  }, []);
  // const formik = useFormik({ validationSchema });
  return (
    <Styles
    // validationSchema={validationSchema}
    >
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Value</th>
              <th>Date</th>
              <th>User</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            <RenderRows items={items} />
          </tbody>

          <tfoot>
            <tr>
              <td>
                <input name="value" value={value} className="input" type="text" onChange={handleChange} />
              </td>
              <td>
                {user.login}

                {today}
              </td>

              <td>request user</td>
              <td>
                <input
                  className="input"
                  name="comment"
                  value={comment}
                  type="text"
                  onChange={handleChange}
                  placeholder="*required"
                  title="comment is required"
                  required
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="button-wrapper">
        <button type="button" onClick={handleCalculation}>
          View
        </button>
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>
    </Styles>
  );
};

export default Table;
