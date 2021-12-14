import StoreStyles from '@/styles/store.module.scss';
import Image from 'next/image';
import Sweets from '@/components/Sweets'
import { API_URL } from '@/config/index'
import React from 'react';
import { useMediaQuery } from 'react-responsive'

export default function Store(products) {
  const isBigScreen = useMediaQuery({ minWidth: 1824 })
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  /* const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const isRetina = useMediaQuery({ minResolution: '2dppx' }) */

    function renderRows(){
        let finalArr = [], columns = [];
        products.products.map((prod, i) => {
        
        // prepare the array
        if(isBigScreen || isDesktopOrLaptop){
            columns.push(
                <div key= {i +prod.id}className={StoreStyles.columns}>
                    <Sweets prod={prod}></Sweets> 
                </div>
            );
            // after three items add a new row   
            if((i+1) % 3 === 0) {
                finalArr.push(<div key= {i +prod.id} className={StoreStyles.row}>{columns}</div>);
                columns = [];
            }
            if((i+1) === products.products.length){
                finalArr.push(<div key={i +prod.id+ products.products.length} className ={StoreStyles.row}>{columns}</div>); 
                columns = []; 
            }
            }  
        if(isTabletOrMobile){
            columns.push(
                <div key= {i +prod.id}className="col-md-6">
                    <Sweets prod={prod}></Sweets> 
                </div>
            );
            // after three items add a new row   
            if((i+1) % 2 === 0) {
                finalArr.push(<div key= {i +prod.id} className ="row mt-6">{columns}</div>);
                columns = [];
            }
            if((i+1) === products.products.length){
                finalArr.push(<div key={i +prod.id+ products.products.length} className ="row mt-6">{columns}</div>); 
                columns = []; 
            }
            }  
        });
        return finalArr;
    }
      
        return (
        <div className={StoreStyles.bg}>
            <Image src='/backgrounds/Polkadots.svg' layout='fill' priority={true} objectFit='cover' alt="Background image of sweet treats" />
            <div className={StoreStyles.sections}>
                {renderRows()}
            </div>
        </div>
        );
    }
export async function getServerSideProps(){
    const res = await fetch(`${API_URL}/api/Cupcakes/`);
    const products = await res.json();
    return{
        props:{
            products
        },
        //Updates on this intervals every x seconds
        
    };
}