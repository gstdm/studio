import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Studio Jeise Lashes - Design de Cílios Personalizados
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Transforme seu olhar com cílios perfeitos, criados sob medida por Jeusilayne, no Studio Jeise Lashes. Beleza, confiança e estilo em cada fio.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/#/modelos"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-pink-600 hover:bg-pink-700 transition-all duration-200 shadow-lg shadow-pink-500/30"
              >
                Ver Modelos de Cílios
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Foto e Texto */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex justify-between items-center">
        <img
          src="https://i.ibb.co/q979NRQ/Remove-bg-ai-1737810940219.png"
          alt="Cílios"
          className="w-48 h-48 rounded-lg shadow-md"
        />
        <div className="ml-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Por que investir em cílios?
          </h2>
          <p className="text-gray-600 mt-4">
            Ao escolher um design de cílios, você não está apenas realçando sua beleza, mas também elevando sua autoestima. Cílios bem feitos podem transformar seu olhar e proporcionar uma confiança renovada para o dia a dia.
          </p>
        </div>
      </div>

      {/* Vantagens */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Vantagens de Fazer Cílios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vantagem 1 */}
            <div className="text-center">
              <img
                src="https://i.ibb.co/q979NRQ/Remove-bg-ai-1737810940219.png"
                alt="Beleza Natural"
                className="w-32 h-32 mx-auto rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Beleza Natural</h3>
              <p className="text-gray-500 mt-2">
                Cílios bem feitos proporcionam um olhar mais expressivo e natural, sem a necessidade de muita maquiagem.
              </p>
            </div>

            {/* Vantagem 2 */}
            <div className="text-center">
              <img
                src="https://i.ibb.co/q979NRQ/Remove-bg-ai-1737810940219.png"
                alt="Autoestima Elevada"
                className="w-32 h-32 mx-auto rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Autoestima Elevada</h3>
              <p className="text-gray-500 mt-2">
                Com cílios perfeitos, você se sente mais confiante, preparada e radiante, elevando sua autoestima em qualquer ocasião.
              </p>
            </div>

            {/* Vantagem 3 */}
            <div className="text-center">
              <img
                src="https://i.ibb.co/q979NRQ/Remove-bg-ai-1737810940219.png"
                alt="Praticidade no Dia a Dia"
                className="w-32 h-32 mx-auto rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Praticidade no Dia a Dia</h3>
              <p className="text-gray-500 mt-2">
                Acorde pronta! Com cílios volumosos e perfeitos, você economiza tempo na maquiagem, sempre com um visual incrível.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Botão Final */}
      <div className="flex justify-center mt-8">
        <a
          href="/#/modelos"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-pink-600 hover:bg-pink-700 transition-all duration-200 shadow-lg shadow-pink-500/30"
        >
          Ver Modelos de Cílios
        </a>
      </div>
    </div>
  );
}

export default App;
