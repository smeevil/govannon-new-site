import './styles.scss'

export const Team: React.FC = (): JSX.Element => (
  <div className="team">
    <h3>The team</h3>
    <div className="flex one two-1000 three-1600 center">
      <div className="member">
        <div className="memberWrapper">
          <div className="container">
            <div className="avatar">
              <img alt="Avatar of Gerard" src="/brieder.jpeg"/>
            </div>
            <div className="intro">
              <div className="name">Gerard de Brieder</div>
              <div className="title">Rapid proto-typer and Software Architect</div>
            </div>
          </div>
          <div className="description">
            Gerard creates rapid prototypes and designs the architecture of software systems to meet client
            requirements.
            He provides guidance and mentoring to ensure software systems are scalable, reliable and secure.
          </div>
        </div>
      </div>
      <div className="member">
        <div className="memberWrapper">
          <div className="container">
            <div className="avatar">
              <img alt="Avatar of Rachid" src="/rachid.jpeg"/>
            </div>
            <div className="intro">
              <div className="name">Rachid Al Maach</div>
              <div className="title">Software Engineer and SSO</div>
            </div>
          </div>
          <div className="description">
            Rachid develops software utilizing several development methodologies and tools. He also provides
            guidance
            and mentoring to junior developers and participates in code reviews to ensure high quality software
            that
            meets industry standards.
          </div>
        </div>
      </div>
      <div className="member">
        <div className="memberWrapper">
          <div className="container">
            <div className="avatar">
              <img alt="Avatar of Christiaan" src="/bemmel.jpeg"/>
            </div>
            <div className="intro">
              <div className="name">Christiaan van Bemmel</div>
              <div className="title">Software Engineer and Scrum Master</div>
            </div>
          </div>
          <div className="description">
            Christiaan is responsible for leading software development using Agile methodology. He facilitates the
            scrum
            process, manages sprint backlog, tracks progress, and identifies roadblocks. As a software engineer,
            he
            writes and reviews code, troubleshoots issues and participates in code reviews.
          </div>
        </div>
      </div>
      <div className="member">
        <div className="memberWrapper">
          <div className="container">
            <div className="avatar">
              <img alt="Avatar of Mark" src="/kampstra.jpeg"/>
            </div>
            <div className="intro">
              <div className="name">Mark Kampstra</div>
              <div className="title">Software Engineer and Cloud architect</div>
            </div>
          </div>
          <div className="description">
            Mark designs, implements and maintains cloud-based solutions to align with organization's goals,
            troubleshoot and optimize systems, and ensure security and compliance of the cloud infrastructure.
          </div>
        </div>
      </div>
    </div>
  </div>
)