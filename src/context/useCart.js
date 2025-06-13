import { useContext } from "react";
import { CartContext } from "./CartContextStore";

export const useCart = () => useContext(CartContext);


