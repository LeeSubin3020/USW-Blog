import React, { Component } from "react";
import Link from "@mui/material/Link";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <Link href="/">login/</Link>
          <Link href="/signup">signup</Link>
        </header>
      </div>
    );
  }
}

export default Header;
