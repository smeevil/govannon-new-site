import React, { FC } from "react";
import { Navigation } from "../../Components/Navigation";
import "./styles.scss";
import { FeaturedImage } from "../../Components/FeaturedImage";
import Styles from "../Home/Components/Hero/styles.module.scss";

export const Developers: FC = (): JSX.Element => (
  <React.Fragment>
    <FeaturedImage src={"/bgImages/developer.png"} />
    <div className={"siteWrapper"}>
      <Navigation />
      <div className="flex one">
        <div className="glassPanel panelBottomSpacing">
          <h1>Developers</h1>
          <h3>Let our team take care of your tech! </h3>

          <p>
            When it comes to managing your technical stack, it can be
            overwhelming to keep up with the latest technologies, ensure
            scalability and security, and still maintain focus on your core
            business. That's where our team comes in. Our team of experts can
            fully take care of your whole technical stack, from front-end to
            back-end, infrastructure and security.
          </p>

          <p>
            By hiring our team to manage your technical stack, you can rest easy
            knowing that your technology is in good hands. We have a wealth of
            experience in various technologies and platforms, and our team stays
            up-to-date on the latest industry trends and best practices to
            ensure that your technical stack is always running at its best.
            Whether it is migrating your infrastructure to the cloud, or
            building a new application, we can help you to achieve your goals
            and objectives.
          </p>

          <p>
            Furthermore, we understand the importance of scalability and
            security in today's business environment and that's why we provide
            solutions that are designed to meet the ever-changing needs of your
            business. We can help you to ensure that your infrastructure is
            scalable and secure, which can help you to achieve better
            performance, cost savings and compliance.
          </p>

          <p>
            In summary, our team can fully take care of your whole technical
            stack, from front-end to back-end, infrastructure and security. With
            our expertise and experience, we can help you to achieve your goals
            and objectives, ensure scalability and security, and maintain focus
            on your core business.
          </p>
        </div>
      </div>
    </div>
  </React.Fragment>
);
