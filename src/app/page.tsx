import Image from "next/image";
import HomeContent from "./component/Home";
import Doctor from "./component/Doctor";
import Services from "./component/Services";
import Experience from "./component/Experience";
import Testominals from "./component/Testominal";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div>
      <HomeContent/>
      <Services/>
      <Experience/>
      <Testominals/>
      <Footer/>
    </div>
  );
}
