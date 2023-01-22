import React, { FC } from "react";
import { Navigation } from "../../Components/Navigation";
import "./styles.scss";
import { FeaturedImage } from "../../Components/FeaturedImage";
import Styles from "../Home/Components/Hero/styles.module.scss";
import { Card } from "./Components/Card";
import { GlassPanel } from "../../Components/GlassPanel";

export const Contact: FC = (): JSX.Element => (
  <React.Fragment>
    <FeaturedImage src={"/bgImages/contact.png"} />
    <div className={"siteWrapper"}>
      <Navigation />
      <GlassPanel title={"Contact"} subtitle={"Let's talk!"}>
        <p>
          Contact us for expert solutions and support in various technologies,
          we stay up-to-date with industry trends and can help you achieve your
          business goals. From migrating to the cloud, to building new
          applications and ensuring scalability, security and compliance. Let's
          schedule a consultation and take the first step towards achieving your
          goals.
        </p>
        <p>
          Feel free to contact any of us, and we'll take care of you! Our team
          is here to help you with any questions or concerns you may have. We're
          always happy to assist.
        </p>
      </GlassPanel>

      <div className="flex  one two-1000  center">
        <Card
          name={"Gerard de Brieder"}
          imagePath={"/team/brieder.jpeg"}
          website={"https://govannon.nl"}
          linkedIn={"https://www.linkedin.com/in/smeevil"}
          email={"info@govannon.nl"}
          phone={"+31624963568"}
        />
        <Card
          name={"Rachid al Maach"}
          imagePath={"/team/rachid.jpeg"}
          website={"https://qraft.nl"}
          linkedIn={"https://www.linkedin.com/in/rachidalmaach/"}
          email={"info@qraft.com"}
          phone={"+31624963568"}
        />
        <Card
          name={"Christiaan van Bemmel"}
          imagePath={"/team/bemmel.jpeg"}
          website={"https://www.bemmel.nu"}
          linkedIn={"https://www.linkedin.com/in/christiaanvanbemmel/"}
          email={"info@bemmel.dev"}
          phone={"+31624963568"}
        />
        <Card
          name={"Mark Kampstra"}
          imagePath={"/team/kampstra.jpeg"}
          website={"https://markkampstra.nl"}
          linkedIn={"https://www.linkedin.com/in/markkampstra/"}
          email={"mark@kampstra.nl"}
          phone={"+31624963568"}
        />
        <Card
          name={"Wes Oldenbeuving"}
          imagePath={"/team/wes.png"}
          website={"https://narnach.nl"}
          linkedIn={"https://www.linkedin.com/in/wesoldenbeuving/"}
          email={"info@narnach.nl"}
          phone={"+31624963568"}
        />
        <Card
          name={"Yassine Benhadi"}
          imagePath={"/team/yassine.jpeg"}
          linkedIn={"https://www.linkedin.com/in/yassine-benhadi/"}
          email={"yassine@benhadi.com"}
          phone={"+31624963568"}
        />
      </div>
    </div>
  </React.Fragment>
);
