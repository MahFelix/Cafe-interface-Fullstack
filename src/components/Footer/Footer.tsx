import "./Footer.css";
import Insta from '../../assets/instagram.svg'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h4>Café Aurora</h4>
          <p>Tradicionalmente inovador, levando até você o melhor do café.</p>
        </div>
        <div className="footer-links">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#products">Produtos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Siga-nos</h4>
          <div className="social-icons">
        
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={Insta} alt="Instagram" />
            </a>
    
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Café Aurora. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
