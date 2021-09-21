import React from "react";

let rows = ["Setting One", "Setting Two", "Setting Three", "Setting Four"];

export class Table extends React.Component {
  createTable = () => {
    let table = [];
    for (let i = 0; i < rows.length; i++) {
      let children = [];
      children.push(<td>{rows[i]}</td>);
      table.push(<tr>{children}</tr>);
    }
    return table;
  };

  render() {
    return <table>{this.createTable()}</table>;
  }
}

<div class="modal-body">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
</div>;

// import React from "react";

// export class Table extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       message: "",
//       size: 4,
//     };
//     this.onChangeHandler = this.onChangeHandler.bind(this);
//   }

//   onChangeHandler(evt) {
//     const { value } = evt.currentTarget;

//     this.setState({ message: value });

//     window.opener.onSuccess(value);
//   }

//   render() {
//     const { message } = this.state;
//     let rows = [];
//     for (var i = 0; i < this.state.size; i++) {
//       let rowID = `row${i}`;
//       let cell = [];
//       for (var idx = 0; idx < this.state.size; idx++) {
//         let cellID = `cell${i}-${idx}`;
//         cell.push(<td key={cellID} id={cellID}></td>);
//       }
//       rows.push(
//         <tr key={i} id={rowID}>
//           {cell}
//         </tr>
//       );
//     }

//     return (
//       <div>
//         <table id="simple-board" value={message} onChange={this.onChangeHandler}>
//           <tbody>{rows}</tbody>
//         </table>
//       </div>
//     );
//   }
// }
