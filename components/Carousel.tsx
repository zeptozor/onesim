'use client'

import { useState } from "react"

export default function Carousel({ items }: { items: React.ReactNode[] }) {
    const [pSide, changePSide] = useState<'left' | 'right'>('left')
    return (
        <div className={`${pSide == 'left' ? 'md:pl-80 lg:pl-[calc(50%-750px+80px)] pl-20 sm:pl-40' : 'md:pr-80 lg:pr-[calc(50%-750px+80px)] pr-20 sm:pr-40'} overflow-hidden relative flex items-center max-w-max`}>
            <div className='w-full flex max-w-max gap-[20px]'>
                {
                    items.map(i => i)
                }
            </div>
            <svg className={`absolute w-[42px] h-[42px] ${pSide == 'left' ? 'right-[40px]' : 'left-[40px] rotate-180'} cursor-pointer`} xmlns='http://www.w3.org/2000/svg' width='42' height='42' viewBox='0 0 42 42' fill='none' onClick={() => changePSide(pSide == 'left' ? 'right' : 'left')}>
                <circle cx='21' cy='21' r='21' fill='orange'/>
                <path d='M17 13L25 21L17 29' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
            </svg>
        </div>
    )
}