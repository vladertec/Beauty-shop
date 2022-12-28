import React from "react"
import { Formik } from "formik"
import { Link } from "react-router-dom"

const Appointment = () => {
  return (
    <div className="appointment-container">
      <p className="appointment-container__title">
        Make a visit to our barbershop
      </p>
      <Formik
        initialValues={{
          date: "",
          time: "",
          service: { nameService: "" },
          client: { name: "", surname: "", phone: "" },
        }}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email = "Required"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address"
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            className="appointment-container__form book-form"
            onSubmit={handleSubmit}
          >
            <input
              className="book-form__input"
              placeholder="Name"
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              className="book-form__input"
              placeholder="Surname"
              type="surname"
              name="surname"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && errors.password}
            <input
              className="book-form__input"
              placeholder="Mobile Phone"
              type="phone"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && errors.password}

            <select className="book-form__input">
              <option value="grapefruit">Haircut long hair 30$</option>
              <option value="lime">Haircut fade 25$</option>
              <option value="coconut">Haircut beard 10$</option>
              <option value="mango">Haircut with a machine 15$</option>
              <option value="mango">Head camouflage 25$</option>
              <option value="mango">Сhildren's haircut 35$</option>
            </select>

            <select className="book-form__input">
              <option value="grapefruit">Vladik Sarnavskyi</option>
              <option value="lime">Alina Levchenko</option>
              <option value="coconut">Yurii Podnemesovс</option>
              <option value="mango">Kornaga Yaroslav</option>
            </select>
            
            <input
              className="book-form__input"
              type="date"
              name="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <input
              className="book-form__input"
              type="time"
              name="time"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <Link
              to="/appointment/success"
              className="book-form__btn"
              type="submit"
              disabled={isSubmitting}
            >
              Send booking
            </Link>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Appointment
