import { useTheme } from "../../context/ThemeContext";
import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";
import "./Greenhouse.css";

import LightSwitch from "./LightSwitch";
import ClimateStats from "./ClimateStats";
const switchTheme = useTheme === 'day' ? dayImage : nightImage;
const dayNight = function Greenhouse() {
  return (
    <section>
      <img className="greenhouse-img" src={dayImage} alt="greenhouse" />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
};

export default dayNight;
