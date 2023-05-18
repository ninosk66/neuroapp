import React, { useState } from "react";
import "./App.css";

function NerveSelector({ nerves }) {
  const [level1, setLevel1] = useState("");
  const [level2, setLevel2] = useState("");
  const [muscles, setMuscles] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const handleLevel1Change = (e) => {
    setLevel1(e.target.value);
    setIsClicked(false);
  };

  const handleLevel2Change = (e) => {
    setLevel2(e.target.value);
    setIsClicked(false)
  };

  const handleShowResult = () => {
    setIsClicked(true);
    console.log(isClicked);
    const start = nerves.findIndex((n) => n.level === level1);
    const end = nerves.findIndex((n) => n.level === level2);

    if (start === -1 || end === -1) {
      alert("Please select valid levels");
      return;
    }

    const muscles = nerves
      .slice(start, end + 1)
      .flatMap((nerve) => nerve.muscles);

    setMuscles(muscles);
    if (muscles.length === 0) {
      alert("No muscles found")
    }
  };


  console.log({ muscles });
  return (
    <div className='container'>
      
      <div className='select-container'>
        <label htmlFor='level1'>Select Level 1:</label>
        <select id='level1' value={level1} onChange={handleLevel1Change}>
          <option value=''>--Please choose a level--</option>
          {nerves.map((nerve) => (
            <option key={nerve.ID} value={nerve.level}>
              {nerve.level}
            </option>
          ))}
        </select>
      </div>
      <div className='select-container'>
        <label htmlFor='level2'>Select Level 2:</label>
        <select id='level2' value={level2} onChange={handleLevel2Change}>
          <option value=''>--Please choose a level--</option>
          {nerves.map((nerve) => (
            <option key={nerve.ID} value={nerve.level}>
              {nerve.level}
            </option>
          ))}
        </select>
      </div>
      <div className='button-container'>
        <button className='show-result-button' onClick={handleShowResult}>
          Show Result
        </button>
      </div>
      <div className={isClicked ? "list-item show" : "list-item"}>
        <h3>Result:</h3>
        <ul>
          {muscles.map((muscle) => (
            <li
             
              key={muscle}>{muscle}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NerveSelector;
