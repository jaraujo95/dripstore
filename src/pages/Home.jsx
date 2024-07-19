import '../pages/Home.css'
import Destaques from '../components/Destaques.jsx'
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

function Home() {
  return (
    <div className='body'>
      <header className='header'>
        <h1>Dripstore</h1>
        <div>
        <ArrowRight/>
          NAV
        <ArrowLeft/>
        </div>
      </header>

      <section className="ignore-padding section">
        <div>HERO</div>
      </section>

      <section className='section'>
        <div>COLECAO</div>
      </section>

      <section className='section'>
        <div>PRODUTOS</div>
      </section>

      <section className='section'>
        <div>DESTAQUES</div>
        <Destaques />
      </section>

      <footer className="footer ignore-padding">
        <div>FOOTER</div>
      </footer>
    </div>
  );
}
      
export default Home
