import React, {FC} from 'react'
import {Navigation} from '../../Components/Navigation'
import './styles.scss'
import {FeaturedImage} from '../../Components/FeaturedImage'

export const Consultancy: FC = (): JSX.Element => (
  <React.Fragment>
    <FeaturedImage src={'/bgImages/consultancy.png'}/>
    <div className={'siteWrapper'}>

      <Navigation/>
      <div className="verticalCentered">
        <div className="flex one">
          <div className="glassPanel panelBottomSpacing">
            <h1>Consultancy </h1>
            <p>Our consultancy services can help you improve the quality of your existing software, increase developer
              productivity and bring your current software infrastructure to a new level. Our team of experts can
              provide
              tailored solutions for quality assurance, CI/CD, and agile development. We can help you identify and
              eliminate pain points in your current software development process, increase the quality of your software,
              and improve the overall performance of your applications. We can also train the teams about using modern
              methodologies such as Scrum and Kanban, which can help you deliver software faster and with more
              predictability.</p>
            <p>Additionally, we can help you modernize your infrastructure and move to the cloud using technologies like
              Terraform. We have the expertise and experience to help you achieve better scalability, performance, and
              cost savings. Our services can help you create a more collaborative and efficient development environment,
              which can increase developer productivity and overall satisfaction. Contact us today to schedule a
              consultation with one of our experts and take your software development to the next level.</p>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)