import React from "react";
import { Loading } from "./LoaderStyle";
import MoonLoader from "react-spinners/MoonLoader";
const ButtonLoader = () => {
  return (
    <Loading>
        <MoonLoader
        color="white"
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
    </Loading>
  );
};

export default ButtonLoader;
