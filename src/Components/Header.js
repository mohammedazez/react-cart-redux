import React, { Component } from "react";
import { connect } from "react-redux";

export const Header = () => {
  return (
    <div>
      <h1>Halo semuanya</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
