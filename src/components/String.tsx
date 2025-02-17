import React from "react";

type StringProps = {
  children: React.ReactNode;
};

const String: React.FC<StringProps> = ({children}) => {
  return (
    <p>
      &quot;{children}&quot;
    </p>
  )
}

export default String;