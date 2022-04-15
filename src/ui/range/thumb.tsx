// Core
import React, { FC } from "react";

// Instruments
import * as classes from "./thumb.module.css";

// Types
import { IThumbProps } from "react-range/lib/types";

type ThumbType = {
  props: IThumbProps;
};

const Thumb: FC<ThumbType> = ({ props }: ThumbType) => {
  return <div {...props} className={classes.slider} />;
};

export { Thumb };
