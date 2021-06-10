import { createContext, useState, useContext } from "react";
import speedy from "../pups/speedy-pup.jpg";

export function PupProvider(props) {
  const [puppyType, setPuppyType] = useState(speedy);

  return (
    <PupProvider>
      <App />
    </PupProvider>
  );
}

export function usePuppyType() {
  return useContext(PupContext);
}

export const PupContext = createContext();

export default PupContext;
