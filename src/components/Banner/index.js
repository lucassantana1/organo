import banner from "../../assets/images/banner.png";
import "./Banner.css";

export const Banner = () => {
  return (
    <header className="banner">
      <img src={banner} alt="O banner principal da pagina do Organo" />;
    </header>
  );
};

export default Banner;
