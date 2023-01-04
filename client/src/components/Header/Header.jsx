import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header-wrapper">
      <Link to="/login" className="header-wrapper__logo logo">
        <img src="./img/Logo.svg" className="logo__img" alt="logo"></img>
      </Link>
      <div className="header-wrapper__menu menu-header">
        <Link to="/" className="menu-header__text">
          HOME +
        </Link>
        <Link to="/barbers" className="menu-header__text">
          BARBERS +
        </Link>
        <Link to="/blog" className="menu-header__text">
          BLOG +
        </Link>
        <Link to="/photo" className="menu-header__text">
          PHOTO +
        </Link>
        <Link to="/shop" className="menu-header__text">
          SHOP +
        </Link>
        <Link to="/contact" className="menu-header__text">
          CONTACT +
        </Link>
      </div>
      <div className="header-wrapper__user user-part">
        <Link to="/appointment" className="user-part__container user-information">
          <button className="user-information__btn" type="button">
            Book a haircut
          </button>
        </Link>
        <div className="user-part__container user-information">
          <ShoppingBasketIcon className="user-information__icon" />
          <p className="user-information__icon-number">0</p>
        </div>
      </div>
    </div>
  )
}

export default Header
