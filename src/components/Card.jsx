import React from "react"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.location === 'Online') {
        badgeText = 'ON LINE'
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--img" src={`public/assets/${props.coverImg}`}/>
            <div className="card--info">
                <p><img src="public/assets/star.png" /> {props.stats.rating} <span className='gray'>({props.stats.reviewCount}) • {props.location}</span></p>
                <p>{props.title}</p>
                <p><b>From ${props.price}</b> / person</p>
            </div>
        </div>
    )
}