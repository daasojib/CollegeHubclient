import { Outlet } from "react-router-dom";
import Header from "../Components/NavBar/Header";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="pt-28 pb-20">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
