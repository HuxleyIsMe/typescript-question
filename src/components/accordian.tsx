import React, { ReactElement } from "react";

export const ColourfulPage: React.FC<{ colour: string }> = ({ colour }) => (
  <div> i am {colour}</div>
);

export const BoringPage: React.FC = () => <div> i am boring page </div>;

/**  typeguard */
enum validAccordianChildren {
  ColourfulPage,
  BoringPage,
}
const isAccordianElement = (
  element: string
): element is keyof AccordianComposition => {
  return `${element}` in validAccordianChildren;
};

type FunAccordian = {
  type: "fun";
  children: React.ReactNode;
  // uncommenting these cause a react node vs react element issue
  // children: typeof ColourfulPage | typeof ColourfulPage[];
};
type BlandAccordian = {
  type: "bland";
  children: React.ReactNode;
  //   children: typeof BoringPage | typeof BoringPage[];
};
type AccordianType = FunAccordian | BlandAccordian;

type AccordianComposition = {
  ColourfulPage: typeof ColourfulPage;
  BoringPage: typeof BoringPage;
};

interface ChildWithTypeName {
  type: {
    name: string;
  };
}

const Accordian: AccordianComposition & React.FC<AccordianType> = ({
  children,
}) => {
  /** here i can detect this manually however i want ts giving me errors */
  React.Children.map(children, (child) => {
    const typeName = (child as ChildWithTypeName)?.type?.name;
    if (!isAccordianElement(typeName)) {
      throw new Error(
        `Accordian can only accept a Colour ful page or a boring page ${typeName}`
      );
    }
  });

  // props has bland

  return (
    <div>
      <>{children}</>
    </div>
  );
};

Accordian.ColourfulPage = ColourfulPage;
Accordian.BoringPage = BoringPage;

export { Accordian };
