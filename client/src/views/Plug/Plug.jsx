import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { fetchVisits } from "../../store/visits/action"

const Plug = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchVisits())
  })

  return (
    <div className="plug-container">
      <p className="plug-container__welcome">Welcome to cabinet</p>
      <Link to="/barbersschedule" className="plug-container__enter">
        Press here to enter
      </Link>
    </div>
  )
}

export default Plug
