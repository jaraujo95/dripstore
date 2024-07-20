import '../pages/Home.css'
import Destaques from '../components/Destaques.jsx'
import Header from '../components/Header.jsx';
import ProductListing from '../components/ProductListing.jsx';

function Home() {
  return (
    <div className='body'>
      <Header/>
      <section className="section mt-10">
        <div>HERO</div>
      </section>

      <div className='w-full bg-slate-100'>  
        <section className='section'>
          <div>COLECAO</div>
        </section>
        <section className=' mt-10'>
          <Destaques />
        </section>
        <section className=' mt-10'>
          <ProductListing/>
        </section>
      </div>

      <footer className="footer">
        <div>FOOTER</div>
      </footer>
    </div>
  );
}
      
export default Home
