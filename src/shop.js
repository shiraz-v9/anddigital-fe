import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import CAT from "./categories";
import Recommended from "./recommended";
import { addtoBasket, addtoList } from "./redux/state";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./footer";

function Shop() {
  // const count = useSelector((state) => state.global.value);
  const count = useSelector((state) => state.global.value);
  const items = useSelector((state) => state.global.items);
  const dispatch = useDispatch();
  let params = useParams();
  const [basket, setbasket] = useState([]);

  const [resp, setresp] = useState([]);
  const [load, setload] = useState(true);

  useEffect(() => {
    setload(true);
    axios
      .get(`http://localhost:5000/shopitem/${params.item}`)
      .then(function (r) {
        setresp(r.data);
        setload(false);
      })
      .catch(function (e) {
        setresp(e);
        setload(false);
      })
      .then(function () {});
  }, [params]);

  useEffect(() => {
    var ls = localStorage.getItem("basket");
    var LSP = JSON.parse(localStorage.getItem("basket"));
    const updateState = (arr) => {
      dispatch(addtoList(arr));
      // dispatch(addtoBasket(arr.length));
      console.log("items ", items);
    };

    if (basket !== []) {
      if (LSP !== [] && ls !== undefined && ls !== null) {
        localStorage.setItem("basket", JSON.stringify([...LSP, basket]));
        updateState([...LSP, basket]);
      } else {
        localStorage.setItem("basket", JSON.stringify(basket));
        updateState(basket);
      }
    }
  }, [basket]);

  return (
    <div>
      <Navbar />
      <div>
        <div className="mt-5">
          {!resp || load === true ? (
            <p className="mx-5 mt-3 loading">loading...</p>
          ) : (
            <div className="shopContainer">
              <CAT />
              <div className="shopContainer2">
                <div className="carousel">
                  <img
                    src={resp.thumbnail}
                    alt="images"
                    height={"250px"}
                    width={"350px"}
                  />
                  {!resp.imageLinks || !resp.imageLinks.length
                    ? null
                    : resp.imageLinks.slice(1).map((x, index) => {
                        return (
                          <img
                            key={index.toString()}
                            src={x}
                            alt={`image ${index}`}
                            height={"250px"}
                            width={"350px"}
                          />
                        );
                      })}
                </div>

                <div className="productData mt-2">
                  <h3>
                    <strong>{resp.shoeName}</strong>{" "}
                  </h3>
                  <p>£{resp.retailPrice}</p>
                  <div className="gap d-flex flex-row justify-content-start flex-nowrap">
                    <button
                      className="buybtn"
                      onClick={() =>
                        setbasket({
                          ID: resp._id,
                          name: resp.shoeName,
                          price: resp.retailPrice,
                          brand: resp.brand,
                          img: resp.thumbnail,
                        })
                      }
                    >
                      add to basket
                    </button>
                    <button
                      onClick={() =>
                        setbasket({
                          ID: resp._id,
                          name: resp.shoeName,
                          price: resp.retailPrice,
                          brand: resp.brand,
                          img: resp.thumbnail,
                        })
                      }
                      className="buybtn"
                    >
                      collect in store
                    </button>
                  </div>
                  <p>product ID: {resp.styleID}</p>
                  <p className="desc">{resp.description}</p>{" "}
                  <h3>Styles just for you</h3>
                  <Recommended input={resp.brand} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
