import { useState } from "react"
import { getBarbers } from "../../api/barber"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loadedBarbers } from "../../store/barbers/action"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [login, setLogin] = useState({ login: "", password: "" })

  const barberValidation = async () => {
    const result = await getBarbers()
    result.map((barber) => {
      if (barber.login === login.login && barber.password === login.password) {
        dispatch(loadedBarbers(barber))
        navigate("/enter")
      }
    })
  }

  return (
    <div className="flex">
      <p className="flex__text">If you a barber? Please, register!</p>
      <div className="App">
        <img
          src="./img/Logo.svg"
          className="logo"
          alt="Business view - Reports"
        />
        <form className="form">
          <div className="input-group">
            <label htmlFor="email">Login</label>
            <input
              type="text"
              name="login"
              value={login.login}
              onInput={(e) =>
                setLogin({
                  ...login,
                  login: e.target.value,
                })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              value={login.password}
              onInput={(e) =>
                setLogin({
                  ...login,
                  password: e.target.value,
                })
              }
            />
          </div>
          <button onClick={barberValidation} type="button" className="primary">
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
