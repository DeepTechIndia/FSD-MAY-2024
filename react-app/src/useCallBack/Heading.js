import React from "react";

function Heading() {
  console.log("Rendering Heading");
  return <h2>useCallBack Hook</h2>;
}

export default React.memo(Heading);
