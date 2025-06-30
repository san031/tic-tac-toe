import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cell from './Components/Cell'

function App() {

  const [matrix, setMatrix] = useState(Array(9).fill(null))
   const[player,setPlayer] = useState(true)
   const [winner, setWinner] = useState(null)

  function handleClick(i){
    // setMatrix((player===true)?matrix[i]='X':matrix[i]='O')
    if(winner)
      return;
    if(matrix[i] || winner)
      return
    const nextCell=matrix.slice();
    (player===true)?nextCell[i]='X':nextCell[i]='O'
    setMatrix(nextCell)
    setPlayer((prev)=> !prev)
    // matrix[i]={player}
    console.log({player}, i)
  }


  useEffect(() => {
    console.log(winner)
  }, [winner])
  
  useEffect(() => {
    const sinner= calculateWinner(matrix)
  if (sinner){
       setWinner(player)     
  }
  }, [matrix])
  
  
  const calculateWinner = (matrix) => {

    const nextCell=matrix.slice()
    if (nextCell[0] && nextCell[0] === nextCell[1] && nextCell[1]=== nextCell[2])
      return true
    if(nextCell[3] && nextCell[3]=== nextCell[4] && nextCell[4]===nextCell[5])
      return true
    if(nextCell[6]&&nextCell[6]=== nextCell[7] && nextCell[7]===nextCell[8])
      return true
    if(nextCell[0] && nextCell[0]===nextCell[3] && nextCell[3]===nextCell[6])
      return true
    if(nextCell[1]&&nextCell[1]===nextCell[4] && nextCell[4]===nextCell[7])
      return true
    if(nextCell[2] &&nextCell[2]===nextCell[5] && nextCell[5]===nextCell[8])
      return true
    if(nextCell[0] && nextCell[0]===nextCell[4] && nextCell[4]===nextCell[8])
      return true
    if(nextCell[2] &&nextCell[2]===nextCell[4] && nextCell[4]===nextCell[6])
      return true
    return false
  }
  return (
    <>
    <div className='fixed h-screen w-screen bg-black place-items-center'>

      <div className='text-red'>{player} turn</div>
      <div className=' grid grid-cols-[1fr_1fr_1fr]  text-white m-[18%] '>
        <div className='grid grid-rows-[1fr_1fr_fr] '>
        <Cell className='border-r border-b p-13' value={matrix[0]}  onCellClick={()=>handleClick(0)}/>
        <Cell classname='border-t border-r border-b p-13' value={matrix[3]} onCellClick={() => handleClick(3)}/>
        <Cell classname="border-t border-r p-13" value={matrix[6]} onCellClick={() => handleClick(6)}/>
        </div>
        <div className='grid grid-rows-[1fr_1fr_fr]'>
        <Cell classname='border-l border-b border-r p-13' value={matrix[1]} onCellClick={() => handleClick(1)}/>
        <Cell classname='border p-13' value={matrix[4]} onCellClick={() => handleClick(4)}/>
        <Cell classname='border-t border-l border-r p-13' value={matrix[7]} onCellClick={() => handleClick(7)}/>
        </div>
        <div className='grid grid-rows-[1fr_1fr_fr]'>
        <Cell classname='border-l border-b p-13' value={matrix[2]} onCellClick={() => handleClick(2)}/>
        <Cell classname='border-b border-l p-13' value={matrix[5]} onCellClick={() => handleClick(5)}/>
        <Cell classname='border-t border-l p-13' value={matrix[8]} onCellClick={() => handleClick(8)}/>
        
        </div>
      </div>

      <div>Wineer is {winner}</div>
    </div>
    </>
  )
}

export default App
