import Styles from "./styles.module.scss";
import React, { FC } from "react";

interface IPanelWithImageProps {
  imagePath: string;
  imageAlt: string;
  title: string;
  children: React.ReactNode;
}

export const PanelWithImage: FC<IPanelWithImageProps> = ({
  imagePath,
  imageAlt,
  title,
  children,
}) => (
  <div className={Styles.panelWrapper}>
    <div className={"glassPanel equalHeight"}>
      <h3>{title}</h3>
      <div className={Styles.iconAndText}>
        <img src={imagePath} alt={imageAlt} />
        <p>{children}</p>
      </div>
    </div>
  </div>
);
