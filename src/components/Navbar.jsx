import { useEffect, useState } from 'react';

export const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`mb-auto fixed-top navbar-scroll ${scrolled ? 'scrolled' : ''}`}>
    <div className='container'>
      <div className='img-container mx-5'>
        <img src='' className="float-md-start mb-0 img-navbar" />
      </div>
      <nav className="nav justify-content-center float-md-end gap-3 mx-5 nav-masthead">
        <a className="link-light link-opacity-75-hover text-decoration-none text-uppercase" aria-current="page" href="#">Inicio</a>
        <a className="link-light link-opacity-75-hover text-decoration-none text-uppercase" href="#">Nosotros</a>
        <a className="link-light link-opacity-75-hover text-decoration-none text-uppercase" href="#">Clientes</a>
      </nav>
    </div>
  </header>
  )
}
