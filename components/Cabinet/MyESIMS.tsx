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



function ProgressBar({ value, content, max }: { value: number, content: string, max?: string }) {
    return (
        <div className='block relative w-full h-[30px]'>
            <span className={`absolute h-full flex items-center justify-center text-white ${value != 0 ? 'bg-orange' : 'bg-[#E1E5EC]'} rounded`} style={{ width: `${value != 0 ? value : '100'}%` }}>{content}</span>
            <span className={`absolute h-full flex items-center top-0 right-[20px] leading-120 ${(value == 100 || value == 0) && 'hidden'}`}>{max}</span>
            <progress max={100} value={value} />
        </div>
    )
}



export default function MyESIMS({ esims }: { esims: boolean | 'progress' }) {
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
    if (esims == 'progress') {
        return <div className='w-full flex flex-col gap-20'>
            <div className='w-full flex flex-col gap-20'>
                <div>Назад</div>
                <div className='text-orange rounded bg-bg font-semibold leading-120 text-20 w-full py-[17px] px-20'>eSIM для Европы</div>
                <div className='w-full flex p-20 rounded bg-bg gap-20 flex-col'>
                    <div className='w-full flex justify-between items-center'>
                        <div className='leading-120'>Ваш eSIM будет работать еще</div>
                        <div className='hidden sm:block text-gray font-semibold text-[14px] p-[12px] min-w-max rounded bg-[#E1E5EC]'>Активировать</div>
                    </div>
                    <div className='text-green leading-120'>4 дня</div>
                    <div className='w-full flex flex-col gap-10'>
                        <div className='font-semibold leading-120'>Остаток трафика в вашем eSIM</div>
                        <ProgressBar value={32.5} content="325 MB" max='1500MB' />
                    </div>
                    <div className='sm:hidden text-gray font-semibold text-[14px] p-[12px] w-full rounded bg-[#E1E5EC]'>Активировать</div>
                </div>
                <div className='w-full flex p-20 rounded bg-bg gap-20 flex-col'>
                    <div className='w-full flex justify-between items-center'>
                        <div className='leading-120 text-gray'>Ваш eSIM активируется после того, как закончится первый трафик</div>
                        <div className='hidden sm:block text-gray font-semibold text-[14px] p-[12px] min-w-max rounded bg-[#E1E5EC]'>Активировать</div>
                    </div>
                    <div className='text-gray leading-120'>30 дней</div>
                    <div className='w-full flex flex-col gap-10'>
                        <div className='font-semibold leading-120 text-gray'>Остаток трафика в вашем eSIM</div>
                        <ProgressBar value={100} content='3000 MB' max='5000MB' />
                    </div>
                    <div className='sm:hidden text-gray font-semibold text-[14px] p-[12px] w-full rounded bg-[#E1E5EC]'>Активировать</div>
                </div>
                <div className='w-full flex p-20 rounded bg-bg gap-20 flex-col'>
                    <div className='leading-120 text-gray'>Ваш eSIM деактивирован</div>
                    <div className='text-gray leading-120'>0 дней</div>
                    <div className='w-full flex flex-col gap-10'>
                        <div className='font-semibold leading-120 text-gray'>Остаток трафика в вашем eSIM</div>
                        <ProgressBar value={0} content='0 MB' max='1000MB' />
                    </div>
                </div>
                <div className='py-10 px-20 rounded bg-bg flex flex-col sm:flex-row justify-between w-full gap-20'>
                    <span className='text-[14px] leading-120 w-full md:w-[470px]'>Если этого недостаточно, вам не нужно удалять этот eSIM и покупать новый, вы можете купить дополнительный трафик для вашей eSIM.</span>
                    <div className='rounded px-20 py-[12px] bg-green min-w-max text-[14px] font-semibold text-white'>Купить трафик</div>
                </div>
            </div>
        </div>
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