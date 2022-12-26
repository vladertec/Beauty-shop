function StatisticBox(props) {
  const { imgPath, number, name } = props
  return (
    <div className="statistic-card">
      <div className="statistic-card__img icon">
        <img className="icon__img" src={imgPath} alt={name}></img>
      </div>
      <div className="statistic-card__info info-statistic">
        <p className="info-statistic__number">{number}</p>
        <p className="info-statistic__name">{name}</p>
      </div>
    </div>
  )
}

export default StatisticBox
