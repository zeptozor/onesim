import Rate from "./Rate";

function Button({ active, text }: { active: boolean, text: string }) {
    return (
        <div className={`flex px-10 py-[12px] items-center justify-center rounded ${ active ? 'bg-orange text-white' : '' } font-semibold`}>{text}</div>
    )
}

function Feature({ icon, text }: { icon: string, text: string }) {
    return (
        <div className='flex gap-10'>
            <img className='w-[20px]' src={`images/icons/${icon}.svg`} />
            <div className='leading-120'>{text}</div>
        </div>
    )
}

function Plan({ active, traffic, duration, price, available }: { active: boolean, traffic: number, duration: number, price: number, available: boolean }) {
    return (
        <div className={`flex p-20 items-center justify-between flex-wrap rounded border ${ active ? 'border-green bg-[#E3F0E9]' : 'border-[#E1E5EC]' }`} style={{ boxShadow: '0px 0px 31px 0px rgba(0, 0, 0, 0.05)' }}>
            <div className='flex flex-col justify-center items-start gap-10'>
                <div className='text-20 font-semibold leading-120'>Всего трафика: {traffic} ГБ</div>
                <div className='text-gray font-semibold leading-120'>Срок действия: {duration} дней</div>
            </div>
            <div className='flex w-[79px] gap-10 flex-col justify-center items-start'>
                <div className={`leading-120 font-600 ${ active ? 'text-green' : 'text-gray' }`}>${price} USD</div>
                <div className={`font-semibold leading-120 ${ !available ? 'text-red' : '' }`}>{ available ? 'В наличии' : 'Нет в наличии' }</div>
            </div>
        </div>
    )
}

function Method({ icon }: { icon: string }) {
    return (
        <img className='w-[60px] h-[40px]' src={`images/paymentmethods/gray/${icon}.svg`} />
    )
}

