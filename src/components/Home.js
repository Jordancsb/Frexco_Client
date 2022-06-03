import Box from '../assets/Box.jpg'

function Home() {
  return (
    <>
    <section>
    <div>
      <div className= "flex justify-center items-center">
      <div className="flex justify-center items-center p-4">
      <div className="card flex-col col-6 justify-center p-10 bg-white rounded-lg shadow-2xl">
      <div className="prod-title">
        <p className="text-2xl uppercase text-gray-900 font-bold">Surprise Boxes 1</p>
      </div>
      <div className="prod-img">
        <img src={Box} alt="Cadeira" className="w-full object-cover object-center"/>
      </div>
      <div className="prod-info grid gap-10">
        <div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
          <p className="font-bold text-xl"> R$ 80,00 </p>
        <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none" onClick={()=>alert('Parabens pela compra!')}>
          Comprar
        </button>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
    </section>
    
    <section>
    <div>
      <div className= "flex justify-center items-center">
      <div className="flex justify-center items-center p-4">
      <div className="card flex flex-col col-6 justify-center p-10 bg-white rounded-lg shadow-2xl">
      <div className="prod-title">
        <p className="text-2xl uppercase text-gray-900 font-bold">Surprise Boxes 2</p>
      </div>
      <div className="prod-img">
        <img src={Box} alt="Cadeira" className="w-full object-cover object-center"/>
      </div>
      <div className="prod-info grid gap-10">
        <div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
          <p className="font-bold text-xl"> R$ 120,00 </p>
        <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none" onClick={()=>alert('Parabens pela compra!')}>
          Comprar
        </button>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
    </section>

    <section>
    <div>
      <div className= "flex justify-center items-center">
      <div className="flex justify-center items-center p-4">
      <div className="card flex flex-col col-6 justify-center p-10 bg-white rounded-lg shadow-2xl">
      <div className="prod-title">
        <p className="text-2xl uppercase text-gray-900 font-bold">Surprise Boxes 3</p>
      </div>
      <div className="prod-img">
        <img src={Box} alt="Cadeira" className="w-full object-cover object-center"/>
      </div>
      <div className="prod-info grid gap-10">
        <div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
          <p className="font-bold text-xl"> R$ 170,00 </p>
        <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none" onClick={()=>alert('Parabens pela compra!')}>
          Comprar
        </button>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
    </section>
    </>
    
  )
}

export default Home