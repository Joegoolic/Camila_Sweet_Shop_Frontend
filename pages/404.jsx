import {FaExclamationTriangle} from 'react-icons/fa'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.scss'
export default function NotFoundPage() {
    return (
        <div className={styles.error}>
            <h1><FaExclamationTriangle/></h1>
            <h1>404</h1>
            <h4>Are you lost?</h4>
            <Link href='/'>Go back Home</Link>
        </div>
    )
}