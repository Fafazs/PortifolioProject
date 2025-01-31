import './App.css'
import { useState, useEffect } from 'react';
import colorList from './data/colors.json'
import ColorPicker from './components/ColorPicker';
import RandomColorButton from './components/RandomColorButton';

function App() {
  const [h1Color, setH1Color] = useState('#000000');
  const [bgColor, setBGColor] = useState('#ffffff');
  const [typedColor, setTypedColor] = useState('');
  const [filteredColor, setFilteredColor] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    console.log('backgroundcolor updated');
    handleH1Color(bgColor);
  }, [bgColor]);

  function handleH1Color(bgColorHex) {
    const hex = bgColorHex.replace('#','');

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const brilhoMedio = (r + g + b) / 3;

    if(brilhoMedio < 128){
      setH1Color("#ffffff");
      return
    }
    else{
     setH1Color("#000000");
     return
    }
  }

  function HandleColor(e) {
    const value = e.target.value;
    setTypedColor(value);

    const colorFilter = colorList.filter((colorOBJ) => {
      return colorOBJ.name.toLowerCase().includes(value.toLowerCase());
    });

    console.log(colorFilter)
    setFilteredColor(colorFilter);


    const colorFinder = colorList.find((colorOBJ) =>
      colorOBJ.name.toLowerCase() === value.toLowerCase());

    if (colorFinder) {
      setBGColor(colorFinder.name);
      setError(null);
    }
    else {
      setBGColor('#ffffff');
    }
  }

  function HandlePickedColor(color) {
    setBGColor(color);
  }

  function handleRandomColor(newRandomColor) {
    setBGColor(newRandomColor);
  }

  return (
    <div id='section-ONE' style={{ backgroundColor: bgColor }}>
      <h1 style={{ color: h1Color }}>Hello, I am Fabrício!</h1>

      <div>
        <input
          className='colorInput'
          type="text"
          placeholder="Type a color name"
          value={typedColor}
          onChange={(e) => { HandleColor(e) }}
          style={{ padding: '0.5rem' }}
        />

        <ColorPicker id="ColorPicker" onColorPick={HandlePickedColor} />
        <RandomColorButton onRandomColor={handleRandomColor} />

        {typedColor && filteredColor.length > 0 && (
          <ul className="color-dropdown">
            {filteredColor.map((color) => (
              <li
                key={color.hex}
                onClick={() => {
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