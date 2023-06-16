import React from "react";
// import Button from "./Button";
import { linkedinlogo } from "../assets";

const Button = ({ onClick, children, as: Component = "button", ...rest }) => {
  return (
    <Component onClick={onClick} className="button" {...rest}>
      {children}
    </Component>
  );
};
const Social = () => {
  return (
    <div>
      <Button as="a" href="https://www.linkedin.com/in/mousam-sarkar/">
        <img src={linkedinlogo} alt="logo" className="w-9 h-9 object-contain" />
      </Button>
    </div>
  );
};

export default Social;
