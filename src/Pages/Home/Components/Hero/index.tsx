import Styles from "./styles.module.scss";
import { FC } from "react";
import { GlassPanel } from "../../../../Components/GlassPanel";

export const Hero: FC = (): JSX.Element => (
  <GlassPanel
    title={"Govannon"}
    subtitle={"The Tech Whisperers of the Industry"}
  >
    <p>
      Welcome to Govannon, where senior developers, tech consultants and
      infrastructure specialists provide cutting-edge solutions to empower your
      business. With unmatched expertise, we deliver results that help your
      business thrive in today's digital world. Browse our website to learn more
      about our services.
    </p>
    <div className={Styles.buttonContainer}>
      <a className={Styles.button} href={"tel:+31624963568"}>
        Call Us!
      </a>
      <a
        className={Styles.button}
        href={
          "mailto:info@govannon.nl?subject=Lets%20talk!&body=Hi%20there,%0A%0AWould you care to have a chat during a coffee?%0A%0ARegards,\n"
        }
      >
        Mail Us!
      </a>
    </div>
  </GlassPanel>
);
