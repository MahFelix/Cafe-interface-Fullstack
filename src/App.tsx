import { Key } from 'react';
import { useState } from 'react'
import './App.css'
import { Card } from './components/Card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/Create-Modal/createModal';
import Header from './components/Header/Header'
import CAFE from './assets/cafés.png'
import { AboutSection } from './components/About/AboutSections';
import { Footer } from './components/Footer/Footer';



function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false)  

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className='container'>
      <Header/>
      <h1 className='titulo'>Nós entregamos nada menos<br></br> que a melhor experiência de café</h1>
      <img src={CAFE} className='imginit'></img>
      <h2 className='subtitulo'> Nosso cardápio </h2>
      <div className='card-grid'>
      {data?.map((foodData: { id: Key | null | undefined; price: number; title: string; image: string; }) => (
          <Card 
            key={foodData.id} // Adicionando a chave (key) para cada card
            price={foodData.price} 
            title={foodData.title} 
            image={foodData.image}
          />
        ))}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}>Cadastrar Novo item</button>
      <AboutSection/>
      <Footer/>
    </div>
  )
}

export default App;


