import Heading from "./Heading";
import Button from "./Button";
import Count from "./Count";
import { useState, useCallback } from "react";

function ParentComponent() {
  const [salary, setSalary] = useState(50000);
  const [age, setAge] = useState(25);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Heading />
      <Count text="age" count={age} />

      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;
