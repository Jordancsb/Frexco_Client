function Home() {
  return (
    <div>
    <div className="w-screen h-screen flex justify-center items-center">
    <div className="container mx-auto max-w-sm w-full p-4 sm:w-1/2">
    <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
    <div className="prod-title">
      <p className="text-2xl uppercase text-gray-900 font-bold">Puma Shoes</p>
      <p className="uppercase text-sm text-gray-400">
      Cadeira
      </p>
    </div>
    <div className="prod-img">
      <img src="./src/assets/cadeira.jfif" alt="Cadeira" className="w-full object-cover object-center"/>
    </div>
    <div className="prod-info grid gap-10">
    <div>
      <ul className="flex flex-row justify-center items-center">
      <li className="mr-4 last:mr-0">
      <span className="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
        <p href="#blue" className="block w-6 h-6 bg-blue-900 rounded-full"></p>
      </span>
      </li>
      <li className="mr-4 last:mr-0">
      <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
        <p href="#yellow" className="block w-6 h-6 bg-yellow-500 rounded-full"></p>
      </span>
      </li>
      <li className="mr-4 last:mr-0">
      <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
        <p href="#red" className="block w-6 h-6 bg-red-500 rounded-full"></p>
      </span>
      </li>
      <li className="mr-4 last:mr-0">
      <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
        <p href="#green" className="block w-6 h-6 bg-green-500 rounded-full"></p>
      </span>
      </li>
      </ul>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
        <p className="font-bold text-xl">R$ 50</p>
      <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
        Carrinho
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home