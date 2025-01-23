import { useEffect, useState } from "react";
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
import { FoodData } from '../../Interface/FoodData';
import "./modal.css";

interface InputProps {
    label: string;
    value: string | number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateValue(value: any): void;
    error?: string;
}

const Input = ({ label, value, updateValue, error }: InputProps) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input
                value={value}
                onChange={e => updateValue(e.target.value)}
                className={error ? 'input-error' : ''}
            />
            {error && <small className="error-message">{error}</small>}
        </div>
    );
};

interface ModalProps {
    closeModal(): void;
}

export function CreateModal({ closeModal }: ModalProps) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess, isPending } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image,
        };
        mutate(foodData);
    };

    useEffect(() => {
        if (!isSuccess) return;
        closeModal();
    }, [isSuccess]);

    return (
        <div className="modal-overflow">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input
                        label="Título"
                        value={title}
                        updateValue={(val) => setTitle(String(val))}
                    />
                    <Input
                        label="Preço"
                        value={price}
                        updateValue={(val) => setPrice(Number(val))}
                    />
                    <Input
                        label="Imagem"
                        value={image}
                        updateValue={(val) => setImage(String(val))}
                    />
                </form>
                <div className="button-container">
                    <button onClick={submit} className="btn-secondary">
                        {isPending ? "Postando..." : "Postar"}
                    </button>
                    <button onClick={closeModal} className="btn-close">
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}
