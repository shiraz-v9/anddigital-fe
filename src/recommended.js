import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Recommended({ input }) {
  const [response, setResponse] = useState([]);
  const [load, setload] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/shop/${input}`)
      .then(function (r) {
        // handle success

        setResponse(r.data);
        setload(false);
      })
      .catch(function (e) {
        // handle error

        setResponse(e);
        setload(false);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const component = () => {
    var data = response.map((x, index) => {
      return (
        <div key={index.toString()}>
          <Link className="link" to={`/shop/${x.styleID}`}>
            <img
              src={x.thumbnail}
              alt={`recommended${index}`}
              height={"166px"}
              width={"233px"}
            />
            <div className="d-flex flex-row justify-content-between">
              <p>{x.shoeName.slice(0, 22) + "..."}</p>
              <p>£{x.retailPrice}</p>
            </div>
          </Link>
        </div>
      );
    });

    return (
      <div className="d-flex flex-row flex-start flex-wrap gap">{data}</div>
    );
  };

  return <div>{load === true ? "loading" : component()}</div>;
}

export default Recommended;
