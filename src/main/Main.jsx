import "./main.css";
import IdentitySection from "./identity/IdentitySection";
import HomeSection from "./home/HomeSection";
import PodioSection from "./PODIO/PodioSection";

const Main = () => {
  return (
    <>
        <HomeSection/>
        <IdentitySection />
        <PodioSection />
    </>
  );
};

export default Main;
