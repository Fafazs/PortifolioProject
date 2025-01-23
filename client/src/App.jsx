import './App.css'
import { useState, useEffect } from 'react';
import colorList from './data/colors.json'
import ColorPicker from './components/ColorPicker';
import RandomColorButton from './components/RandomColorButton';

function App() {
  const [bgColor, setBGColor] = useState('#ffffff');  
  const [typedColor, setTypedColor] = useState('');
  const [filteredColor, setFilteredColor] = useState([]);
  const [error, setError] = useState(null);
  

function HandleColor(e){
  const value = e.target.value;
  setTypedColor(value);

  const colorFilter = colorList.filter((colorOBJ) => {
    return colorOBJ.name.toLowerCase().includes(value.toLowerCase());
  });
  
   console.log(colorFilter)
   setFilteredColor(colorFilter);

  
  const colorFinder = colorList.find((colorOBJ)=> 
    colorOBJ.name.toLowerCase() === value.toLowerCase());

  if(colorFinder){
    setBGColor(colorFinder.name);
    setError(null);
  }
  else{
    setBGColor('white');
  }
}


function HandlePickedColor(color){
setBGColor(color);
}

function handleRandomColor(newRandomColor) {
  setBGColor(newRandomColor);
}

  return (
    <div id='section-ONE' style={{backgroundColor: bgColor,}}>
      <h1>Hello, I am Fabrício!</h1>

      <div>
        <input
        className='colorInput'
          type="text"
          placeholder="Type a color name"
          value={typedColor}
          onChange={(e)=>{HandleColor(e)}}
          style={{ padding: '0.5rem' }}
        />

        <ColorPicker id="ColorPicker" onColorPick={HandlePickedColor} />
        <RandomColorButton onRandomColor={handleRandomColor} />

        {typedColor && filteredColor.length> 0 && (
        <ul className="color-dropdown">
        {filteredColor.map((color)=>(
              <li
              key={color.hex}
              onClick={()=> {
                setBGColor(color.name);
                setTypedColor(color.name);
                setFilteredColor([]);
              }}
              >{color.name}</li>
            ))}
        </ul>
        )}
      </div>
    </div>
  );
}

export default App;