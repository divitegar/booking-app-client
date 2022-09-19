import useFetch from "../../hooks/useFetch";
import "./featured.css";

export default function Featured() {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=malang,pasuruan,jakarta"
  );
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://q-xx.bstatic.com/psb/capla/static/media/gateway_banner.efe9b1ad.jpg"
              alt="gambar"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>malang</h1>
              <h2>{data?.[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://q-xx.bstatic.com/psb/capla/static/media/gateway_banner.efe9b1ad.jpg"
              alt="gambar"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>pasuruan</h1>
              <h2>{data?.[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://q-xx.bstatic.com/psb/capla/static/media/gateway_banner.efe9b1ad.jpg"
              alt="gambar"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>jakarta</h1>
              <h2>{data?.[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
