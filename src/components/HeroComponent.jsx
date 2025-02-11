import from '../styles/HeroComponent.css';

const HeroComponent = () => {
  return (
    <section className="sectionBackground">
      <div className="navLinks">
        <a href="#">ACERCA DE</a>
        <a href="#">CONTACTOS</a>
        <a href="#">DIRECCIÓN</a>
      </div>
      <div className="textContainer">
        <h1>Café Charlotte</h1>
      </div>
      <button id="menuButton" className="menuButton">
        Menú
      </button>
    </section>
  );
};

export default HeroComponent;