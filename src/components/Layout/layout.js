import About from "../About/about";
import Contact from "../Contact/contact";
import Navbar from "../Navbar/navbar";
import Waves from "../Waves/waves";
import Footer from "../Footer/footer";
import "./layout.scss";
import SmallNav from "../SmallNav/smallNav";
import Experience from "../Experience/experience";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Waves />
      <SmallNav/>
      <About />
      <Experience/>
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
