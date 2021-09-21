import React from "react";
import { MainStyled } from "./MainStyled";

export default class Main extends React.Component {
  togglePop = () => {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
  width=0,height=0,left=-1000,top=-1000`;
    let newWin = window.open("http://localhost:3000/table", "hello", params);
    newWin.document.open();

    // let table = newWin.document.createElement("table"),
    //   body = newWin.document.body;

    // table.innerHTML = "Here should be my table!";
    // table.style.fontSize = "30px";
    // body.insertBefore(table, body.firstChild);
  };

  render() {
    return (
      <div>
        {/* <MainStyled onClick={window.open("http://localhost:3000/table")}> Welcome to our table!</MainStyled> */}
        <MainStyled onClick={this.togglePop}> Welcome to our table!</MainStyled>
      </div>
    );
  }
}
