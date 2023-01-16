import './App.scss'

function App() {

  return (
    <div className={'siteWrapper'}>
      <div className={'introContent'}>
        <div className="wrapper">
          <div className={'title'}>
            <h1>Working Title Technologies</h1>
            <h3>The Tech Whisperers of the Industry</h3>
          </div>

          <div className={'intro'}>
            <p>
              Welcome to Working Title Technologies, where senior developers, tech consultants and infrastructure specialists
              provide cutting-edge solutions to empower your business. With unmatched expertise, we deliver results that
              help your business thrive in today's digital world. Browse our website to learn more about our services.
            </p>
          </div>
          <button>Call Us!</button>
        </div>
      </div>
      <div className={'features'}>
        <div className="feature">
          <div className="heading">Senior Developers</div>
          <p>
            Our team of experienced senior developers provides expert software development services, ensuring that your
            projects are delivered to the highest standards.
          </p>
        </div>
        <div className="feature">
          <div className="heading">Infrastructure Specialists</div>
          <p>
            Our infrastructure specialists have the knowledge and expertise to design and implement robust and secure
            technology solutions to meet the specific needs of your business.
          </p>
        </div>
        <div className="feature">
          <div className="heading">Technology Consultancy</div>
          <p>
            We provide advice on the latest technologies and best practices. Our team will help you make informed
            decisions to take your business to the next level.
          </p>
        </div>
      </div>
      <div className="team">
        <div className="member">
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
            Gerard creates rapid prototypes and designs the architecture of software systems to meet client requirements.
            He provides guidance and mentoring to ensure software systems are scalable, reliable and secure.
          </div>
        </div>
        <div className="member">
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
            Rachid develops software utilizing several development methodologies and tools. He also provides guidance
            and mentoring to junior developers and participates in code reviews to ensure high quality software that
            meets industry standards.
          </div>
        </div>
        <div className="member">
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
            Christiaan is responsible for leading software development using Agile methodology. He facilitates the scrum process, manages sprint backlog, tracks progress, and identifies roadblocks. As a software engineer, he writes and reviews code, troubleshoots issues and participates in code reviews.
          </div>
        </div>
        <div className="member">
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
  )
}

export default App
