const Products = ({ image, title, price, description }) => {
    return (
        <>
            <img src={image} alt={title} className="image" />
            <p className="title">{title}</p>
            <p className="price">Price: ${price}</p>
            <p className="description">{description}</p>
        </>

    )
}
export default Products;