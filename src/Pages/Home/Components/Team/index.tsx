import Styles from "./styles.module.scss";
import React from "react";
import { TeamMember } from "../TeamMember";

export const Team: React.FC = (): JSX.Element => (
  <div className={Styles.team}>
    <h3>The team</h3>
    <div className="flex one two-1200 three-1600 center">
      <TeamMember
        name={"Gerard de Brieder"}
        title={"Rapid proto-typer and Software Architect"}
        imagePath={"/team/brieder.jpeg"}
      >
        Gerard creates rapid prototypes and designs the architecture of software
        systems to meet client requirements. He provides guidance and mentoring
        to ensure software systems are scalable, reliable and secure.
      </TeamMember>

      <TeamMember
        name={"Rachid Al Maach"}
        title={"Software Engineer and SSO"}
        imagePath={"/team/rachid.jpeg"}
      >
        Rachid develops software utilizing several development methodologies and
        tools. He also provides guidance and mentoring to junior developers and
        participates in code reviews to ensure high quality software that meets
        industry standards.
      </TeamMember>

      <TeamMember
        name={"Christiaan van Bemmel"}
        title={"Software Engineer and Scrum Master"}
        imagePath={"/team/bemmel.jpeg"}
      >
        Christiaan is responsible for leading software development using Agile
        methodology. He facilitates the scrum process, manages sprint backlog,
        tracks progress, and identifies roadblocks. As a software engineer, he
        writes and reviews code, troubleshoots issues and participates in code
        reviews.
      </TeamMember>
      <TeamMember
        name={"Mark"}
        title={"Senior Developer"}
        imagePath={"/team/kampstra.jpeg"}
      >
        Mark designs, implements and maintains cloud-based solutions to align
        with organization's goals, troubleshoot and optimize systems, and ensure
        security and compliance of the cloud infrastructure.
      </TeamMember>

      <TeamMember
        name={"Wes Oldenbeuving"}
        title={"Ruby specialist"}
        imagePath={"/team/wes.png"}
      >
        Wes is a Ruby specialist with extensive experience in building and
        maintaining complex (web) applications. He has a deep understanding of
        the Ruby programming language and loves to solve the most intricate
        problems.
      </TeamMember>

      <TeamMember
        name={"Yassine Benhadi"}
        title={"Frontend and App Developer"}
        imagePath={"/team/yassine.jpeg"}
      >
        Yassine is a skilled frontend web and app developer. He is proficient in
        creating responsive and user-friendly interfaces for a wide range of
        applications, and has a solid understanding of web and app design
        principles.
      </TeamMember>
    </div>
  </div>
);

//
