import { Link, useParams } from "react-router-dom";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import CAT from "./categories";
import Recommended from "./recommended";

function Search() {
  let params = useParams();

  const [resp, setresp] = useState([]);
  const [load, setload] = useState(true);

  useEffect(() => {
    setload(true);
    axios
      .get(`http://localhost:5000/shop/${params.product}`)
      .then(function (r) {
        console.log(r.data);
        setresp(r.data);
        setload(false);
      })
      .catch(function (e) {
        // handle error
        console.log(e);
        setresp(e);
        setload(false);
      })
      .then(function () {
        // always executed
      });
  }, [params]);

  const display = resp.map((x, index) => {
    return (
      <div key={index} className="eachStock">
        <Link className="link" to={`/shop/${x.styleID}`}>
          <img src={x.thumbnail} alt="logo" height={"250px"} width={"350px"} />
        </Link>
        <div className="mt-2 d-flex flex-row nowrap justify-content-around">
          <p>
            <Link className="link" to={`/shop/${x.styleID}`}>
              {x.shoeName.slice(0, 25) + "..."}
            </Link>
          </p>
          <p className="text-danger">£{x.retailPrice}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <div>
        {/* <h3>{params.item}</h3> */}
        <div className="mt-5">
          {!resp || load === true ? (
            <p className="mx-5 mt-3">loading...</p>
          ) : (
            <div>
              <div className="rowContainer">
                <CAT />
                <div>
                  <h1 className="ms-3">Search results for {params.product}</h1>
                  <div className="trendingstock">{display}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
