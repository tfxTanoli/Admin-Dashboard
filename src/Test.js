import React from "react";
import "../src/Test.css";

function Test() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 sidebar">
          <ul>
            <li>
              <a href="/Dashboard">
              <i className="bi bi-house-fill"></i> Dashboard
              </a>
            </li>
            <li>
              <i className="bi bi-box"></i> Catalog
            </li>
            <li>
                <i className="bi bi-plus-square"></i> Add Product
            </li>
            <li>
              <i className="bi bi-eye"></i> View Product
            </li>
            <li>
              <i className="bi bi-pencil"></i> Update Product
            </li>
            <li>
              <i className="bi bi-trash"></i> Delete Product
            </li>
            <li>
              <i className="bi bi-bell-fill"></i> Notifications
            </li>
            <li>
              <i className="bi bi-person-fill"></i> Profile
            </li>
          </ul>
        </div>
        {/* <div className="col-md-8 main-content" style={{width:"1510px"}}>
        </div> */}
      </div>
    </div>
  );
}

export default Test;
