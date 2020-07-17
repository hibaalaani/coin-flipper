import React, { Component } from 'react'
import { choice } from "./Helpers"
import "./FlippCoin.css"
import Coin from "./Coin"
class FlippCoin extends Component {
    static defaultProps = {
        coins: [
            { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
            { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tail-jpg" }
        ]
    }

    state = { curSide: "", heads: 0, tails: 0, flips: 0 }

    flipCoinChoice = () => {
        //just like array[0] or array[1]===index value
        const flipSide = choice(this.props.coins)

        this.setState(st => {
            return {
                curSide: flipSide, flips: st.flips + 1,
                heads: st.heads + (flipSide.side === "heads" ? 1 : 0),
                tails: st.tails + (flipSide.side === "tails" ? 1 : 0)

            }
        }


        )
    }
    onClickHandler = () => {
        this.flipCoinChoice()
    }
    render() {
        return (
            <div className="FlippCoin">
                <h2 className="color">Flip Your coin</h2>
                {this.state.curSide &&
                    <Coin coins={this.state.curSide} />
                }
                <p>From <span className="color"> {this.state.flips}</span> flips there are<span className="color"> {this.state.heads}</span> heads and <span className="color">{this.state.tails}</span> tails</p>
                <button className="FlippCoin-button" onClick={this.onClickHandler}>click</button>
            </div>
        )
    }
}
export default FlippCoin