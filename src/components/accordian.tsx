import React, { ReactElement } from "react";

export const ColourFulPage: React.FC<{ colour: string }> = ({ colour }) => (
  <div> i am {colour}</div>
);

export const BoringPage: React.FC = () => <div> i am boring page </div>;

type FunAccordian = {
  type: "fun";
  children: React.ReactNode;
  //   children: typeof ColourFulPage | typeof ColourFulPage[];
};
type BlandAccordian = {
  type: "bland";
  children: React.ReactNode;
  //   children: typeof BoringPage | typeof BoringPage[];
};
type AccordianType = FunAccordian | BlandAccordian;

export const Accordian: React.FC<AccordianType> = ({ children }) => {
  return (
    <div>
      <>{children}</>
    </div>
  );
};
