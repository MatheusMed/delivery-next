import Link from 'next/link';
import { Product } from '../../types/Product';
import styles from './style.module.css';
import Image from 'next/image';
type Props = {
  data: Product;
  mainColor: string;
  secundColor: string;
}

const ProductItem = ({ data, mainColor, secundColor }: Props) => {
  return (
    <Link href={`/api/product/${data.id}`} >
      <a className={styles.container}>
        <div className={styles.head} style={{ backgroundColor: secundColor }} ></div>
        <div className={styles.info}>

          <div className={styles.img} >
            <img src={data.image} alt='' />
          </div>

          <div className={styles.catName}>{data.categoryName}</div>
          <div className={styles.name}>{data.name}</div>
          <div className={styles.price} style={{ color: mainColor }}>{data.price}</div>

        </div>
      </a>
    </Link>
  );
}


export default ProductItem;