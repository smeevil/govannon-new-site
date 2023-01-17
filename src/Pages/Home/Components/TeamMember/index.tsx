import Styles from '../Team/styles.module.scss'
import {FC, ReactNode} from 'react'

export interface ITeamMemberProps {
  name: string
  title: string
  imagePath: string
  children: ReactNode
}

export const TeamMember: FC<ITeamMemberProps> = ({name, title, imagePath, children}): JSX.Element => (
  <div className={Styles.member}>
    <div className={'glassPanel equalHeight'}>
      <div className={Styles.container}>
        <div className={Styles.avatar}>
          <img alt="Avatar of Mark" src={imagePath}/>
        </div>
        <div className={Styles.intro}>
          <div className={Styles.name}>{name}</div>
          <div className={Styles.title}>{title}</div>
        </div>
      </div>
      <div className={Styles.description}>
        {children}
      </div>
    </div>
  </div>
)