export default function Info({ id }: { id: string }) {
    return (
        <div className='w-full px-20 sm:px-40 md:px-80 flex flex-col md:flex-row gap-20'>
            <div className='block sm:hidden md:block w-full sm:min-w-[389px] relative before:absolute before:content-[""] before:top-0 before:right-0 before:border-t-[80px] before:border-l-[80px] before:border-y-white before:w-0 before:border-l-transparent' style={{ background: `url('../public/images/regions/${id}.png')`, backgroundSize: 'cover' }}>
                <img className='rounded-3xl' src={`images/regions/${id}.png`} alt='sim' />
            </div>
            <div className='flex flex-col gap-20'>
                <div className='flex gap-20'>
                    <div className='hidden sm:block md:hidden sm:w-[389px] w-full sm:min-w-[389px] relative before:absolute before:content-[""] before:top-0 before:right-0 before:border-t-[80px] before:border-l-[80px] before:border-y-white before:w-0 before:border-l-transparent' style={{ background: `url('../public/images/regions/${id}.png')`, backgroundSize: 'cover' }}>
                        <img className='rounded-3xl' src={`images/regions/${id}.png`} alt='sim' />
                    </div>
                    <div className='flex flex-col gap-20'>
                        <div className='text-28 font-semibold leading-120'>eSIM для Европы</div>
                        <div>
                            <div className='flex items-end'>
                                <div className='text-green text-36 font-semibold leading-120 mx-[5px]'>$3.90</div>
                                <div className='font-semibold leading-120'>USD</div>
                            </div>
                            <div className='text-red font-semibold leading-120 line-through'>$4.90</div>
                            <Rate rate={4} />
                        </div>
                        <div className='hidden sm:flex md:hidden w-auto p-[5px] gap-10 items-center flex-wrap rounded'>
                            <Button active={true} text='Особенности' />
                            <Button active={false} text='Описание' />
                            <Button active={false} text='Операторы' />
                        </div>
                    </div>
                </div>
                <div className='w-full h-[2px] mt-20 bg-[#E1E5EC]'></div>
                <div className='flex sm:hidden md:flex w-full md:w-1/2 p-[5px] justify-between items-center flex-wrap rounded bg-bg'>
                    <Button active={true} text='Особенности' />
                    <Button active={false} text='Описание' />
                    <Button active={false} text='Операторы' />
                </div>
                <div className='w-full flex flex-col gap-20 mt-40'>
                    <Feature icon='wifi' text='eSIM для Европы с наилучшим покрытием' />
                    <Feature icon='verified' text='Простая настройка без регистрации' />
                    <Feature icon='stonks' text='1ГБ, 3ГБ, 5ГБ или 10ГБ скорости 4G/5G' />
                    <Feature icon='globe' text='Работает сразу в нескольких странах' />
                    <div className='font-semibold leading-120'>После покупки вы немедленно получите электронное письмо с eSIM и с инструкцией по настройке QR</div>
                </div>
                <div className='w-full mt-40 leading-150'>
                    eSIM для Европы позволяет подключиться к Интернету в этом пункте назначения за считанные минуты. Наслаждайтесь неограниченным объемом данных на скорости 3G/4G/LTE/5G в более чем 32 европейских странах. Забудьте о роуминге или поиске SIM-карт в аэропортах, вы получаете eSIM сразу после покупки. Используйте свои любимые приложения, чтобы звонить всем своим друзьям и семье, такие как WhatsApp или iMessage, без ограничений.
                </div>
                <div className='w-full flex flex-col gap-20 p-20 rounded bg-bg'>
                    <div className='text-28 font-semibold leading-120'>Операторы в странах</div>
                    <div className='text-gray leading-120'>Скорость и покрытие зависят от оператора и доступности сети</div>
                    <table className='w-full border-collapse'>
                        <thead>
                            <tr className='leading-120 font-semibold border-t-2 border-t-[#E1E5EC]'>
                                <td className='py-10'>Страна</td>
                                <td>Операторы</td>
                                <td>Поддержка 5G</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='leading-120 border-t-2 border-t-[#E1E5EC]'>
                                <td className='py-10'>Австрия</td>
                                <td className='py-10'>Magenta</td>
                                <td>-</td>
                            </tr>
                            <tr className='leading-120 border-t-2 border-t-[#E1E5EC]'>
                                <td className='py-10'>Бельгия</td>
                                <td className='py-10'>Orange, Base</td>
                                <td>5G</td>
                            </tr>
                            <tr className='leading-120 border-t-2 border-t-[#E1E5EC]'>
                                <td className='py-10'>Болгария</td>
                                <td className='py-10'>mtel (Mobiltel EAD), Telenor, Vivacom</td>
                                <td>5G</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='w-full h-[2px] mt-40 bg-[#E1E5EC]'></div>
                <div className='py-20 flex flex-col gap-20'>
                    <div className='flex w-full p-20 flex-col gap-10 rounded bg-bg'>
                        <div className='flex gap-20 justify-between items-start'>
                            <div className='text-28 font-semibold leading-120'>Выбрите тарифный план</div>
                            <div className='flex p-[12px] justify-center items-center gap-10 rounded border-2 border-[#E1E5EC]'>
                                <div className='font-semibold'>USD ($)</div>
                                <div className='w-[6px] h-[3px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                        <path d="M7 1.5L4 4.5L1 1.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <Plan active={true} traffic={1} duration={7} price={3.90} available={true} />
                        <Plan active={false} traffic={3} duration={30} price={6.90} available={false} />
                        <Plan active={false} traffic={5} duration={30} price={9.90} available={false} />
                        <Plan active={false} traffic={10} duration={30} price={16.90} available={false} />
                        <Plan active={false} traffic={20} duration={30} price={29.90} available={false} />
                    </div>
                    <div className='grid grid-cols-5 w-full md:hidden p-20 gap-[13px] rounded bg-bg'>
                        <Method icon='stripe' />
                        <Method icon='visa' />
                        <Method icon='mastercard' />
                        <Method icon='amex' />
                        <Method icon='discover' />
                        <Method icon='o' />
                        <Method icon='jcb' />
                        <Method icon='unionpay' />
                        <Method icon='googlepay' />
                        <Method icon='applepay' />
                    </div>
                    <div className='md:static z-50 fixed left-0 bottom-[50px] w-full flex p-20 flex-wrap gap-y-20 rounded bg-bg'>
                        <div className='w-full flex gap-20 md:gap-0 flex-col md:flex-row justify-between items-start'>
                            <div className='w-full flex justify-between'>
                                <div className='flex flex-col gap-5'>
                                    <div className='text-gray font-semibold leading-120'>Итого</div>
                                    <div className='text-green text-36 font-semibold leading-120 flex items-end gap-10'>
                                        $3.90
                                        <div className='leading-120 font-semibold'>USD</div>
                                    </div>
                                </div>
                                <div className='flex md:hidden gap-10 flex-col'>
                                    <div className='text-[14px] sm:text-[16px] font-semibold leading-120'>Всего трафика: 1 ГБ</div>
                                    <div className='text-gray sm:text-[16px] text-[14px] leading-120'>Срок действия: 7 дней</div>
                                </div>
                            </div>
                            <div className='flex w-full md:w-[368px] p-[12px] justify-center items-center gap-10 rounded bg-green'>
                                <div className='w-[18px] h-[16px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                        <path d="M7 5C7 6.65685 8.34315 8 10 8C11.6569 8 13 6.65685 13 5M19 4.19995V13.8C19 14.9201 19.0002 15.4802 18.7822 15.908C18.5905 16.2844 18.2841 16.5902 17.9078 16.782C17.48 17 16.9203 17 15.8002 17H4.2002C3.08009 17 2.51962 17 2.0918 16.782C1.71547 16.5902 1.40973 16.2844 1.21799 15.908C1 15.4802 1 14.9201 1 13.8V4.19995C1 3.07985 1 2.51986 1.21799 2.09204C1.40973 1.71572 1.71547 1.40973 2.0918 1.21799C2.51962 1 3.08009 1 4.2002 1H15.8002C16.9203 1 17.48 1 17.9078 1.21799C18.2841 1.40973 18.5905 1.71572 18.7822 2.09204C19.0002 2.51986 19 3.07985 19 4.19995Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className='font-semibold text-white'>Купить</div>
                            </div>
                        </div>
                        <div className='hidden md:grid grid-cols-5 w-full flex-wrap justify-between gap-5'>
                            <Method icon='stripe' />
                            <Method icon='visa' />
                            <Method icon='mastercard' />
                            <Method icon='amex' />
                            <Method icon='discover' />
                            <Method icon='o' />
                            <Method icon='jcb' />
                            <Method icon='unionpay' />
                            <Method icon='googlepay' />
                            <Method icon='applepay' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}