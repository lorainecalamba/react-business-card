import React from 'react';
import Photo from './components/Photo';
import Name from './components/Name';
import Button from './components/Button';
import Description from './components/Description';
import Social from './components/Social';

export default function App() {
  return (
    <div className='business-card-container'>
      <Photo/>
      <Name />

      <div className='card--buttons'>
        <Button icon={<i className="fa-solid fa-envelope"></i>} text='Email'/>
        <Button icon={<i className="fa-brands fa-linkedin"></i>} bgColor='#5093E2' text='LinkedIn'/>
      </div>

      <Description title='About' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />

      <Description title='Interest' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />

      <Social />
    </div>
  )
}