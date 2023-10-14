'use client'

import { useState } from "react"

function Question({ question, answer }: { question: string, answer: string }) {
    const [active, setActive] = useState(false)
    return (
        <div className={`w-full overflow-hidden ${active ? 'max-h-[1000px]' : 'max-h-[58px]'} duration-300 transition-all p-20 flex flex-col gap-20 sm:gap-20 rounded bg-bg`}>
            <div className='flex w-full justify-between items-center cursor-pointer' onClick={() => setActive(!active)}>
                <div className={`${ active ? 'text-orange' : '' } transition-colors duration-300 font-semibold leading-120 sm:leading-100`}>{question}</div>
                <div className='w-[6px] h-[3px]'>
                    <svg className={`${!active ? 'rotate-180' : ''} duration-100 ease-in transition`} xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
                        <path d="M1 4L4 1L7 4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className={`leading-120`}>{answer}</div>
        </div>
    )
}

function QuestionsList() {
    return (
        <div className='flex flex-col gap-10'>
            <Question question='Я сделал заказ. Когда я получу eSIM?' answer='При покупке eSIM в Onesim вы сразу же получите QR-код eSIM и все необходимые инструкции по его загрузке и использованию. Если вы не получили eSIM в течение 10 минут, пожалуйста, сначала проверьте папку "Спам", а затем свяжитесь с нами по адресу hello@onesim.co' />
            <Question question='Когда начинается действие плана eSIM?' answer='При покупке eSIM в Onesim вы сразу же получите QR-код eSIM и все необходимые инструкции по его загрузке и использованию. Если вы не получили eSIM в течение 10 минут, пожалуйста, сначала проверьте папку "Спам", а затем свяжитесь с нами по адресу hello@onesim.co' />
            <Question question='Как проверить, разблокирован ли мой телефон от оператора?' answer='При покупке eSIM в Onesim вы сразу же получите QR-код eSIM и все необходимые инструкции по его загрузке и использованию. Если вы не получили eSIM в течение 10 минут, пожалуйста, сначала проверьте папку "Спам", а затем свяжитесь с нами по адресу hello@onesim.co' />
            <Question question='Как осуществлять звонки с eSIM?' answer='При покупке eSIM в Onesim вы сразу же получите QR-код eSIM и все необходимые инструкции по его загрузке и использованию. Если вы не получили eSIM в течение 10 минут, пожалуйста, сначала проверьте папку "Спам", а затем свяжитесь с нами по адресу hello@onesim.co' />
            <Question question='Могу ли я продлить тариф eSIM после истечения срока его действия?' answer='При покупке eSIM в Onesim вы сразу же получите QR-код eSIM и все необходимые инструкции по его загрузке и использованию. Если вы не получили eSIM в течение 10 минут, пожалуйста, сначала проверьте папку "Спам", а затем свяжитесь с нами по адресу hello@onesim.co' />
            <Question question='Могу ли я удалить и переустановить свой тарифный план eSIM?' answer='При покупке eSIM в Onesim вы сразу же получите QR-код eSIM и все необходимые инструкции по его загрузке и использованию. Если вы не получили eSIM в течение 10 минут, пожалуйста, сначала проверьте папку "Спам", а затем свяжитесь с нами по адресу hello@onesim.co' />
        </div>
    )
}

export default function Questions() {
    return (
        <div className='w-full px-20 sm:px-80 py-40'>
            <div className='flex sm:mx-auto max-w-[593px] sm:justify-center gap-y-20 gap-x-10 flex-wrap'>
                <div className='sm:text-center text-28 sm:text-36 font-semibold leading-120'>Часто задаваемые вопросы</div>
                <QuestionsList />
            </div>
        </div>
    )
}