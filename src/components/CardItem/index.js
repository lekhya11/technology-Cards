import './index.css'

const CardsItem = props => {
  const {cardsDetails} = props
  const {title, description, imgUrl, className} = cardsDetails

  return (
    <li className={`${className} cards`}>
      <h1 className="heading"> {title}</h1>
      <p className="para">{description}</p>
      <img src={imgUrl} className="image" alt={title} />
    </li>
  )
}

export default CardsItem
