import Main from "../components/main/Main";
import Table from "../components/table/Table";

export const mainRoutes = [
  { name: "home", path: "/", exact: false, component: Main },
  { name: "table", path: "/table", exact: true, component: Table },
];
