import { NavLink } from 'react-router-dom'
import { navigationLinkActive } from '../../utils'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {

  return (
    <nav className={classes.header}>
      <ul className={classes.list}>
        <li>
          <NavLink className={navigationLinkActive} to="" end>Home</NavLink>
        </li>
        <li>
          <NavLink className={navigationLinkActive} to="products">Products</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation