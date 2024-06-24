import React, { FC } from "react";

interface IconColor {
  color: string;
}
interface Arrow {
  direction?: "next" | "prev";
  iconStyle?: "Next" | "Prev";
}

const Prev: FC<IconColor> = ({ color }) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.625 1.49994L2.125 5.99994L6.625 10.4999M2.75 5.99994H11.875"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  );
};
const Next: FC<IconColor> = ({ color }) => {
  return (
    <svg
      width="10"
      height="18"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 1.5L8.75 9L1.25 16.5"
        stroke="#006DBB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Arrow: FC<Arrow> = ({ iconStyle = "Next" }) => {
  const components: any = {
    Next: Next,
    Prev: Prev,
  };
  const SelectedComponent = components[iconStyle];
  return <SelectedComponent />;
};

export default Arrow;
