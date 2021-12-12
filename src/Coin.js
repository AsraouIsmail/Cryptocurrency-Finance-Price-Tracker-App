import React from 'react'
import './App.css'
// A component to destruct data and show it in the UI
const Coin = ({image, name,symbol, price, volume, priceChange, marketcap}) => {
    return (
        <div className='coin-container'>
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto-image" />
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                    <div className="coin-data">
                        <p className="coin-price"> current price: {price}$</p>
                        <p className="coin-volume"> volume: {volume.toLocaleString()}$</p>

                        {priceChange < 0 ? (
                            <p className='coin-percent red'>{ priceChange.toFixed(2)}%</p>
                        ) : (<p className='coin-percent green'>{priceChange.toFixed(2)}%</p>)}
                        
                        <p className="coin-marketcap">
                            Mkt cap: {marketcap.toLocaleString()}
                        </p>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Coin
