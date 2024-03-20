import Header from "../Header/Header";
import Footer from "../Footer/Footer";
//import MainComponent from "../Main/MainComponent";
import { Outlet } from "react-router-dom";

function AppWrapperComponent() {
  return (
    <>
      <Header />
      {/*<MainComponent />*/}
      <Outlet />
      <Footer />
    </>
  );
}

export default AppWrapperComponent;
