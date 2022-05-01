import React from "react";
import styled from "./header.module.css";

const PageHeader = () => (
  <div className={styled.header}>
    <div className={styled.logo}>
      <img src="../VidoCity-logo.png" alt="logo" />
    </div>
  </div>
);
export default PageHeader;
