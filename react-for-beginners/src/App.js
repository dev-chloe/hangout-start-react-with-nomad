import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css"

// function Hello() {
//   useEffect(() => {
//     console.log("created! :)")
//     return () => console.log("destroyed! :(")
//   }, []);
//   return <h1>Hello</h1>
// }

// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prev) => !prev);
//   return (
//     <div>
//       {showing ? <Hello /> : null }
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </div>
//   );
// }

function App() {
    const [counter, setValue] = useState(0);
    const onClick = () => setValue((prev) => prev + 1);
    console.log("i run all the time");
    useEffect(() => {
      console.log("CALL THE API")
    }, []);
    return (
      <div>
        <h1 className={styles.title}>{counter}</h1>
        <Button text={"click me"} onClick={onClick}/>
      </div>
    );
  }

export default App;
