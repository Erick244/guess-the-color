import Color from '../components/Color';
import Button from '../components/Button';
import { useEffect, useState } from 'react';

export default function GuessTheColor() {
    const hexadecimalCharacters = ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    function hexadecimalGenerate() {
        let hexadecimal = '';
        for (let i = 0; i < 6; i++) {
            let character = Math.floor(Math.random() * hexadecimalCharacters.length);
            hexadecimal += hexadecimalCharacters[character];
        }
        return '#' + hexadecimal;
    }

    const [correctColor, setCorrectColor] = useState('');
    const [notColor1, setNotColor1] = useState('');
    const [notColor2, setNotColor2] = useState('');


    function setAllState() {
        setCorrectColor(hexadecimalGenerate());
        setNotColor1(hexadecimalGenerate());
        setNotColor2(hexadecimalGenerate());
    }

    useEffect(() => {
        setAllState();
    }, [])



    function positionsGenerate() {
        function generateValue() {
            let value = Math.floor(Math.random() * 3);
            return value;
        }

        let randomPositions = [];

        for (let i; randomPositions.length < 3; i++) {
            let value = generateValue();
            if (!randomPositions.includes(value)) {
                randomPositions.push(value);
            } else {
                value = generateValue();
            }
        }

        return randomPositions;
    }

    const options = [correctColor, notColor1, notColor2];
    const positions = positionsGenerate();


    function check(e) {
        const button = e.target;
        const labelButton = e.target.innerHTML;
        if (labelButton === correctColor) {
            setAllState();
        } else {
            return 1
        }
    }


    return (
        <div>
            <Color color={correctColor} />
            <div>
                <Button option={options[positions[0]]} click={check} />
                <Button option={options[positions[1]]} click={check} />
                <Button option={options[positions[2]]} click={check} />
            </div>
        </div>
    )
}