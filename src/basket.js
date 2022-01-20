import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./navbar";
import { addtoBasket, addtoList } from "./redux/state";

function BasketPage() {
  const LIST = useSelector((state) => state.global.items);
  const count = useSelector((state) => state.global.value);
  var tot = 0;
  //   const string = JSON.stringify(LIST);
  const dispatch = useDispatch();
  var ls = localStorage.getItem("basket");
  var LSP = JSON.parse(localStorage.getItem("basket"));
  useEffect(() => {
    if (ls !== null && ls !== undefined) {
      let fixed = LSP.filter((x) => {
        return x.ID;
      });
      dispatch(addtoList(fixed));
      //   console.log("filter ", fixed);
    }
  }, [ls]);

  const removeOne = (ID) => {
    console.log(ID);
    basketitems = LIST.filter((x) => {
      return x.ID !== ID;
    });
    localStorage.setItem("basket", JSON.stringify(basketitems));

    dispatch(addtoList(basketitems));
    // console.log(basketitems);
    console.log(LIST);
  };

  var basketitems = LIST.map((x, index) => {
    tot += x.price;
    return (
      <div className="d-flex flex-row" key={index.toString()}>
        <img
          className="basketimg"
          src={x.img}
          alt="imgThumbnail"
          height={"250px"}
          width={"350px"}
        />
        <div>
          {" "}
          <p>{x.name}</p>
          <p>£{x.price}</p>
          <button onClick={() => removeOne(x.ID)}>remove</button>
        </div>
      </div>
    );
  });

  const emptyBasket = () => {
    return (
      <div>
        <h3>You're basket is empty please continue shopping with us</h3>

        <a href="/">Home</a>
      </div>
    );
  };

  const myBasket = () => {
    return (
      <div>
        <h3>
          You have {count} item in your basket total is £{tot}
        </h3>
        <div className="mx-auto mt-5">{basketitems}</div>
        <button className="ms-2 mt-4 buybtn">Checkout</button>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="mt-3 desc mx-auto">
        {count === 0 ? emptyBasket() : myBasket()}
      </div>
    </div>
  );
}

export default BasketPage;
