import { Link } from "react-router-dom"

const Success = () => {
  return (
    <div className="success-container">
      <p className="success-container__title">Thanks you for your reservation</p>
      <Link to="/" className="success-container__link">Go to the homepage</Link>
    </div>
  )
}

export default Success
