import LogoBrands from "../../components/LogoBrands/LogoBrands"

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="blog-section__photo img">
        <img
          className="img__blog"
          src="./img/contact/map.png"
          alt="mapPicture"
        />
      </section>

      <section className="contact-container__help contact-help">
        <div className="contact-help__container contact-us">
          <p className="contact-us__text">Contact Us</p>
          <h3 className="contact-us__title">
            Need Yor any help Contact with Us
          </h3>
          <div className="help-block first">
            <div className="help-block__icon help-icon">
              <img
                className="help-icon__img"
                src="./img/contact/mobile.svg"
                alt="mobilePhone"
              />
            </div>
            <div className="help-block__text help-text">
              <p className="help-text__title">Emargency Help</p>
              <p className="help-text__info">+123 ( 458 ) 896 895</p>
            </div>
          </div>
          <div className="help-block">
            <div className="help-block__icon help-icon">
              <img
                className="help-icon__img"
                src="./img/contact/email.svg"
                alt="Email"
              />
            </div>
            <div className="help-block__text help-text">
              <p className="help-text__title">Quick Email!</p>
              <p className="help-text__info">Support@gamil.com</p>
            </div>
          </div>
          <div className="help-block">
            <div className="help-block__icon help-icon">
              <img
                className="help-icon__img"
                src="./img/contact/location.svg"
                alt="locaction"
              />
            </div>
            <div className="help-block__text help-text">
              <p className="help-text__title">Office Address</p>
              <p className="help-text__info">66W3+Q4G Buxton, United Kingdom</p>
            </div>
          </div>
        </div>

        <form className="contact-help__send-message message" >
          <h3 className="message__title">Send Message</h3>
          <div className="message__line"></div>
          <div className="message__input-block input-information">
            <input
              className="input-information__input"
              type="text"
              placeholder="Name"
              name="name"
            ></input>
            <input
              className="input-information__input"
              type="text"
              placeholder="Surname"
              name="surname"
            ></input>
            <input
              className="input-information__input"
              type="email"
              placeholder="Email"
              name="email"
            ></input>
            <input
              className="input-information__input"
              type="text"
              placeholder="Message"
              name="message"
            ></input>
          </div>
          <button className="message__btn">Send Message</button>
        </form>
      </section>

      <LogoBrands />
    </div>
  )
}

export default Contact
