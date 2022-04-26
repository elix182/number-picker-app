import React from "react";
import Wrapper from "./Wrapper";
import './Header.css'

const header = props => {
    return (
      <Wrapper>
        <header className="header">Namso's Rainbowish number picker!</header>
        {props.children}
      </Wrapper>
    );
}

export default header;