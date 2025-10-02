import React from 'react'

const Title = () => {
  return (
    <section id='home'>
      <img src="./images/favicon.png" alt="진혁이 아이콘"  className='home-avatar'/>
      <h2 className='home-title'>Hello<br></br> I'm a tenacious <strong className='home-title--strong'>frontend developer</strong></h2>
      <p className='home-description'>꿈을 꾸는 프론트앤드 개발자입니다.</p>
      <button><a href="#" className='home-git'>Github</a></button>
      <button><a href="#" className='home-vel'>Velog</a></button>
    </section>
  )
}

export default Title
