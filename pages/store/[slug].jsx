import { API_URL } from '@/config/index'
import IndiStyles from '@/styles/individual.module.scss'
import { urlchanger } from "@/helpers/index";
import { useDispatch } from "react-redux";
import { add_to_cart } from "@/actions/cart";
import ProductStyles from "@/styles/product.module.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function ProductPage({prod}) {
    const dollar = "$";
    const dispatch = useDispatch();
    const onClick = (e) => {
        e.preventDefault();
        let prodId ='';
        prodId=prod.id;
        if (dispatch && dispatch !== null && dispatch !== undefined) {
          dispatch(add_to_cart(prodId));
          toast.success(`${prod.Product_name} added to cart!`)
        }
      };
    let button;
    if (prod.Availability === "Available") {
        button = (
        <button className={ProductStyles.Available} onClick={onClick}>Add to cart</button>
        )
    } else if (prod.Availability === "Unavailable") {
        button = (
        <h3 className={ProductStyles.Unavailable}>Sorry This Item Is Unavailable</h3>
        );
    } else if (prod.Availability === "Coming Soon") {
        button = (
        <h3 className={ProductStyles.Coming_soon}>Coming soon</h3>
        );
    }
    
    return (
        <div className={IndiStyles.product_section_outer}>
            <ToastContainer style={{ top: "10vh" }}/>
            <div className={IndiStyles.product_section_inner}>
                <div className={IndiStyles.product_section_top}>
                    <div className={IndiStyles.product_section_top_left}>
                        {/* <img src={urlchanger(prod.Photo)} alt= 'A photo of sweets'/> */}
                        <img src={prod.Photo} alt= 'A photo of sweets'/>
                    </div>
                    <div className={IndiStyles.product_section_top_mid}>
                        <h3>
                            <ul>
                                <h2>Ingredients</h2>
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
                        {button}
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
