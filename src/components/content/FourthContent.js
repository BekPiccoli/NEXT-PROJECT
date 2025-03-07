export default function FourthContent({ aboutRef }) {
  return (
    <>
      <section
        ref={aboutRef}
        className="w-screen flex flex-col items-center justify-center bg-black md:flex md:flex-row"
      >
        <div className="flex flex-col gap-8 h-5/6 mt-5 justify-center items-center md:w-6/12">
          <p className="font-ArchivoBlack text-4xl w-5/6  text-white xl:text-5xl">
            Sobre o autor
          </p>

          <p className="font-Abel text-white text-2xl w-5/6 xl:text-3xl">
            Daniel Reginatto é casado e pai de 4 filhos, dedicado à família e
            apaixonado por inovação e empreendedorismo.
          </p>
          <p className="font-Abel text-white text-2xl w-5/6 xl:text-3xl">
            Empresário e fundador da Redrive, acumulou experiências marcantes
            como diretor de tecnologia na Wise Up e cofundador do
            meuSucesso.com.
          </p>
          <p className="font-Abel text-white text-2xl w-5/6 xl:text-3xl">
            Com métodos inovadores de vendas via WhatsApp, ajudou milhares de
            empresas a crescerem exponencialmente através da Redrive, impactando
            negócios em mais de 30 países.
          </p>
        </div>
        <img
          className=" p-0 m-0 h-full md:w-6/12 h-[500px]xl:w-[1000px] xl:h-full"
          src="images/Daniel.svg"
          alt="Daniel Imagem"
        />
      </section>
      <section className="m-0 md:flex md:flex-row-reverse md:w-screen md:bg-black">
        <div className="w-screen h-40 flex flex-col items-center justify-center bg-black xl:m-15">
          <p className="text-white font-ArchivoBlack ml-5 text-2xl">
            Siga Daniel nas redes sociais
          </p>
          <div className="flex flex-row space-x-8 pt-3 ">
            <img className="cursor-pointer" src="images/linkedin.svg" alt="" />
            <img className="cursor-pointer" src="images/whats.svg" alt="" />
            <img className="cursor-pointer" src="images/instagram.svg" alt="" />
            <img className="cursor-pointer" src="images/email.svg" alt="" />
          </div>
        </div>
        <div className="flex justify-center flex-col items-center h-[400px] w-screen bg-black">
          <div>
            <p className="text-white font-ArchivoBlack text-3xl">
              Dúvidas? Entre em Contato!
            </p>
          </div>
          <label className="flex flex-col justify-center items-center  gap-3 h-2/3 w-2/3 bg-">
            <input
              className="rounded-lg w-5/6 h-10 placeholder:text-gray-400 px-4"
              placeholder="Nome"
              type="text"
              name="Nome"
              id="Nome"
            />

            <input
              className="rounded-lg w-5/6 h-10 placeholder:text-gray-400 px-4"
              placeholder="WhatsApp"
              type="email"
              name="WhatsApp"
              id="WhatsApp"
            />

            <textarea
              className="rounded-lg w-5/6 h-20 placeholder:text-gray-400 px-4"
              placeholder="Mensagem"
              type="text"
              name="Mensagem"
              id="Mensagem"
            />
          </label>
        </div>
      </section>
    </>
  );
}
