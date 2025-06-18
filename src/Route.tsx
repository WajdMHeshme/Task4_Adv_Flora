import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Logo from "./assets/logo.svg";
import { Outlet } from "react-router-dom";
import { Loader } from "./Loader/Loader";
import { useEffect, useState } from "react";
const Route = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar logo={Logo} btnTitle="Login" />
      <Outlet />
      <Footer />
    </>
  );
};

export default Route;
