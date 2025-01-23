import './RandomColorButton.css';

export default function RandomColorButton({ onRandomColor }){

    

    function generateRandomColor(){
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    };

    function handleButtonClick(){
        const randomColor = generateRandomColor();
        onRandomColor(randomColor);
    };

    return(
        <>
        <button className="randomColorButton" onClick={handleButtonClick} >RandomColor</button>
        </>
    )

}

