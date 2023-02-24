export const SmallProductItem = ({ product }) =>{
    const { name , price } = product

    return (
        <p>Name: {name}, Price: {price} euros</p>
    )
}