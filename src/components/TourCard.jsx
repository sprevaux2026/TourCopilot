// components/TourCard.jsx

// Create a card component to display a tour's name, info, image, and price
// Include a "Not Interested" button that removes this tour when clicked

function TourCard({ id, name, info, image, price, removeTour }) {
    return (
      <article className="tour-card">
        <img src={image} alt={name} />
        <div className="tour-details">
          <h2>{name}</h2>
          <h4>${price}</h4>
          <p>{info}</p>
          <button onClick={() => removeTour(id)}>Not Interested</button>
        </div>
      </article>
    );
  }
  
  export default TourCard;
  