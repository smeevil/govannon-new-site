import Styles from './styles.module.scss'
import {FC} from 'react'

export const Hero: FC = (): JSX.Element => (
  <div className="flex one">
    <div className={'glassPanel'}>
      <h1>Govannon</h1>
      <h3>The Tech Whisperers of the Industry</h3>
      <p>
        Welcome to Govannon, where senior developers, tech consultants and infrastructure specialists
        provide cutting-edge solutions to empower your business. With unmatched expertise, we deliver results
        that
        help your business thrive in today's digital world. Browse our website to learn more about our services.
      </p>
      <button>Call Us!</button>
    </div>
  </div>
)