import React from "react";

const BreadCrums = () => {
  return (
    <div>
      <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Library
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrums;
