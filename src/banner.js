import { useEffect, useState } from "react";
import ban1 from "./assets/banners/11.jpg";
import ban2 from "./assets/banners/12.jpg";
function Banner() {
  let images = [ban1, ban2];
  const [index, setindex] = useState(0);

  useEffect(() => {
    change();
  }, [index]);

  const change = () => {
    if (index === 1) {
      setTimeout(() => setindex(0), 5000);
    } else if (index === 0) {
      setTimeout(() => setindex(1), 5000);
    }

    return <img src={images[index]} alt={`banner ${index}`} />;
  };

  return <div className="my-4 banner">{change()}</div>;
}

export default Banner;
