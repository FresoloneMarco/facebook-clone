import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
                image='https://upload.wikimedia.org/wikipedia/commons/9/9d/Instagram_Story_f4K%D9%82.jpg'
                title='Marco Fresolone'
                profileSrc='https://upload.wikimedia.org/wikipedia/commons/1/16/Avatar_de_KakesInfo.png'
            />
            <Story
                image='https://upload.wikimedia.org/wikipedia/commons/5/57/Laycon.jpg'
                title='Gerry Scotti'
                profileSrc='https://upload.wikimedia.org/wikipedia/commons/0/0f/Virginio_Scotti.jpeg'
            />
            <Story
                image='https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg'
                title='Alessandro Manzoni'
                profileSrc='https://upload.wikimedia.org/wikipedia/commons/5/58/Francesco_Hayez_-_Ritratto_di_Alessandro_Manzoni.jpg'
            />
            <Story
                image='https://upload.wikimedia.org/wikipedia/commons/d/d8/1971%E2%80%9372_Serie_A_-_AC_Milan_v_Juventus_-_Marchetti%2C_Benetti.webp'
                title='John Doe'
                profileSrc='https://upload.wikimedia.org/wikipedia/commons/b/ba/St.Gallen_-_Kathedrale_-_001.jpg'
            />
            <Story
                image='https://upload.wikimedia.org/wikipedia/commons/d/d4/Dybala_2017_%28edited%29.jpg'
                title='Capo Plaza'
                profileSrc='https://upload.wikimedia.org/wikipedia/commons/f/f2/Handicap_Sign.JPG'
            />

        </div>
    )
}

export default StoryReel
