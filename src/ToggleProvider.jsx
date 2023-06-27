import { useState, createContext, useContext } from "react";

export const apiContext = createContext();

// export const useToggleContext = useContext(apiContext);

export function ToggleProvider({ children }) {
  const [data, setData] = useState({ darkmode: false });
  return (
    <apiContext.Provider value={{ data, setData }}>
      {children}
    </apiContext.Provider>
  );
}
