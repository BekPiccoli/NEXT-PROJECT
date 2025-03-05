export default function ThirdContent({ prefacioRef }) {
  return (
    <>
      <div
        ref={prefacioRef}
        className="min-h-screen w-screen flex flex-col items-center justify-start  bg-black"
      >
        <div className=" mt-10 flex flex-col items-center bg-black md:flex md:flex-row md:justify-between">
          <div className="w-full flex flex-col items-center md:w-3/5 md:h-[600px] xl:w-3/5 xl:h-[800px]">
            <p className="text-white font-Abel w-5/6 md:text-xl xl:text-3xl">
              Vivemos em tempos nos quais as regras do jogo não apenas mudaram –
              elas continuam mudando, e numa velocidade alucinante. Atravessamos
              uma era onde a tecnologia não é mais uma vantagem competitiva: é
              um pressuposto básico de qualquer negócio, o ponto de partida.
            </p>
            <br />
            <p className="text-white font-Abel  w-5/6 md:text-xl xl:text-3xl">
              Uma das disciplinas da gestão mais impactadas por esse novo
              contexto é a área comercial. As antigas técnicas de vendas,
              baseadas apenas em superação de objeções e técnicas de fechamento,
              são agora vestígios de uma paisagem em extinção. Essas técnicas
              continuam relevantes, porém a disputa por atenção, conexão e
              confiança com clientes nunca foi tão feroz.
            </p>
            <br />
            <p className="text-white font-Abel w-5/6 md:text-xl xl:text-3xl">
              É nesse cenário de transformações intensas que
              <a className="text-[#FFEC5C]">“A Magia das Conversas” </a>
              se apresenta como um farol para vendedores, empreendedores e
              líderes que buscam não apenas sobreviver, mas prosperar.
            </p>
            <p className="hidden font-ArchivoBlack  w-5/6 text-white text-lg bg-black md:block md:text-xl xl:text-3xl ">
              Prefácio de Sandro Magaldi
            </p>
          </div>
          <img
            className="w-full md:h-1/4 md:w-6/12"
            src="images/sandro-sobre-img.png"
            alt="Sandro Imagem"
          />
        </div>
        <p className="font-ArchivoBlack w-screen h-16 flex justify-center items-center text-white text-xl bg-black md:hidden">
          Prefácio de Sandro Magaldi
        </p>
      </div>
      <div className="w-screen flex flex-col">
        <div className="flex flex-col h-40 p-8 justify-center items-start md:flex-row md:justify-center ">
          <a className="font-ArchivoBlack text-3xl text-black md:text-4xl xl:text-4xl">
            Garanta Seu
          </a>
          <a className="font-ArchivoBlack  text-3xl text-black md:text-4xl md:ml-3 xl:text-4xl">
            Exemplar Agora
          </a>
        </div>
        <div className="bg-white flex h-[500px] items-start justify-evenly">
          <div className="bg-black items-center justify-center h-[400px] w-5/12 rounded-3xl shadow-2xl md:w-[350px] xl:w-[400px]">
            <div className="flex flex-col h-full w-full items-center">
              <a className="text-[#FFEC5C] w-full h-1/4 pt-5 flex justify-center items-center font-ArchivoBlack text-3xl">
                KINDLE
              </a>
              <div className="text-white flex items-center justify-evenly h-20 w-20 ">
                <a className="font-Abel">R$</a>
                <a className="text-4xl font-ArchivoBlack md:text-5xl">27</a>
              </div>
              <div className="flex flex-col items-center  h-32">
                <a className="font-Abel text-white  md:text-lg">
                  Acesso imediato
                </a>
                <a className="font-Abel text-white  md:text-lg">Formato PDF/</a>
                <a className="font-Abel text-white  md:text-lg">EPUB</a>
              </div>
              <button className="font-ArchivoBlack text-xl  bg-[#FFEC5C] rounded-xl pt-2 pb-2 pl-5 pr-5 md:text-2xl md:pl-9 md:pr-9">
                comprar
              </button>
            </div>
          </div>
          <div className="bg-black items-center justify-center h-[400px] w-5/12 rounded-3xl shadow-2xl md:w-[350px] xl:w-[400px]">
            <div className="flex flex-col h-full w-full items-center">
              <a className="text-[#FFEC5C] w-full h-1/4 pt-5 flex justify-center items-center font-ArchivoBlack text-3xl">
                LIVRO
              </a>
              <div className="text-white flex items-center justify-evenly h-20 w-20">
                <a className="font-Abel">R$</a>
                <a className="text-4xl font-ArchivoBlack md:text-5xl">57</a>
              </div>
              <div className="flex flex-col items-center h-32 md:w-[300px] ">
                <div className=" flex flex-col items-center md:flex md:flex-row">
                  <a className="font-Abel text-white md:text-lg">
                    Frete grátis para
                  </a>
                  <a className="font-Abel text-white md:text-lg md:ml-1">
                    todo o Brasil
                  </a>
                </div>
                <div className=" flex flex-col items-center md:flex md:flex-row ">
                  <a className="font-Abel text-white md:text-lg">
                    Capa premium e
                  </a>
                  <a className="font-Abel text-white md:text-lg md:ml-1">
                    acabamento
                  </a>
                </div>
                <a className="font-Abel text-white md:text-lg md:ml-1">
                  {" "}
                  especial
                </a>
              </div>
              <button className="font-ArchivoBlack text-xl  bg-[#FFEC5C] rounded-xl pt-2 pb-2 pl-5 pr-5 md:text-2xl md:pl-9 md:pr-9">
                comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
