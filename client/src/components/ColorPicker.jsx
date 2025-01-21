import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import './ColorPicker.css'

export default function ColorPicker({ onColorPick }) {
    const [color, setColor] = useState('#ffffff');
    const [showPicker, setShowPicker] = useState(false);

    const HandleChange = (newColor) => {
        setColor(newColor.hex);
    }

    const handleConfirm = () => {
        if(onColorPick){
            onColorPick(color);
        }
        setShowPicker(false);
    };

    return (
        <>
            <div className='showPicker'>
                <div className='showPickerIcon'
                    onClick={() => setShowPicker(!showPicker)}
                    title="Selecionar Cor">
                    🎨
                </div>

                {showPicker && (
                    <div className='showPickerON'>
                        <ChromePicker
                            color={color}
                            onChange={HandleChange}
                        />
                        <button className='showPickerButton'
                            onClick={handleConfirm}
                        >
                            Confirm
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}