import './styles.scss'

export const Navigation: React.FC = ():JSX.Element => (
  <nav>

    <a href="#" className="brand">Govannon</a>
    <input id="bmenub" type="checkbox" className="show"/>
    <label htmlFor="bmenub" className="burger pseudo button">&#8801;</label>

    <div className="menu">
      <a href="#">Developers</a>
      <a href="#">Infra</a>
      <a href="#">Consultancy</a>
      <a href="#">Contact</a>
    </div>
  </nav>
)