import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [predicted, setPredicted] = useState();

  const handleName = (event) => {
    setName(event.target.value);
  };

  const fetchData = async () => {
    const url = `https://api.agify.io/?name=${name}`;

    const response = await fetch(url);
    const data = await response.json();

    setPredicted({
      ...predicted,
      ...data,
    });

    setName("");
  };

  console.log(predicted);
  return (
    <div className="App">
      <h1>Welcome to Predict Age Website </h1>

      <input
        onChange={handleName}
        type="text"
        placeholder="Enter Your Name..."
      />
      <button onClick={fetchData}>Submit</button>

      <div>
        {predicted && (
          <>
            <p>Your Name : {predicted.name}</p>
            <p>Your Age : {!predicted.age ? "Your Was Dead" : predicted.age}</p>
            <p>Your Count : {predicted.count}</p>

            <p>{predicted.age > 50 && "Haha Your So Old"}</p>
            <p>{predicted.age < 25 && "Haha So Young Babyyyy"}</p>
          </>
        )}
      </div>
    </div>
  );
}
