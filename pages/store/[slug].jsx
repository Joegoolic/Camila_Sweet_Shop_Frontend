import { API_URL } from '@/config/index'
import IndiStyles from '@/styles/individual.module.scss'
export default function ProductPage({prod}) {
    return (
        <div className={IndiStyles.product_section_outer}>
            <div className={IndiStyles.product_section_inner}>
                <div className={IndiStyles.product_section_top}>
                    <div className={IndiStyles.product_section_top_left}>
                        <img src={prod.Photo}/>
                    </div>
                    <div className={IndiStyles.product_section_top_mid}>
                        <h3>
                            <ul><h2>Ingredients</h2>
                                <li>Flour</li>
                                <li>Strawberrys</li>
                                <li>Egg</li>
                                <li>Frosting</li>
                            </ul>
                        </h3>
                    </div>
                    <div className={IndiStyles.product_section_top_right}>
                        <h2>{prod.Product_name}</h2>
                        <h2>{prod.Availability}</h2>
                        <h2>{prod.Price}</h2>
                        <button>Add to cart</button>
                    </div>
                </div>
                <div className={IndiStyles.product_section_mid}>
                    
                </div>
            </div>  
        </div> 
    )
}
export async function getServerSideProps({query:{slug}}) {
    const res = await fetch(`${API_URL}/api/${slug}/`);
    const prod = await res.json();

    return{
        props:{prod}
    }
}

{/* <h2>{prod.Product_type}</h2> */}
{/* <h2>{prod.slug}</h2> */}