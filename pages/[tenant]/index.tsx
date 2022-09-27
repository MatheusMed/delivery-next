
import SearchInput from '../../components/searchInput';
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
    </div>
  );

}


export default Home;
