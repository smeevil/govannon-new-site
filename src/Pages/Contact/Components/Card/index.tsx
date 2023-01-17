import { FC } from "react";

import Styles from "./Styles.module.scss";

interface ICardProps {
  name: string;
  imagePath: string;
  website: string;
  linkedIn: string;
  email: string;
  phone: string;
}

export const Card: FC<ICardProps> = ({
  email,
  linkedIn,
  phone,
  website,
  imagePath,
  name,
}): JSX.Element => (
  <div className={Styles.card}>
    <div className={Styles.wrapper}>
      <h3>{name}</h3>
      <img src={imagePath} alt={name} />
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
      <p>{linkedIn}</p>
    </div>
  </div>
);
