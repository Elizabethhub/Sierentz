import React from "react";
import PopUp from "../popup/PopUp";
import { MainStyled } from "./MainStyled";

export default class Main extends React.Component {
  state = {
    seen: false,
  };
  togglePop = () => {
    let newWin = window.open("/", "hello", "width=200,height=200");

    newWin.document.write("Here is my table");

    // let newWin = window.open("about:blank", "hello", "width=200,height=200");

    // newWin.document.write("<script>window.opener.document.body.innerHTML = 'Test'</script>");
    // let newWindow = window.open("/", "table", "width=300,height=300");
    // newWindow.focus();
    // alert(newWindow.location.href); // (*) about:blank, loading hasn't started yet
    // newWindow.onload = function () {
    //   let html = `<div style="font-size:30px">Welcome!</div>`;
    //   newWindow.document.body.insertAdjacentHTML("afterbegin", html);
    // };
    // this.setState({
    //   seen: !this.state.seen,
    // });
  };
  render() {
    return (
      <div>
        <MainStyled onClick={this.togglePop}>Welcome to our application!</MainStyled>
        {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
      </div>
    );
  }
}
