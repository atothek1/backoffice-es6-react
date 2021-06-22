import React from "react";
import cn from "classnames";
import styles from "./styles.scss";

export function Image({
  src,
  preserveAspectRatio = true,
  alt = "alternative image text"
}) {
  const classNames = cn(styles.Image, {
    [styles.aspectRatio]: preserveAspectRatio
  });
  return <img src={src} alt={alt} className={classNames} />;
}
