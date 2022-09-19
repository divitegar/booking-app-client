import { Link } from "react-router-dom";
import "./searchItem.css";

export default function SearchItem({ item }) {
  return (
    <div className="searchItem">
      <img src={item?.photos?.[0]} alt="gambar" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item?.name}</h1>
        <span className="siDistance">{item?.distance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio apartment with air conditioning
        </span>
        <span className="siFeatures">{item?.description}</span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price day!
        </span>
      </div>
      <div className="siDetails">
        {item?.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item?.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${item?.cheapestPrice}</span>
          <span className="siTaxOp">Includes Tax</span>
          <Link to={`/hotels/${item?._id}`}>
            <button className="siCheckButton">See Availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
