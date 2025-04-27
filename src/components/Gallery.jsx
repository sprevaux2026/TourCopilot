// components/Gallery.jsx

import TourCard from "./TourCard";

// Create a gallery that maps over the tours array and renders TourCard for each

function Gallery({ tours, removeTour }) {
  return (
    <section className="gallery">
      {tours.map((tour) => {
        return (
          <TourCard
            key={tour.id}
            {...tour}
            removeTour={removeTour}
          />
        );
      })}
    </section>
  );
}

export default Gallery;
