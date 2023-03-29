import { createContext, useState, useContext } from "react";

const GeneralContext = createContext();

export const useGeneralContext = () => useContext(GeneralContext);

export const CartProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const values = {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    date,
    setDate,
    time,
    setTime,
  };

  return (
    <GeneralContext.Provider value={values}>{children}</GeneralContext.Provider>
  );
};
