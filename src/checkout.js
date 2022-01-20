import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoBasket, addtoList } from "./redux/state";
export function Basket() {
  const count = useSelector((state) => state.global.value);
  const LIST = useSelector((state) => state.global.items);
  const dispatch = useDispatch();

  useEffect(() => {
    var ls = localStorage.getItem("basket");
    var LSP = JSON.parse(localStorage.getItem("basket"));
    if (ls !== null && ls !== undefined) {
      let fixed = LSP.filter((x) => {
        return x.ID;
      });
      dispatch(addtoBasket(fixed.length));
      //   console.log("filter ", fixed);
    }
  }, [LIST]);

  return (
    <div className="d-flex flex-row flex-nowrap mx-2 my-auto">
      <p className="mb-0">Checkout: </p>
      <p className="mb-0">{count}</p>
    </div>
  );
}
