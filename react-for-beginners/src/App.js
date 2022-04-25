import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once.")
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes.", keyword)
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.", counter)
  }, [counter]);
  useEffect(() => {
    console.log("I run 'keyword & counter' changes.")
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"click me"} onClick={onClick}/>
    </div>
  );
}

export default App;
