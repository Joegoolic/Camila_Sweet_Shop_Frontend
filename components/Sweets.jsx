/* eslint-disable @next/next/link-passhref */
import { useDispatch } from "react-redux";
import { add_to_cart } from "../actions/cart";
import ProductStyles from "@/styles/product.module.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Link from "next/link";
import { urlchanger } from "../helpers";
import Image from "next/image";

function Sweets({ prod }) {
  let Avail;
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
  if (prod.Availability === "Available") {
    Avail = <h3 className={ProductStyles.Availability_Available}>In Stock</h3>;
  } else if (prod.Availability === "Unavailable") {
    Avail = (
      <h3 className={ProductStyles.Availability_NotAvailable}>Out of Stock</h3>
    );
  } else if (prod.Availability === "Coming Soon") {
    Avail = (
      <h3 className={ProductStyles.Availability_Comingsoon}>Coming Soon</h3>
    );
  }
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
    <div className={ProductStyles.product_section}>
      <ToastContainer style={{ top: "10vh" }}/>
      <div className={ProductStyles.flex_container}>
        <div className={ProductStyles.top_flex_container}>
          <div className={ProductStyles.Image_flex_container}>
            <Link href={`/store/${prod.slug}`}>
            <img className={ProductStyles.image} src={urlchanger(prod.Photo)} alt='A Tasty Treat' />        
            </Link>
          </div>
          <div className={ProductStyles.name_and_details}>
            <ul>
              <li>
                <Link href={`/store/${prod.slug}`}>
                  <h2>{prod.Product_name}</h2>
                </Link>
              </li>
              <li>
                <p>{prod.Description}</p>
              </li>
              <li>
                <Link href={`/store/${prod.slug}`}>
                  <a className="btn">Details</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={ProductStyles.bottom_flex_container}>
          <div className={ProductStyles.button_container}>
            {Avail}
            <h2 className={ProductStyles.Price}>
              {dollar}{prod.Price}
            </h2>
              {button}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sweets;
