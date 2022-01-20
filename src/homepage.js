import Banner from "./banner";
import CAT from "./categories";
import Footer from "./footer";
import HomeProd from "./HomeProd";
import Navbar from "./navbar";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className="rowContainer">
        <CAT />
        <HomeProd />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
