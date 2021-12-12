import React from 'react'
import ProductStyles from '@/styles/product.module.scss'
import Link from 'next/link'

function Sweets({prod}) {
    let Avail;
    const dollar = '$';
    if (prod.Availability === 'Available') {

        Avail = <h2 className={ProductStyles.Availability_Available}>In Stock</h2>

    } else if (prod.Availability === 'Unavailable'){

        Avail = <h2 className={ProductStyles.Availability_NotAvailable}>Out of Stock</h2>

    } else if (prod.Availability === 'Coming Soon'){

        Avail = <h2 className={ProductStyles.Availability_Comingsoon}>Coming Soon</h2>
    }

    return (
        <div className={ProductStyles.product_section}>
            <div className={ProductStyles.flex_container}>
                <div className={ProductStyles.Image_flex_container}>
                    <Link href={`/store/${prod.slug}`}><img  className={ProductStyles.image} src={prod.Photo}/></Link>
                </div>
                <div className={ProductStyles.Center_flex_container}>
                    <div className={ProductStyles.name_and_details}>
                        <ul>
                        <li><Link href={`/store/${prod.slug}`}><h2>{prod.Product_name}</h2></Link></li>
                        <li><p>{prod.Description}</p></li>
                        <li><Link href={`/store/${prod.slug}`}><a className='btn'>Details</a></Link></li>
                        </ul>
                    </div>
                </div>
            <div className={ProductStyles.button_container}>
            <ul>
                <li>{Avail}</li>
                <li><h2>{dollar}{prod.Price}</h2></li>
                <li><button>Add to cart</button></li>
            </ul>
            </div>
            </div>
        </div>
        
    )
}

export default Sweets;