import React from "react";
// import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
// import { Table } from "./components/Table";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/table" component={Table} />
//           <Route exact path="/" component={Home} />
//           <Redirect from="*" to="/" />
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// import Main from "./components/main/Main";
