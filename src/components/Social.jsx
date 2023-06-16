import React from "react";
// import Button from "./Button";
import { linkedinlogo, githublogo } from "../assets";

const Button = ({ onClick, children, as: Component = "button", ...rest }) => {
  return (
    <Component onClick={onClick} className="button" {...rest}>
      {children}
    </Component>
  );
};
const Social = () => {
  return (
    <>
      <ul className="list-none sm:flex flex-row gap-3">
        <li>
          <Button as="a" href="https://www.linkedin.com/in/mousam-sarkar/">
            <img
              src={linkedinlogo}
              alt="logo"
              className={`w-6 h-6 object-contain cursor-pointer sm:flex`}
            />
          </Button>
        </li>
        <li>
          <Button as="a" href="https://github.com/MousamSarkar/">
            <img
              src={githublogo}
              alt="logo"
              className={`w-6 h-6 object-contain cursor-pointer sm:flex`}
            />
          </Button>
        </li>
      </ul>
    </>
  );
};

export default Social;
