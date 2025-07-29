import "./Pagignation.css"
const CardComponent = ({ image, title }) => {

    return <div className="product-card">
        <img className="product-image" src={image} alt={title} />
        <span className="product-title">{title}</span>
    </div>
}
export default CardComponent