// 1.only call the hooks at the top level
// 2. hooks should not be called inside a condition
// 3.React component

function componment() {
  const [pvalue, setValue] = useState();
}

function myComponent() {
  if (condition) {
    const [pvalue, setValue] = useState();
  }
}

function myFunction() {
  const [pvalue, setValue] = useState();
}
