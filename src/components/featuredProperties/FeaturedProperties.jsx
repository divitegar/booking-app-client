import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

export default function FeaturedProperties() {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "loading..."
      ) : (
        <>
          {data.map((item, index) => {
            return (
              <div className="fpItem" key={index}>
                <img src={item?.photos?.[0]} alt="gambar" className="fpImg" />
                <span className="fpName">{item?.name}</span>
                <span className="fpCity">{item?.city}</span>
                <span className="fpPrice">
                  Starting from ${item?.cheapestPrice}
                </span>
                {item?.rating && (
                  <div className="fpRating">
                    <button>{item?.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
