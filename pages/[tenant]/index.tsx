
import { GetServerSideProps } from 'next';
import Banner from '../../components/Banner';
import ProductItem from '../../components/productItem';
import SearchInput from '../../components/searchInput';
import { customUseApi } from '../../libs/useApi';
import styles from '../../styles/Home.module.css';


const Home = () => {

  function handleSearch(search: string) {
    console.log(search);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header} >
        <div className={styles.headerTop}>

          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle} >Seja Bem Vindo (a) </div>
            <div className={styles.headerSubTitle}> O Que deseja para hoje </div>
          </div>

          <div className={styles.headerTopRight}>
            <div className={styles.MenuButtom}>
              <div className={styles.menuButtomLine} ></div>
              <div className={styles.menuButtomLine} ></div>
              <div className={styles.menuButtomLine} ></div>
            </div>

          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput
            mainColor='#fb9400'
            onSearch={handleSearch}
          />
        </div>
      </header>

      <Banner />


      <div className={styles.grid}>
        <ProductItem
          data={{ id: 1, image: '/tmp/burger.png', categoryName: 'Tradicional', name: 'Texas Burger', price: 'R$ 25,50' }}
          mainColor='#fb9400'
          secundColor='#ccc'
        />
        <ProductItem
          data={{ id: 2, image: '/tmp/burger.png', categoryName: 'Tradicional', name: 'Texas Burger', price: 'R$ 25,50' }}
          mainColor='#fb9400'
          secundColor='#ccc'
        />
        <ProductItem
          data={{ id: 3, image: '/tmp/burger.png', categoryName: 'Tradicional', name: 'Texas Burger', price: 'R$ 25,50' }}
          mainColor='#fb9400'
          secundColor='#ccc'
        />


      </div>
    </div>
  );

}


export default Home;


export const getServerSideProps: GetServerSideProps = async (context) => {



  const { tenant: tenantSlug } = context.query;

  const api = customUseApi();

  // GET TENANT

  const tenant = await api.getTenant(tenantSlug as string);
  if (!tenant) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      tenant
    }
  }
} 
