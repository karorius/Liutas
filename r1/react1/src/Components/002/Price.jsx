
export default function Price({ productPrice,discount = 0 } ) {

    // const { color, productPrice } = props;

    console.log(productPrice, color, show);

    const vat = productPrice / 100 * 21;

    return (
        <div><span>Price:</span>
            {
                discount === 0
                    ?
                    <b>{productPrice} Eur</b>
                    :
                    <>
                        <b style={{ textDecoration: 'line-through' }}>{productPrice} Eur</b>
                        <b>{productPrice - discount} Eur</b>
                    </>
            }
        </div>)}