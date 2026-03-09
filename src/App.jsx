import { useState, useEffect } from "react";

import NavSection from "./Components/NavSection";
import FooterSection from "./Components/FooterSection";
import HomePage from "./Components/HomePage";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [carts, setCarts] = useState([]);
  const [Page, setPage] = useState(() => HomePage);

  const pageHandelar = (e) => {
    setPage(() => e);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 780) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let menuHandelar = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  let containerClickHandelar = () => {
    setIsMenuOpen(false);
  };

  let handelCart = (collectedCart) => {
    setCarts((prevCarts) => {
      const isExist = prevCarts.find((item) => item.id === collectedCart.id);
      if (isExist) {
        return prevCarts;
      } else {
        return [...prevCarts, collectedCart];
      }
    });
  };

  let handelDeletCarts = (id) => {
    setCarts((prevCarts) => prevCarts.filter((item) => item.id !== id));
  };

  return (
    <div className="containeer" onClick={containerClickHandelar}>
      <NavSection
        isMenuOpen={isMenuOpen}
        menuHandelar={menuHandelar}
        pageHandelar={pageHandelar}
        cartsCount={carts}
      />
      <Page
        pageHandelar={pageHandelar}
        onHandelCart={handelCart}
        carts={carts}
        onDelete={handelDeletCarts}
      />
      <FooterSection />
    </div>
  );
}

export default App;
