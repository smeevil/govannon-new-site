import { FC } from "react";

import Styles from "./styles.module.scss";

interface ICardProps {
  name: string;
  imagePath: string;
  website?: string;
  linkedIn: string;
  email: string;
  phone?: string;
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
      <div className={Styles.intro}>
        <h3>{name}</h3>
        <img src={imagePath} alt={name} />
      </div>
      <div className={Styles.contactInfo}>
        <div className={Styles.link}>
          <img alt={"email"} src={"/icons/email-icon.png"} />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        {phone && (
          <div className={Styles.link}>
            <img alt={"phone"} src={"/icons/phone-icon.png"} />
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
        )}
        {website && (
          <div className={Styles.link}>
            <img alt={"website"} src={"/icons/world-icon.png"} />
            <a href={website}>{website}</a>
          </div>
        )}
        <div className={Styles.link}>
          <img alt={"linkedin"} src={"/icons/linkedin-icon.png"} />
          <a href={linkedIn}>LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
);
