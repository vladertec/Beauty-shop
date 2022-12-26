const SubscribeEmail = () => {
  return (
    <section className="email">
      <h2 className="email__title">Subscribe Our Newslatter</h2>
      <div className="email__input input-block">
        <input
          className="text-field__input"
          type="email"
          placeholder="Email"
          maxLength="22"
          required
        ></input>
        <button className="input-block__btn">SUBSCRIBE</button>
      </div>
    </section>
  )
}

export default SubscribeEmail
