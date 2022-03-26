"use strict";

import flatten from "flat";

export function flattenObject(json, delimiter = "_") {
  return flatten(json, { delimiter });
}

export function createHTML(jsonList) {
  function tableHeaders() {
    let headers = "";
    const keys = Object.keys(jsonList[0]);
    keys.forEach((key) => {
      headers += `<th>${key}</th>`;
    });
    return `<tr>${headers}</tr>`;
  }

  function tableBody() {
    let html = "";
    jsonList.forEach((row) => {
      const values = Object.values(row);
      html += "<tr>";
      values.forEach((value) => {
        html += `<td>${value}</td>`;
      });
      html += "</tr>";
    });
    return html;
  }

  const table = `<table>${tableHeaders()}${tableBody()}</table>`;
  const html = `
    <html>
      <head>
        <style>
          table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }

          td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
          }
        </style>
      </head>
      <body>${table}</body>
    </html>`;
  return html;
}
