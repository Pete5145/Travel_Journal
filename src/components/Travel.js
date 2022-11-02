import React from "react";

function Travel({item: {title, location, googleMapsUrl, startDate, endDate, description, imageUrl}}) {
  return (
    <section>
      <div className="travel--img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="travel--info">
        <span>
          <i className="fa-solid fa-location-dot"></i>
          <i className="city">{location}</i>
        </span>
        <span>
          <a className="map" href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">
            View on Google Maps
          </a>
        </span>
        <h3 className="destination">{title}</h3>
        <p className="date">
          {startDate} - {endDate}
        </p>
        <p className="description">{description}</p>
      </div>
    </section>
  );
}

export default Travel;
