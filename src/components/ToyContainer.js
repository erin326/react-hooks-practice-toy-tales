import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {

  const displayToys = toys.map(toy => (
    <ToyCard key={toy.id} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} deleteToy={handleDelete}/>
  ))

  function handleDelete(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      const updatedToys = toys.filter(toy => toy.id !== id);
      setToys(updatedToys)
    })
  }

  return (
    <div id="toy-collection">
      {displayToys}

    </div>
  );
}

export default ToyContainer;
