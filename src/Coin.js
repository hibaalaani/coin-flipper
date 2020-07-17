import React, { Component } from 'react'
import "./Coin.css"
class Coin extends Component {

    render() {
        return (
            <div className="Coin" >
                <img src={this.props.coins.imgSrc} alt={this.props.coins.side} />

            </div>
        )
    }
}
export default Coin