import StoreStyles from '../../styles/store.module.scss';
import Image from 'next/image';
import Sweets from '@/components/Sweets'
import { API_URL } from '@/config/index'

export default function Store(products) {
    return (
        <div className={StoreStyles.bg}>
            <Image src='/backgrounds/Polkadots.svg' layout='fill' priority={true} objectFit='cover' alt="Background image of sweet treats" />
            <div className={StoreStyles.sections}>
                {products && products.products.map((prod) => (
                    <Sweets key={prod.id} prod={prod}/>
                ))}
            </div>
        </div>
    )
}
export async function getServerSideProps(){
    const res = await fetch(`${API_URL}/api/Products/`)
    const products = await res.json();
    return{
        props:{products},
    };
}