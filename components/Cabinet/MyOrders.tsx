interface order {
    id: number
    name: string
    plan: string,
    count: number
    cost: string
    date: string
    status: boolean
}

export default function MyOrders({ orders }: { orders: boolean }) {
    let sample: order[] = [
        {
            id: 62841,
            name: 'eSIM для Европы',
            plan: '7 дней, 1 ГБ',
            count: 5,
            cost: '$19.50',
            date: '02.05.2023',
            status: true
        },
        {
            id: 12738,
            name: 'eSIM для Европы',
            plan: '7 дней, 1 ГБ',
            count: 5,
            cost: '$19.50',
            date: '15.11.2022',
            status: true
        }
    ]
    
    return (
        <div className='w-full p-20 gap-20 flex flex-col rounded bg-bg'>
            <div className='text-orange text-20 font-semibold leading-120'>Мои заказы</div>
            {
                orders ? (
                    <>
                        <table className='hidden sm:block w-full border-collapse'>
                            <thead>
                                <tr className='leading-120 border-t-2 border-t-[#E1E5EC]'>
                                    <td className='py-20'>Номер</td>
                                    <td>Наименование</td>
                                    <td>Тариф</td>
                                    <td>Количество</td>
                                    <td>Стоимость</td>
                                    <td>Дата оформления</td>
                                    <td>Статус заказа</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sample.map((i, index) => <tr className='leading-120 border-t-2 border-t-[#E1E5EC]' key={index}>
                                        <td className='py-20'>{i.id}</td>
                                        <td>{i.name}</td>
                                        <td>{i.plan}</td>
                                        <td>{i.count}</td>
                                        <td>{i.cost}</td>
                                        <td>{i.date}</td>
                                        <td className={`${i.status ? 'text-green': 'text-red'}`}>{i.status ? 'Завершено' : 'Не завершено'}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                        <div className='md:hidden'>
                            <div className='w-full h-[2px] bg-[#E1E5EC]'></div>
                            {sample.map((i, index) => (
                                <div key={index} className='w-full border-b-2 grid grid-cols-2 gap-10 border-b-[#E1E5EC] py-20 flex-col'>
                                    <div className='font-semibold leading-120'>{i.name}</div>
                                    <div className='leading-120 font-semibold'>{i.plan}</div>
                                    <div className='leading-120'>{i.id}</div>
                                    <div className='leading-120'>{i.date}</div>
                                    <div className={`${i.status ? 'text-green' : 'text-red'} leading-120`}>{i.status ? 'Работает' : 'Завершено'}</div>
                                </div>
                            ))}
                            <div className='sm:hidden mt-20 w-full flex p-[12px] items-center justify-center gap-10 rounded bg-[#E1E5EC]'>
                                <div className='font-semibold'>Выйти</div>
                                <img className='w-[16px]' src='images/icons/exit.svg' alt='exit' />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='w-full border border-[#E1E5EC]'></div>
                        <div className='w-full py-[50px] gap-10 flex flex-col items-center justify-center'>
                            <img className='w-[49px]' src='images/icons/emptybag.svg' alt='no orders' />
                            <div className='text-20 font-semibold leading-120'>У вас нет заказов</div>
                            <div className='flex flex-col text-center text-gray leading-150'>
                                <div>После покупки все ваши заказы будут здесь.</div>
                                <div>Вы сможете следить за статусом заказа и просмтаривать историю.</div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}