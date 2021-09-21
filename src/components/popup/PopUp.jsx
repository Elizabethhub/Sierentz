import React from "react";
import { PopUpStyled } from "./PopUpStyled";
import PropTypes from "prop-types";
import Form, { Table } from "../Table";

let browser = window;
let popup = null;
// let timer = null;

export default class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler() {
    console.log("onClickHandler", this.props);

    const { url, name, opts } = this.props;
    if (popup && !popup.closed) {
      popup.focus();
      return;
    }
    popup = browser.open(url, name, opts);
    // if (timer === null) {
    //   timer = setInterval(watcher, 2000);
    // }
    return;
  }

  render() {
    const { children } = this.props;
    return (
      <PopUpStyled key={this.prop} onClick={this.onClickHandler}>
        {children}
        <Form></Form>
        {/* <Table></Table> */}
      </PopUpStyled>
    );
  }
}

PopUp.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string,
  opts: PropTypes.string,
};
PopUp.defaultProps = {
  name: "Cool popup",
  opts: `dependent=${1}, alwaysOnTop=${1}, alwaysRaised=${1}, alwaysRaised=${1}, width=${300}, height=${300}`,
};

// export default class PopUp extends Component {
//   handleClick = () => {
//     this.props.toggle();
//   };
//   render() {
//     return (
//       <PopUpStyled>
//         <div className="popup_content">
//           <button type="button" className="close" onClick={this.handleClick}>
//             &times;
//           </button>
//           I'm A Pop Up!!!
//         </div>
//       </PopUpStyled>
//     );
//   }
// }
