import styled from "styled-components";

export const Styles = styled.div`
  table {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  table tr:hover {
    background-color: #ddd;
  }

  table th,
  tfoot td {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #4caf50;
    color: white;
  }

  button {
    font: inherit;
    float: right;
    padding: 10px;
    margin-right: 20px;
    margin-top: 20px;
    background-color: #4caf50;
    border-radius: 5px;
    border-color: #4caf50;
    color: white;
    cursor: pointer;
  }
`;
