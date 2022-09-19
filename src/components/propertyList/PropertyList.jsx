import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

export default function PropertyList() {
  const { data, loading, error } = useFetch("/hotels/countByType");
  const images = [
    "https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading...."
      ) : (
        <>
          {data &&
            images.map((item, index) => {
              return (
                <div key={index} className="pListItem">
                  <img src={item} alt="gambar" className="pListImg" />
                  <div className="pListTitles">
                    <h1>{data?.[index]?.type}</h1>
                    <h2>
                      {data?.[index]?.count} {data?.[index]?.type}
                    </h2>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
}
