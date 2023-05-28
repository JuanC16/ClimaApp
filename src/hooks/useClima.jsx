import { useContext } from "react";
import ClimaContext from "../context/CilmaProvider";

const useClima = () => {
  return useContext(ClimaContext)
}

export default useClima