import { Link } from "react-router-dom";

function HomeProd() {
  var items = [
    {
      id: "DH2684-001",
      img: "https://images.stockx.com/images/Nike-LD-Waffle-SF-Sacai-fragment-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1629131187",
      price: "170",
      brandname: "Nike Sacai",
    },

    {
      id: "150205C",
      img: "https://images.stockx.com/images/Converse-Chuck-Taylor-All-Star-70s-Hi-Comme-des-Garcons-PLAY-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1607647598",
      price: "125",
      brandname: "Converse Chuck Taylor",
    },
    {
      id: "S00BVJ0",
      img: "https://images.stockx.com/images/Superga-2750-Cotropeu-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1627415564",
      price: "75",
      brandname: "Superga",
    },
    {
      id: "VN000D3HY28",
      img: "https://images.stockx.com/images/Vans-Old-Skool-Black-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1607043282",
      price: "60",
      brandname: "Vans Old Skool Black",
    },
    {
      id: "VN000D3HWOO",
      img: "https://images.stockx.com/images/Vans-Old-Skool-True-White-2019-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1625844715",
      price: "60",
      brandname: "Vans Old Skool White",
    },
    {
      id: "371570-05",
      img: "https://images.stockx.com/images/Puma-RS-X3-Puzzle-Puma-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616763544",
      price: "110",
      brandname: "Puma RS",
    },
    {
      id: "382961_01",
      img: "https://images.stockx.com/images/Puma-Wild-Rider-Animal-Crossing-New-Horizons-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1632510649",
      price: "110",
      brandname: "Puma Wild Rider",
    },
    {
      id: "382155-01",
      img: "https://images.stockx.com/images/Puma-Suede-Rhuigi-Villasenor.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1622739201",
      price: "85",
      brandname: "Puma Suede",
    },
    {
      id: "DA4086-100",
      img: "https://images.stockx.com/images/Nike-Blazer-Mid-77-White-Black-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1620676360",
      price: "80",
      brandname: "Nike Blazer",
    },
    {
      id: "BH300HH0EP-001",
      img: "https://images.stockx.com/images/Givenchy-Paris-Flat-Sandals-Black-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1621532418",
      price: "295",
      brandname: "Givenchy sandals",
    },
  ];
  const display = items.map((x, index) => {
    return (
      <div key={index} className="eachStock">
        <Link className="link" to={`shop/${x.id}`}>
          <img src={x.img} alt="logo" height={"250px"} width={"350px"} />
        </Link>
        <div className="mt-2 d-flex flex-row nowrap justify-content-around">
          <p>
            <Link className="link" to={`shop/${x.id}`}>
              {x.brandname}
            </Link>
          </p>
          <p className="text-danger">£{x.price}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="productHome">
      <h1 className="ms-3">Trending</h1>
      <div className="trendingstock mb-5">{display}</div>
    </div>
  );
}

export default HomeProd;
