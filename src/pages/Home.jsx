import '../pages/Home.css'
import Destaques from '../components/Destaques.jsx'
import Header from '../components/Header.jsx';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

function Home() {
  return (
    <div className='body'>
      <Header/>

      <section className="ignore-padding section">
        <div>HERO</div>
      </section>

      <section className='section'>
        <div>COLECAO</div>
      </section>

      <section className='section'>
        <div>PRODUTOS</div>
      </section>

      <section>
        <Destaques />
      </section>

      <footer className="footer ignore-padding">
        <div>FOOTER</div>
      </footer>
    </div>
  );
}
      
export default Home
