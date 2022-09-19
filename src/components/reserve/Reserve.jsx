import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useFetch from "../../hooks/useFetch";
import "./reserve.css";

export default function Reserve({ setOpen, hotelId }) {
  const { data, loading, error } = useFetch(`hotels/room/${hotelId}`);

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {data.map((item) => (
          <div className="rItem">
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
