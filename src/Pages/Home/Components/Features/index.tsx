import Styles from './styles.module.scss'
import {FC} from 'react'

export const Features: FC = (): JSX.Element => (
  <div className={Styles.features}>
    <h3>How can we help?</h3>
    <div className="flex one two-800 three-1000 center">
      <div className={Styles.featureWrapper}>
        <div className={"glassPanel equalHeight"}>
          <h3>Senior Developers</h3>
          <p>
            Our team of experienced senior developers provides expert software development services, ensuring that
            your
            projects are delivered to the highest standards.
          </p>
        </div>
      </div>
      <div className={Styles.featureWrapper}>
        <div className={"glassPanel equalHeight"}>
          <h3>Infrastructure Specialists</h3>
          <p>
            Our infrastructure specialists have the knowledge and expertise to design and implement robust and
            secure
            technology solutions to meet the specific needs of your business.
          </p>
        </div>
      </div>
      <div className={Styles.featureWrapper}>
        <div className={"glassPanel equalHeight"}>
          <h3>Technology Consultancy</h3>
          <p>
            We provide advice on the latest technologies and best practices. Our team will help you make informed
            decisions to take your business to the next level.
          </p>
        </div>
      </div>
    </div>
  </div>
)