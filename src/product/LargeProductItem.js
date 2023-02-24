export const LargeProductItem = ({ product }) => {

    const { name, price, description, rating } = product

    return (
        <>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>Description : {description}</p>
            <h3>Average rating : {rating} </h3>

        </>

    )
}