import Styles from "./styles.module.scss";
import { FC } from "react";
import { GlassPanel } from "../../../../Components/GlassPanel";

export const Features: FC = (): JSX.Element => (
  <div className={Styles.features}>
    <h2>How can we help?</h2>
    <div className="flex one two-800 three-1000 center">
      <GlassPanel subtitle={"Senior Developers"} equalHeight gapped>
        Our team of experienced senior developers provides expert software
        development services, ensuring that your projects are delivered to the
        highest standards.
      </GlassPanel>
      <GlassPanel subtitle={"Infrastructure Specialists"} equalHeight gapped>
        Our infrastructure specialists have the knowledge and expertise to
        design and implement robust and secure technology solutions to meet the
        specific needs of your business.
      </GlassPanel>
      <GlassPanel subtitle={"Technology Consultancy"} equalHeight gapped>
        We provide advice on the latest technologies and best practices. Our
        team will help you make informed decisions to take your business to the
        next level.
      </GlassPanel>
    </div>
  </div>
);
