import Carousel from "../Carousel"
import Rate from "./Rate"

function Review({ name, rate, description }: { name: string, rate: number, description: string }) {
    return (
        <div className='flex w-[300px] sm:w-[389px] p-20 flex-col gap-20 bg-bg rounded'>
            <div className='flex gap-20 w-full'>
                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
                    <circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9"/>
                </svg>
                <div className='flex flex-col gap-10'>
                    <div className='text-20 font-semibold leading-120'>{name}</div>
                    <Rate rate={rate} />
                </div>
            </div>
            <div className='overflow-hidden w-full sm:hidden [display:-webkit-box] [-webkit-line-clamp:4] [-webkit-box-orient:vertical] leading-150'>{description}</div>
            <div className='hidden sm:block w-full'>{description}</div>
            <div className='text-blue font-semibold leading-150'>Продолжить чтение</div>
        </div>
    )
}

export default function Reviews() {
    return (
        <div className='w-full mb-40'>
            <div className='w-full max-w-[1500px] mx-auto mb-20'>
                <div className='pl-20 sm:pl-40 md:pl-80 text-28 font-semibold leading-120'>Сотни счастливых клиентов eSIM</div>
            </div>
            <div className='md:pl-80 lg:pl-[calc(50%-750px+80px)] pl-20 sm:pl-40'>
                <Carousel items={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => <Review key={i} name='Никита Григориевич' rate={4} description='Я купил электронную туристическую симкарту на этом сайте перед поездкой в Испанию. Я был очень доволен качеством связи и скоростью интернета. Симкарта работала без проблем во всех городах, которые я посетил. Я мог звонить, отправлять сообщения и пользоваться онлайн-сервисами без ограничений.' />)} />
            </div>
        </div>
    )
}