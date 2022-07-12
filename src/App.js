import cross from './image/cross.jpg'
import './style.css'
import { useState } from 'react'

function App() {
const [text, setText] = useState(false)
const [basket, setBasket] = useState(false)
const [basket2, setBasket2] = useState(true)

const handlerText = () => {
  setText(true)
}

const remove = () => {
  setText(false)
}

const handlerBasket = () => {
  setBasket(true)
  setBasket2(false)
}


const returnBasket = () => {
  setBasket(false)
  setBasket2(true)
}

console.log(handlerText)
  return (
    <div className="App">
      <div className="cart">
        <div className="image">
          <img src={cross}></img>
        </div>
        <div className="block">
          <div className="price">
            <p>Nike Sneaker</p>
            <p>$120</p>
          </div>
          <button className="btn1" onClick={handlerText}>
            Детали
          </button>
          {text && (
            <div className="wind">
              jhdcheddsfsfsfsd fsdfsdfапвапвавапвапваsdfsdfsdf frwfrwfrwfwefwf ffewf efwefwef
              cjdhbcbjew
              <button className="btn4" onClick={remove}>
                x
              </button>
            </div>
          )}
        </div>
        <hr></hr>
        <div>
          <p>Cамые лучшие кроссы. Бери не пожалеешь</p>
        </div>
        <div className="butt">
          <button className="btn2" onClick={handlerBasket}>
            {basket2 ? <span>Добавить в корзину</span> : <span>Уже в корзине</span>}
          </button>
          {basket && <button className="btn3" onClick={returnBasket}> Удалить из корзины</button>}
        </div>
      </div>
    </div>
  );
}

export default App;
