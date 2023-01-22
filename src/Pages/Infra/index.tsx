import React, { FC } from "react";
import { Navigation } from "../../Components/Navigation";
import { FeaturedImage } from "../../Components/FeaturedImage";
import { PanelWithImage } from "../../Components/PanelWithImage";
import { GlassPanel } from "../../Components/GlassPanel";

export const Infra: FC = (): JSX.Element => (
  <React.Fragment>
    <FeaturedImage src={"/bgImages/server4.png"} />
    <div className={"siteWrapper"}>
      <Navigation />

      <GlassPanel
        title={"Infrastructure"}
        subtitle={"Migrating to the Cloud: Strategies and Best Practices"}
      >
        By using freelance cloud engineers, you can save time and money while
        also increasing the efficiency and scalability of your operations. Our
        team of experts has the knowledge and experience needed to help you
        navigate the complex world of cloud computing and find the right
        solutions for your needs.
      </GlassPanel>

      <PanelWithImage
        imagePath={"/icons/docker.png"}
        imageAlt={"Docker"}
        title={"Docker"}
      >
        First, let's talk about Docker. By using Docker, you can package your
        applications and dependencies into a portable container, allowing you to
        run them consistently across different environments. This means that you
        can build your application once, and run it anywhere, without worrying
        about compatibility issues. This makes it much easier to move your
        application between development, staging, and production environments.
      </PanelWithImage>

      <PanelWithImage
        imagePath={"/icons/kubernetes.png"}
        imageAlt={"Kubernetes"}
        title={"Kubernetes"}
      >
        Next, let's talk about Kubernetes. Kubernetes is a powerful container
        orchestration system that makes it easy to deploy, scale, and manage
        containerized applications. With Kubernetes, you can automatically scale
        your application to meet demand, and self-heal in case of failures,
        which helps to ensure that your application is always available and
        performing at its best. Additionally, Kubernetes provides service
        discovery, which makes it easy for your application to communicate with
        other services, regardless of where they are running.
      </PanelWithImage>

      <PanelWithImage
        imagePath={"/icons/terraform.png"}
        imageAlt={"Terraform"}
        title={"Terraform"}
      >
        Finally, let's talk about Terraform. Terraform is an infrastructure as
        code tool that enables you to define your infrastructure in a simple and
        easy-to-read format. With Terraform, you can manage your entire
        infrastructure as code, version control it, and automate the
        provisioning, scaling and management of your infrastructure. It is
        cloud-agnostic, supports multiple providers, and can be integrated with
        Kubernetes to manage the cluster and the underlying resources.
      </PanelWithImage>

      <GlassPanel title={"Let us help you!"}>
        <p>
          When you combine Docker, Kubernetes, and Terraform, you get a powerful
          combination that can help you to develop, deploy, and manage your
          applications and underlying infrastructure in a more efficient and
          streamlined manner.{" "}
        </p>
        <p>
          We can help you to implement and orchestrate this combination to take
          full advantage of its benefits. We can assist you with the creation of
          Docker images, the deployment of your applications in containers, the
          management of those containers using Kubernetes and the management of
          the underlying infrastructure using Terraform. This can help you
          achieve a more efficient and streamlined development and deployment
          process and make it easier for you to focus on developing your
          application and not worrying about the underlying infrastructure.
        </p>
      </GlassPanel>
    </div>
  </React.Fragment>
);
