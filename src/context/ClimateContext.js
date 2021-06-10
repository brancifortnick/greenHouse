// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { useContext } from "react";

const ClimateContext = createContext();
const useClimate = () => useContext(ClimateContext);
// const { ClimateContext } = useClimate();
const climateProvider = ({ children }) => {
  const [temperature, setTemperature] = useState(50);
  return (
    <ClimateContext.Provider
      key={temperature}
      value={{ temperature, setTemperature }}
    >
      {children}
    </ClimateContext.Provider>
  );
};
