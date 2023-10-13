import Greeting from "./Greeting";
import Sidebar from "./Sidebar";

interface esim {
    name: string
    plan: string
    expire: string
    status: boolean
    gbs: string
    additionally: boolean
    activation: boolean
}

function Method({ icon }: { icon: string }) {
    return (
        <img className='w-[38px] h-[25px]' src={`images/paymentmethods/gray/${icon}.svg`} />
    )
}

function ProgressBar({ value, content, max }: { value: number, content: string, max?: string }) {
    return (
        <div className='block relative w-full sm:h-[20px] h-[30px]'>
            <span className={`absolute h-full flex items-center justify-center text-white ${value != 0 ? 'bg-orange' : 'bg-[#E1E5EC]'} rounded`} style={{ width: `${value != 0 ? value : '100'}%` }}>{content}</span>
            <span className={`absolute h-full flex items-center top-0 right-[20px] leading-120 ${(value == 100 || value == 0) && 'hidden'}`}>{max}</span>
            <progress max={100} value={value} />
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
            <div className={`mt-10 leading-120 font-600 text-green`}>${price} USD</div>
        </div>
    )
}

export default function MyESIMS({ esims }: { esims: boolean | 'activation' | 'activation1' | 'progress' | 'plan' }) {
    let sample: esim[] = [
        {
            name: 'eSIM для Европы',
            plan: '7 дней, 1 ГБ',
            expire: '0 дней',
            status: false,
            gbs: '0 МБ',
            additionally: false,
            activation: false
        },
        {
            name: 'eSIM для Европы',
            plan: '7 дней, 1 ГБ',
            expire: '4 дня',
            status: true,
            gbs: '325 МБ',
            additionally: true,
            activation: false
        }
    ]
    if (esims == 'plan') {
        return <div className='relative w-full flex flex-col gap-20'>
            <div className='z-10 absolute bg-gray bg-opacity-50 w-full h-full flex justify-end'>
                <div className='h-full flex flex-col gap-20 p-20 w-[538px] bg-bg'>
                    <div className='w-full flex justify-between'>
                        <div className='text-32 font-semibold leading-120'>Выбрите тарифный план</div>
                        <div className='p-[12px] justify-center items-center gap-10 font-semibold'>USD ($)</div>
                    </div>
                    <div className='w-full grid grid-cols-2 gap-20'>
                        <Plan active={true} traffic={1} duration={7} price={3.90} available={true} />
                        <Plan active={false} traffic={3} duration={30} price={6.90} available={false} />
                        <Plan active={false} traffic={5} duration={30} price={9.90} available={false} />
                    </div>
                    <div className='flex w-full p-[12px] justify-center items-center gap-10 rounded bg-green'>
                        <div className='w-[18px] h-[16px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M7 5C7 6.65685 8.34315 8 10 8C11.6569 8 13 6.65685 13 5M19 4.19995V13.8C19 14.9201 19.0002 15.4802 18.7822 15.908C18.5905 16.2844 18.2841 16.5902 17.9078 16.782C17.48 17 16.9203 17 15.8002 17H4.2002C3.08009 17 2.51962 17 2.0918 16.782C1.71547 16.5902 1.40973 16.2844 1.21799 15.908C1 15.4802 1 14.9201 1 13.8V4.19995C1 3.07985 1 2.51986 1.21799 2.09204C1.40973 1.71572 1.71547 1.40973 2.0918 1.21799C2.51962 1 3.08009 1 4.2002 1H15.8002C16.9203 1 17.48 1 17.9078 1.21799C18.2841 1.40973 18.5905 1.71572 18.7822 2.09204C19.0002 2.51986 19 3.07985 19 4.19995Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className='font-semibold text-white'>Купить</div>
                    </div>
                    <div className='flex w-full justify-between gap-10'>
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
            <Sidebar active='sim' />
            <div className='w-full flex flex-col gap-20'>
                <div>Назад</div>
                <div className='text-orange rounded bg-bg font-semibold leading-120 text-20 w-full py-[17px] px-20'>eSIM для Европы</div>
                <div className='w-full flex p-20 rounded bg-bg gap-20 flex-col'>
                    <div className='leading-120'>Ваш eSIM будет работать еще</div>
                    <div className='text-green leading-120'>4 дня</div>
                    <div className='w-full flex flex-col gap-10'>
                        <div className='font-semibold leading-120'>Остаток трафика в вашем eSIM</div>
                        <ProgressBar value={32.5} content="325 MB" />
                    </div>
                </div>
                <div className='w-full flex p-20 rounded bg-bg gap-20 flex-col'>
                    <div className='leading-120 text-gray'>Ваш eSIM активируется после того, как закончится первый трафик</div>
                    <div className='text-gray leading-120'>30 дней</div>
                    <div className='w-full flex flex-col gap-10'>
                        <div className='font-semibold leading-120 text-gray'>Остаток трафика в вашем eSIM</div>
                        <ProgressBar value={100} content='3000 MB' />
                    </div>
                </div>
                <div className='w-full flex p-20 rounded bg-bg gap-20 flex-col'>
                    <div className='leading-120 text-gray'>Ваш eSIM деактивирован</div>
                    <div className='text-gray leading-120'>0 дней</div>
                    <div className='w-full flex flex-col gap-10'>
                        <div className='font-semibold leading-120 text-gray'>Остаток трафика в вашем eSIM</div>
                        <ProgressBar value={0} content='0 MB' />
                    </div>
                </div>
                <div className='py-10 px-20 rounded bg-bg text-[14px] leading-120'>Если этого недостаточно, вам не нужно удалять этот eSIM и покупать новый, вы можете купить дополнительный трафик для вашей eSIM.</div>
            </div>
        </div>
    }
    if (esims == 'progress') {
        return <div className='w-full flex flex-col gap-20'>
            <div className='w-full flex flex-col gap-20'>
                <div>Назад</div>
                <div className='text-orange rounded bg-bg font-semibold leading-120 text-20 w-full py-[17px] px-20'>eSIM для Европы</div>
                <div className='w-full flex p-20 rounded bg-bg gap-20 flex-col'>
                    <div className='leading-120'>Ваш eSIM будет работать еще</div>
                    <div className='text-green leading-120'>4 дня</div>
                    <div className='w-full flex flex-col gap-10'>
                        <div className='font-semibold leading-120'>Остаток трафика в вашем eSIM</div>
                        <ProgressBar value={32.5} content="325 MB" max='1500MB' />
                    </div>
                </div>
                <div className='w-full flex p-20 rounded bg-bg gap-20 flex-col'>
                    <div className='leading-120 text-gray'>Ваш eSIM активируется после того, как закончится первый трафик</div>
                    <div className='text-gray leading-120'>30 дней</div>
                    <div className='w-full flex flex-col gap-10'>
                        <div className='font-semibold leading-120 text-gray'>Остаток трафика в вашем eSIM</div>
                        <ProgressBar value={100} content='3000 MB' max='5000MB' />
                    </div>
                </div>
                <div className='w-full flex p-20 rounded bg-bg gap-20 flex-col'>
                    <div className='leading-120 text-gray'>Ваш eSIM деактивирован</div>
                    <div className='text-gray leading-120'>0 дней</div>
                    <div className='w-full flex flex-col gap-10'>
                        <div className='font-semibold leading-120 text-gray'>Остаток трафика в вашем eSIM</div>
                        <ProgressBar value={0} content='0 MB' max='1000MB' />
                    </div>
                </div>
                <div className='py-10 px-20 rounded bg-bg text-[14px] leading-120'>Если этого недостаточно, вам не нужно удалять этот eSIM и покупать новый, вы можете купить дополнительный трафик для вашей eSIM.</div>
            </div>
        </div>
    }
    if (esims == 'activation1') {
        return (
            <div className='w-full h-screen relative flex flex-col gap-20'>
                <div className='absolute flex items-center justify-center w-full h-full bg-gray bg-opacity-50'>
                    <div className='w-[387px] p-20 flex flex-col gap-20 bg-white rounded'>
                        <div className='text-20 font-semibold'>Активация eSIM для Европы</div>
                        <div className='text-20 font-semibold'>Инструкция по активации</div>
                        <div className='flex flex-col gap-10'>
                            <div className='text-gray text-[10px]'>Первый шаг</div>
                            <div className='text-[14px] font-semibold leading-150'>Откройте «Настройки» «Сотовая связь» «Добавить тарифный план сотовой связи»</div>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <div className='text-gray text-[10px]'>Второй шаг</div>
                            <div className='text-[14px] font-semibold leading-150'>Следуйте инструкциям на экране для установки</div>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <div className='text-gray text-[10px]'>Третий шаг</div>
                            <div className='text-[14px] font-semibold leading-150'>Отсканируйте QR-код, когда появится запрос</div>
                        </div>
                        <div className='text-20 font-semibold'>Доступ к данным</div>
                        <div className='flex flex-col gap-10'>
                            <div className='text-gray text-[10px]'>Сроки действия</div>
                            <div className='text-[14px] font-semibold leading-150'>Срок действия пакета начнет отсчитываться после того, как вы начнете использовать данные.</div>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <div className='text-gray text-[10px]'>Первый шаг</div>
                            <div className='text-[14px] font-semibold leading-150'>Откройте «Настройки» «Сотовая связь» «Добавить тарифный план сотовой связи»</div>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <div className='text-gray text-[10px]'>Второй шаг</div>
                            <div className='text-[14px] font-semibold leading-150'>Следуйте инструкциям на экране для установки</div>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <div className='text-gray text-[10px]'>Третий шаг</div>
                            <div className='text-[14px] font-semibold leading-150'>Отсканируйте QR-код, когда появится запрос</div>
                        </div>
                        <div className='text-white font-semibold bg-orange rounded p-[12px] flex items-center justify-center'>Закрыть</div>
                    </div>
                </div>
                <Sidebar active='sim' />
                <Greeting />
                <div className='w-full flex flex-col gap-20 p-20 rounded bg-bg'>
                    <div className='text-20 text-orange font-semibold leading-120'>Мои eSIM</div>
                        <table className='w-full border-collapse'>
                            <thead>
                                <tr className='leading-120 border-t-2 border-t-[#E1E5EC]'>
                                    <td className='py-20 px-5'>Наименование</td>
                                    <td>Тариф</td>
                                    <td>Остаток</td>
                                    <td>Статус</td>
                                    <td>Остаток трафика</td>
                                    <td>Доп. трафик</td>
                                    <td>Активация</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sample.map((i, index) => <tr className='leading-120 border-t-2 border-t-[#E1E5EC]' key={index}>
                                        <td className='py-20'>{i.name}</td>
                                        <td>{i.plan}</td>
                                        <td>{i.expire}</td>
                                        <td className={`${i.status ? 'text-green': 'text-red'}`}>{i.status ? 'Работает' : 'Завершено'}</td>
                                        <td>{i.gbs}</td>
                                        <td className='pr-5'><div className={`p-[12px] flex items-center justify-center rounded ${!i.status ? 'text-gray bg-[#E1E5EC]': 'text-white bg-green'}`}>Купить трафик</div></td>
                                        <td><div className={`p-[12px] flex items-center justify-center rounded ${!i.activation ? 'text-gray bg-[#E1E5EC]': 'text-white bg-green'}`}>Активировать</div></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                </div>
            </div>
        )
    }
    if (esims == 'activation') {
        return (
            <div className='w-full h-screen relative flex flex-col gap-20'>
                <div className='absolute flex items-center justify-center w-full h-full bg-gray bg-opacity-50'>
                    <div className='w-[387px] p-20 flex flex-col gap-20 bg-white rounded'>
                        <div className='text-20 font-semibold'>Активация eSIM для Европы</div>
                        <table>
                            <thead>
                                <tr className='text-gray'>
                                    <td className='text-[10px]'>Наименование</td>
                                    <td className='text-[10px]'>Трафик</td>
                                    <td className='text-[10px]'>Срок</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>eSIM для Европы</td>
                                    <td>1 ГБ</td>
                                    <td>7 дней</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='text-[14px] leading-150'>Распечатайте или передайте QR-код на другое устройство, чтобы отсканировать его и установить eSIM. Убедитесь, что ваше интернет соединение стабильное и работает исправно. Ниже можете ознакомиться с подробной инструкцией по установке eSIM.</div>
                        <div className='w-[129px] h-[129px] bg-black mx-auto'></div>
                        <div className='text-white font-semibold bg-orange rounded p-[12px] flex items-center justify-center'>Передать QR</div>
                        <div className='text-20 font-semibold'>Инструкция по активации</div>
                        <div className='text-white font-semibold bg-orange rounded p-[12px] flex items-center justify-center'>Закрыть</div>
                    </div>
                </div>
                <Sidebar active='sim' />
                <Greeting />
                <div className='w-full flex flex-col gap-20 p-20 rounded bg-bg'>
                    <div className='text-20 text-orange font-semibold leading-120'>Мои eSIM</div>
                        <table className='w-full border-collapse'>
                            <thead>
                                <tr className='leading-120 border-t-2 border-t-[#E1E5EC]'>
                                    <td className='py-20 px-5'>Наименование</td>
                                    <td>Тариф</td>
                                    <td>Остаток</td>
                                    <td>Статус</td>
                                    <td>Остаток трафика</td>
                                    <td>Доп. трафик</td>
                                    <td>Активация</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sample.map((i, index) => <tr className='leading-120 border-t-2 border-t-[#E1E5EC]' key={index}>
                                        <td className='py-20'>{i.name}</td>
                                        <td>{i.plan}</td>
                                        <td>{i.expire}</td>
                                        <td className={`${i.status ? 'text-green': 'text-red'}`}>{i.status ? 'Работает' : 'Завершено'}</td>
                                        <td>{i.gbs}</td>
                                        <td className='pr-5'><div className={`p-[12px] flex items-center justify-center rounded ${!i.status ? 'text-gray bg-[#E1E5EC]': 'text-white bg-green'}`}>Купить трафик</div></td>
                                        <td><div className={`p-[12px] flex items-center justify-center rounded ${!i.activation ? 'text-gray bg-[#E1E5EC]': 'text-white bg-green'}`}>Активировать</div></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                </div>
            </div>
        )
    }
    return (
        <div className='w-full flex flex-col gap-20'>
            <Greeting />
            <div className='w-full flex flex-col gap-20 p-20 rounded bg-bg'>
                <div className='text-20 text-orange font-semibold leading-120'>Мои eSIM</div>
                {
                    esims ? (
                        <>
                            <table className='hidden md:inline-table w-full border-collapse'>
                                <thead>
                                    <tr className='leading-120 border-t-2 border-t-[#E1E5EC]'>
                                        <td className='py-20'>Наименование</td>
                                        <td>Тариф</td>
                                        <td>Остаток</td>
                                        <td>Статус</td>
                                        <td>Остаток трафика</td>
                                        <td>Доп. трафик</td>
                                        <td>Активация</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        sample.map((i, index) => <tr className={`leading-120 border-t-2 border-t-[#E1E5EC] ${index % 2 == 0 && 'bg-[#EBEDF0]'}`} key={index}>
                                            <td className='py-20'>{i.name}</td>
                                            <td>{i.plan}</td>
                                            <td>{i.expire}</td>
                                            <td className={`${i.status ? 'text-green': 'text-red'}`}>{i.status ? 'Работает' : 'Завершено'}</td>
                                            <td>{i.gbs}</td>
                                            <td className='pr-5'><div className={`p-[12px] flex items-center justify-center rounded ${!i.status ? 'text-gray bg-[#E1E5EC]': 'text-white bg-green'}`}>Купить трафик</div></td>
                                            <td><div className={`p-[12px] flex items-center justify-center rounded ${!i.activation ? 'text-gray bg-[#E1E5EC]': 'text-white bg-green'}`}>Активировать</div></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                            <div className='md:hidden'>
                                {sample.map((i, index) => (
                                    <div key={index} className='w-full border-t-2 border-t-[#E1E5EC] py-20 flex flex-col gap-20'>
                                        <div className='w-full grid grid-cols-2 gap-10'>
                                            <div className='font-semibold leading-120'>{i.name}</div>
                                            <div className='leading-120 font-semibold'>{i.plan}</div>
                                            <div className='leading-120'>Осталось</div>
                                            <div className={`${i.status ? 'text-green' : 'text-red'} leading-120`}>{i.expire}, {i.gbs}</div>
                                            <div className={`${i.status ? 'text-green' : 'text-red'} leading-120`}>{i.status ? 'Работает' : 'Завершено'}</div>
                                        </div>
                                        <div className='w-full grid grid-cols-2 gap-10'>
                                            <div className={`p-[12px] flex items-center justify-center rounded ${!i.status ? 'text-gray bg-[#E1E5EC]': 'text-white bg-green'}`}>Купить трафик</div>
                                            <div className={`p-[12px] flex items-center justify-center rounded ${!i.activation ? 'text-gray bg-[#E1E5EC]': 'text-white bg-green'}`}>Активировать</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='text-[14px] leading-120'>Если у вас осталось мало трафика, вам не нужно удалять eSIM и покупать новый, вы можете купить дополнительный трафик для вашей eSIM на соответствующей странице, кликнув на наименование или нажав на кнопку покупки.</div>
                        </>
                    ) : (
                        <>
                            <div className='w-full border border-[#E1E5EC]'></div>
                            <div className='w-full flex flex-col py-40 gap-10 items-center justify-center'>
                                <img className='w-[53px]' src='images/icons/noesim.svg' alt='noesim' />
                                <div className='text-20 font-semibold leading-120'>У вас нет eSIM</div>
                                <div className='text-center'>
                                    <div className='text-gray leading-150'>После покупки все ваши eSIM будут показываться здесь.</div>
                                    <div className='text-gray leading-150'>Для активации или пополнения трафика вы можете управлять своими eSIM с помощью этого окна.</div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}