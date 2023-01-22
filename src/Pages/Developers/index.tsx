import React, { FC } from "react";
import { Navigation } from "../../Components/Navigation";
import { FeaturedImage } from "../../Components/FeaturedImage";
import { PanelWithImage } from "../../Components/PanelWithImage";
import { GlassPanel } from "../../Components/GlassPanel";

export const Developers: FC = (): JSX.Element => (
  <React.Fragment>
    <FeaturedImage src={"/bgImages/developer.png"} />
    <div className={"siteWrapper"}>
      <Navigation />
      <GlassPanel
        title={"Developers"}
        subtitle={"Let our team take care of your tech!"}
      >
        <p>
          When it comes to managing your technical stack, it can be overwhelming
          to keep up with the latest technologies, ensure scalability and
          security, and still maintain focus on your core business. That's where
          our team comes in. Our team of experts can fully take care of your
          whole technical stack, from front-end to back-end, infrastructure and
          security.
        </p>

        <p>
          By hiring our team to manage your technical stack, you can rest easy
          knowing that your technology is in good hands. We have a wealth of
          experience in various technologies and platforms, and our team stays
          up-to-date on the latest industry trends and best practices to ensure
          that your technical stack is always running at its best. Whether it is
          migrating your infrastructure to the cloud, or building a new
          application, we can help you to achieve your goals and objectives.
        </p>

        <p>
          Furthermore, we understand the importance of scalability and security
          in today's business environment and that's why we provide solutions
          that are designed to meet the ever-changing needs of your business. We
          can help you to ensure that your infrastructure is scalable and
          secure, which can help you to achieve better performance, cost savings
          and compliance.
        </p>

        <p>
          In summary, our team can fully take care of your whole technical
          stack, from front-end to back-end, infrastructure and security. With
          our expertise and experience, we can help you to achieve your goals
          and objectives, ensure scalability and security, and maintain focus on
          your core business.
        </p>
      </GlassPanel>

      <PanelWithImage
        imagePath={"/icons/ruby-cyber.png"}
        imageAlt={"Ruby"}
        title={"Ruby (on Rails)"}
      >
        We use Ruby and its Rails Framework because it's a powerful web
        application framework that allows us to build high-performance web
        applications quickly and efficiently, and it's always evolving and
        improving with the support of its active and supportive community.
      </PanelWithImage>

      <PanelWithImage
        imagePath={"/icons/typescript-cyber.png"}
        imageAlt={"Typescript"}
        title={"NodeJS and TypeScript"}
      >
        We use Node.js and Typescript because they are powerful and flexible
        technologies that allow us to build high-performance and scalable
        applications for the web. Node.js is well-suited for building real-time
        applications and has a large and active community, and Typescript helps
        to improve the maintainability and scalability of the codebase and catch
        errors early.{" "}
      </PanelWithImage>

      <PanelWithImage
        imagePath={"/icons/react-cyber.png"}
        imageAlt={"React"}
        title={"React and React Native"}
      >
        We use React and React Native because they are powerful and flexible
        technologies that allow us to build reusable UI components, and make it
        easy to build and maintain complex web applications, and mobile apps for
        both iOS and Android with the same codebase. React also has a large and
        active community, which provides a wide range of resources and tools
        available to help developers build their applications.
      </PanelWithImage>

      <PanelWithImage
        imagePath={"/icons/elixir-cyber.png"}
        imageAlt={"Elixir"}
        title={"Elixir"}
      >
        We use Elixir because it's a modern, functional programming language. It
        excels in its ability to handle a large number of concurrent
        connections, built-in fault-tolerance and hot-code reloading. This makes
        it a great choice for building real-time applications. Its growing and
        supportive community also provides a wide range of libraries and modules
        that can be used to add functionality to your application.
      </PanelWithImage>
    </div>
  </React.Fragment>
);
