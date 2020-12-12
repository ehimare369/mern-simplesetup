import React from "react";
import { hot } from "react-hot-loader";

const HelloWorld = () => {
  return (
    <div>
      <h1>Hello to the World!</h1>
    </div>
  );
};

// Export to enable hot reloading with react-hot-reload in development
export default hot(module)(HelloWorld);
