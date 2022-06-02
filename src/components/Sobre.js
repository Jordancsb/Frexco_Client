import Frexco from '../assets/Frexco_Transp.png'
import Teste from '../assets/Teste.JPG'

function Sobre() {
  return (
<>
    <div className='p-10 flex align-item justify-center'>
      <img 
      src={ Frexco }  
      alt=""
      />
    </div>

    <div className='p-10 flex align-item justify-center'>
      <img 
      src={ Teste }  
      alt=""
      />
    </div>

</>


  )
}

export default Sobre;