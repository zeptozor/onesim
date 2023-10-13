'use client'

import Footer from "@/components/Footer"
import Feedback from "@/components/Home/Feedback"
import Nav from "@/components/Nav"
import Wrapper from "@/components/Wrapper"
import { useState } from "react"

function Question({ question, answer, active, open }: { question: string, answer: string, active: boolean, open: any }) {
    return (
        <div className='w-full p-20 flex flex-col gap-20 sm:gap-20 rounded bg-bg' onClick={open}>
            <div className='flex w-full justify-between'>
                <div className={`${ active ? 'text-orange' : '' } font-semibold leading-120 sm:leading-100`}>{question}</div>
                <div className='w-[6px] h-[3px]'>
                    <svg className={`${ !active ? 'rotate-180' : '' }`} xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
                        <path d="M1 4L4 1L7 4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className={`${ !active ? 'hidden' : '' } leading-120`}>{answer}</div>
        </div>
    )
}

function QuestionsList() {
    const [opened, setOpened] = useState(0)
    return (
        <div className='flex flex-col gap-10'>
            <Question question='Я сделал заказ. Когда я получу eSIM?' answer='При покупке eSIM в Onesim вы сразу же получите QR-код eSIM и все необходимые инструкции по его загрузке и использованию. Если вы не получили eSIM в течение 10 минут, пожалуйста, сначала проверьте папку "Спам", а затем свяжитесь с нами по адресу hello@onesim.co' active={opened == 0} open={() => setOpened(0)} />
            <Question question='Когда начинается действие плана eSIM?' answer='При покупке eSIM в Onesim вы сразу же получите QR-код eSIM и все необходимые инструкции по его загрузке и использованию. Если вы не получили eSIM в течение 10 минут, пожалуйста, сначала проверьте папку "Спам", а затем свяжитесь с нами по адресу hello@onesim.co' active={opened == 1} open={() => setOpened(1)} />
            <Question question='Как проверить, разблокирован ли мой телефон от оператора?' answer='При покупке eSIM в Onesim вы сразу же получите QR-код eSIM и все необходимые инструкции по его загрузке и использованию. Если вы не получили eSIM в течение 10 минут, пожалуйста, сначала проверьте папку "Спам", а затем свяжитесь с нами по адресу hello@onesim.co' active={opened == 2} open={() => setOpened(2)} />
            <Question question='Как осуществлять звонки с eSIM?' answer='При покупке eSIM в Onesim вы сразу же получите QR-код eSIM и все необходимые инструкции по его загрузке и использованию. Если вы не получили eSIM в течение 10 минут, пожалуйста, сначала проверьте папку "Спам", а затем свяжитесь с нами по адресу hello@onesim.co' active={opened == 3} open={() => setOpened(3)} />
            <Question question='Могу ли я продлить тариф eSIM после истечения срока его действия?' answer='При покупке eSIM в Onesim вы сразу же получите QR-код eSIM и все необходимые инструкции по его загрузке и использованию. Если вы не получили eSIM в течение 10 минут, пожалуйста, сначала проверьте папку "Спам", а затем свяжитесь с нами по адресу hello@onesim.co' active={opened == 4} open={() => setOpened(4)} />
            <Question question='Могу ли я удалить и переустановить свой тарифный план eSIM?' answer='При покупке eSIM в Onesim вы сразу же получите QR-код eSIM и все необходимые инструкции по его загрузке и использованию. Если вы не получили eSIM в течение 10 минут, пожалуйста, сначала проверьте папку "Спам", а затем свяжитесь с нами по адресу hello@onesim.co' active={opened == 5} open={() => setOpened(5)} />
        </div>
    )
}

export default function FAQ() {
    return (
        <div>
            <Wrapper>
                <Nav />
            </Wrapper>
            <Wrapper>
                <div className='w-full px-20 sm:px-80 py-40'>
                    <div className='flex sm:mx-auto w-full sm:w-[593px] sm:justify-center gap-y-20 gap-x-10 flex-wrap'>
                        <div className='sm:text-center text-28 sm:text-36 font-semibold leading-120'>Часто задаваемые вопросы</div>
                        <div className='sm:text-center text-28 sm:text-32 font-semibold leading-120'>О eSIM и соответствующих устройствах</div>
                        <QuestionsList />
                    </div>
                </div>
            </Wrapper>
            <Wrapper>
                <div className='w-full px-20 sm:px-80 py-40'>
                    <div className='flex sm:mx-auto w-full sm:w-[593px] sm:justify-center gap-y-20 gap-x-10 flex-wrap'>
                        <div className='sm:text-center text-28 sm:text-32 font-semibold leading-120'>Покупка и настройка eSIM</div>
                        <div className='flex justify-center gap-10 flex-wrap'>
                            <QuestionsList />
                        </div>
                    </div>
                </div>
            </Wrapper>
            <Wrapper maxw='none'>
                <Feedback />
            </Wrapper>
            <Wrapper maxw='none'>
                <Footer />
            </Wrapper>
        </div>
    )
}