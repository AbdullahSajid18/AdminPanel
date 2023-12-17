import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";

const Home = () => {
  return (
    <div className="home">
      
    <FeaturedInfo />
      <div className="homeWidgets">
        <WidgetSm />
      </div>
    </div>
  );
};

export default Home;
