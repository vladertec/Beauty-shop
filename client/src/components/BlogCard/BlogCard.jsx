const BlogCard = ({ photoPath, date, title, description }) => {
  return (
    <div className="blog-card">
      <div className="blog-card__photo-container card-photo">
        <img className="card-photo__img" src={photoPath} alt="blogPhoto" />
      </div>
      <div className="blog-card__text-container card-info">
        <p className="card-info__date">{date}</p>
        <h3 className="card-info__title">{title}</h3>
        <p className="card-info__description">{description}</p>
      </div>
    </div>
  )
}

export default BlogCard
