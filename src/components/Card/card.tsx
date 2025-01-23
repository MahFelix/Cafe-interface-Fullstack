import "./card.css"

interface CardProps {
    price: number;
    title: string;
    image: string;
}

export function Card({ price, image, title }: CardProps) {
    // Função para decidir aleatoriamente se o card vai ter tags
    const showTags = Math.random() > 0.5; // 50% de chance de mostrar as tags

    return (
        <div className="card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p><b>Valor : R$ </b>{price}</p>
            {/* Condicional para exibir tags aleatoriamente */}
            {showTags && (
                <div className="tags">
                    <span className="tag">Novo</span>
                    <span className="tag">Promoção</span>
                </div>
            )}
        </div>
    );
}
