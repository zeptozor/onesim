'use client'

import { useState } from 'react'
import SwitchSelector from 'react-switch-selector'

interface SwitchItemOptions {
    label: string
    value: string
}

export default function Switch({ options, onChange }: { options: SwitchItemOptions[], onChange: any }) {
    return (
        <SwitchSelector
            onChange={onChange}
            options={options}
            backgroundColor='#F6F7F9'
            selectedBackgroundColor='#F90'
            wrapperBorderRadius='10px'
            optionBorderRadius='10px'
        />
    )
}

export function Mobile({ options }: { options: SwitchItemOptions[] }) {
    const [active, setActive] = useState(options[0].value)
    return (
        <div className='w-full gap-10 grid grid-cols-2'>
            {
                options.map(i => <div key={i.value} className={`bg-[linear-gradient(to_right,#F90_50%,#F6F7F9_50%)] [background-size:200%_100%] transition-all duration-500 ease-out ${active == i.value ? '[background-position:left_bottom]' : '[background-position:right_bottom] hover:[background-position:left_bottom]'} rounded`} onClick={() => setActive(i.value)}>
                    <div className={`${active == i.value ? 'text-white' : ''} p-[12px] flex items-center justify-center font-semibold w-full h-full hover:text-white transition-all duration-[600ms] ease-out`}>{i.label}</div>
                </div>)
            }
        </div>
    )
}