import React ,{ useState,useEffect } from 'react';

function App() {
  const [color, setColor] = useState('olive');
  useEffect(() => {
    document.body.style.backgroundColor = color;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [color]);

  return (
     <>
     <div className='w-full  duration-200' style={{backgroundColor: color}}> Background Change
     
      <div className=' fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2 '>
        <div className='  flex flex-wrap  justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
           <button onClick={ () =>
            {
              console.log('Button clicked!');
              setColor("red")
            } } className='outline-none border-none text-white  px-4 py-1 rounded-full' style={{backgroundColor: "red"}}>Red</button>
            <button onClick={ () =>
            {
              console.log('Button clicked!');
              setColor("green")
            } } className='outline-none border-none text-white  px-4 py-1 rounded-full' style={{backgroundColor: "green"}}>Green</button>
        
        <button onClick={ () =>
            {
              console.log('Button clicked!');
              setColor("yellow")
            } } className='outline-none border-none text-white  px-4 py-1 rounded-full' style={{backgroundColor: "yellow"}}>Yellow</button>
        
        <button onClick={ () =>
            {
              console.log('Button clicked!');
              setColor(" blue")
            } } className='outline-none border-none text-white  px-4 py-1 rounded-full' style={{backgroundColor: " blue"}}>Green</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
