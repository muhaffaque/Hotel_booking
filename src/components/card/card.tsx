import React from 'react'
import Image from 'next/image';
import "./styles.css";


interface IProps {
    image: string;
    title: string
    subTitle: string;
}

function Card(props: IProps) {
    const { image, title, subTitle } = props
    return (
        <div className='card-container' >
            <Image src={image} alt="" width="100" height="100" />
            <h3>{title}</h3>
            <p>{subTitle}</p>
        </div>
    )
}

export default Card