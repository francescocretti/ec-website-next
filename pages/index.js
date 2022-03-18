import EcLogo from '../components/EcLogo';
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <EcLogo width={800} height={500} color="#000" />

      </main>
    </div>
  );
};

export default Home;