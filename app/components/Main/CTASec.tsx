'use client'
import React from 'react'
import Button from '../Button'

const CTASec = () => {
  return (
    <>
      <div className='
        w-full
        flex
        flex-col
        justify-center
        relative
        gap-10
        items-left'>
        <div className='
          w-3/4
          flex
          justify-center
          flex-col
          items-left'>
          <h1 className='font-bold text-3xl'>Hi! I&apos;m Froilan,</h1>
          <p className='text-xs md:hidden'>Software Developer Based In</p>
          <p className='text-xs md:hidden'>Caloocan Philippines</p>
          <p className='text-xs hidden md:block'>Software Developer and Cybersecurity Novice Based In Caloocan Philippines</p>
        </div>
        <Button 
        className={'p-2 rounded-md text-1xl bg-black w-full md:w-3/4 lg:w-3/5 text-white dark:bg-white dark:text-black'} onClick={() => {window.open('https://discord.gg/6Tfcg6Ta8N', "_blank")}} text='Join me on Discord'/>
      </div>
    </>
  )
}

export default CTASec