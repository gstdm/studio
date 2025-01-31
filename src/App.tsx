import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="flex-grow relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Studio Jeise Lashes: Realce Seu Olhar
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Transforme seu olhar e autoestima com o design de cílios do Studio Jeise Lashes. Cílios alongados e naturais para um estilo único.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/#modelos"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-pink-600 hover:bg-pink-700 transition-all duration-200 shadow-lg shadow-pink-500/30"
              >
                Ver Modelos de Cílios
              </a>
              <a
                href="/#agendamento"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gray-600 hover:bg-gray-700 transition-all duration-200"
              >
                Agende Agora
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Vantagens */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Descubra as Vantagens do Design de Cílios
          </h2>

          {/* Benefício 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12">
            <img
              src="https://i.ibb.co/VqHRLjg/Remove-bg-ai-1737834159090.png"
              alt="Aumente sua autoestima"
              className="w-full md:w-2/3 mx-auto rounded-lg shadow-md"
            />
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800">
                Aumente Sua Autoestima
              </h3>
              <p className="text-gray-500 mt-2">
                Realce sua beleza e autoestima com cílios alongados e naturais. Um design personalizado proporciona um olhar marcante, fazendo você se sentir ainda mais confiante.
              </p>
            </div>
          </div>

          {/* Benefício 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12">
            <img
              src="https://i.ibb.co/Htz4FQ5/Remove-bg-ai-1737810716652.png"
              alt="Design Personalizado"
              className="w-full md:w-2/3 mx-auto rounded-lg shadow-md"
            />
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800">
                Design Personalizado para Você
              </h3>
              <p className="text-gray-500 mt-2">
                Cada pessoa tem um estilo único. Por isso, personalizamos o alongamento de cílios conforme o formato do seu rosto, realçando sua beleza natural de forma exclusiva.
              </p>
            </div>
          </div>

          {/* Benefício 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12">
            <img
              src="https://i.ibb.co/MBmPRYg/Remove-bg-ai-1737834145392.png"
              alt="Praticidade e Conforto"
              className="w-full md:w-2/3 mx-auto rounded-lg shadow-md"
            />
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800">
                Praticidade e Conforto
              </h3>
              <p className="text-gray-500 mt-2">
                Cílios impecáveis sem a necessidade de máscara de cílios todos os dias. Aproveite um visual sempre perfeito com um procedimento simples e confortável.
              </p>
            </div>
          </div>

          {/* Benefício 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12">
            <img
              src="https://i.ibb.co/58kM5zD/Remove-bg-ai-1737834141576.png"
              alt="Durabilidade e Beleza"
              className="w-full md:w-2/3 mx-auto rounded-lg shadow-md"
            />
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800">
                Durabilidade e Beleza
              </h3>
              <p className="text-gray-500 mt-2">
                Nossos alongamentos de cílios garantem um visual natural por semanas, mantendo a durabilidade e a beleza do seu olhar sem esforços diários.
              </p>
            </div>
          </div>

          {/* Botão Final */}
          <div className="flex justify-center mt-8">
            <a
              href="/#modelos"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-pink-600 hover:bg-pink-700 transition-all duration-200 shadow-lg shadow-pink-500/30"
            >
              Ver Modelos de Cílios
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
