import React from "react";
type Props = {
  title: string;
};
const Section_Heading = (props: Props) => {
  return (
    <h2 className="mb-8 text-3xl font-medium text-center capitalize">
      {props.title}
    </h2>
  );
};

export default Section_Heading;
