import { useState } from "react";



const Brain = ({ cranialNerves }) => {
    const [selectedNerve, setSelectedNerve] = useState(null);
    const [showCard, setShowCard] = useState(false);

  const handleNerveClick = (nerve) => {
      setSelectedNerve(nerve);
      setShowCard(true);
  };

  return (
    <div>
      <h2>Cranial Nerves</h2>
      <div className='nerve-buttons'>
        {cranialNerves.map((nerve) => (
          <button key={nerve.name} onClick={() => handleNerveClick(nerve)}>
            {nerve.name}
          </button>
        ))}
      </div>
      {showCard && (
              <div className={showCard? 'nerve-card show': 'nerve-card'}>
          <h3>{selectedNerve.nerve}</h3>
                  <p>Associated Muscles: {selectedNerve.muscles.map(i => <ul><li>{i}</li></ul>)}</p>
          <p>Type: {selectedNerve.type}</p>
        </div>
      )}
    </div>
  );
};

export default Brain;
