import ImageSlider from "../../components/ImageSlider/ImageSlider"

const Photo = () => {
  const SliderData = [
    {
      image: "./img/gallery/gallery-3.PNG",
    },
    {
      image: "./img/gallery/gallery-4.PNG",
    },
    {
      image: "./img/gallery/gallery-5.PNG",
    },
  ]
  return (
    <div>
      <ImageSlider slides={SliderData} />
    </div>
  )
}

export default Photo
