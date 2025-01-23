import "./AboutSection.css";
import cafe2 from '../../assets/cafe2.jpg'

export function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        <img
          src={cafe2}
          alt="Café e caderno"
          className="about-image"
        />
        <div className="about-text">
          <h2>SOBRE O CAFÉ AURORA</h2>
          <p>
            No coração da tradição e do sabor, o Café Aurora nasceu com uma missão simples: oferecer uma experiência única em cada xícara de café.
            Fundada por apaixonados pela arte cafeeira, nossa empresa combina técnicas tradicionais com inovações modernas para levar até você o melhor do café.
          </p>
          <p>
            Acreditamos que o café não é apenas uma bebida, mas um ritual que conecta pessoas, inspira momentos e transforma dias comuns em ocasiões especiais. É por isso que cuidamos de cada detalhe, desde a escolha dos grãos até o processo de torrefação, garantindo um sabor rico, aroma inconfundível e qualidade incomparável.
          </p>
          <p>
            Nossos grãos são selecionados manualmente das melhores plantações, cultivados de forma sustentável e com respeito ao meio ambiente. Trabalhamos lado a lado com pequenos produtores, valorizando suas histórias e promovendo o desenvolvimento local.
          </p>
        </div>
      </div>
    </section>
  );
}
