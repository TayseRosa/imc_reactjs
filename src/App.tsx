import { useState } from 'react';

import styles from './App.module.css';

import poweredImage from './assets/powered.png'
/* import up from './assets/up.png'
import down from './assets/down.png'
import leftArrow from './assets/leftarrow.png' */

import { levels, calculateImc } from './helpers/imc';

const App = () => {

  const [ heightField, setHeightField ] = useState<number>(0);
  const [ weightField, setWeightField ] = useState<number>(0);

  const handleCalculateButton=()=>{
    if( heightField && weightField ){
      /* calculo */
    }else{
      alert('Digite todos os campos')
    }
  }

  return(
    <div className={styles.main}>
        <header>
          <div className={styles.headerContainer}>
            <img src={poweredImage} alt="image" width={150} />
          </div>
        </header>

        <div className={styles.container}>
          <div className={styles.leftSide}>
            <h1> Calcule seu IMC </h1>
            <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização de Saúde para calcular o peso ideal de cada pessoa.</p>

            <input 
              type="number"
              placeholder="Digite sua altura (Ex: 1.58)"
              value={ heightField > 0 ? heightField : '' }
              onChange={ e=>setHeightField(parseFloat(e.target.value)) }
            />

            <input 
              type="number"
              placeholder="Digite seu peso (Ex: 75.3)"
              value={ weightField > 0 ? weightField : '' }
              onChange={ e=>setWeightField(parseFloat(e.target.value)) }
            />

          <button onClick={handleCalculateButton}>Calcular</button>

          </div>
          <div className={styles.rightSide}>
            <div className={styles.grid}>
              ...
            </div>
          </div>
        </div>
    </div>
  )
}

export default App;