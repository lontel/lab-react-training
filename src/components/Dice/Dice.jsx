import './Dice.css'
import { useState } from "react"
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'
import empthyDice from '../../assets/images/dice-empty.png'

const allImg = [dice1, dice2, dice3, dice4, dice5, dice6]

const Dice = () => {

    const randomNum = Math.floor(Math.random() * 6)
    const [dice, setDice] = useState(dice3)

    const rollDice = () => {
        setDice(empthyDice)
        setTimeout(setDice(allImg[randomNum]), 1000)
    }

    return (
        <img src={dice} alt="dice" onClick={rollDice} />

    )
}


export default Dice