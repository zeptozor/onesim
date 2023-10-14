import Breadcrump from "@/components/Breadcrump";
import MyESIMS from "@/components/Cabinet/MyESIMS";
import MyOrders from "@/components/Cabinet/MyOrders";
import PaymentMethods from "@/components/Cabinet/PaymentMethods";
import Profile from "@/components/Cabinet/Profile";
import Sidebar from "@/components/Cabinet/Sidebar";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import Nav from "@/components/Nav";
import Wrapper from "@/components/Wrapper";
import Arrow from "@/components/svg/Arrow";

function Plan({ active, traffic, duration, price, available }: { active: boolean, traffic: number, duration: number, price: number, available: boolean }) {
    return (
        <div className={`flex flex-col sm:flex-row p-20 sm:items-center justify-between flex-wrap rounded border ${ active ? 'border-green bg-[#E3F0E9]' : 'border-[#E1E5EC]' }`} style={{ boxShadow: '0px 0px 31px 0px rgba(0, 0, 0, 0.05)' }}>
            <div className='flex flex-col justify-center items-start gap-10'>
                <div className='text-20 font-semibold leading-120'>Всего трафика: {traffic} ГБ</div>
                <div className='text-gray font-semibold leading-120'>Срок действия: {duration} дней</div>
            </div>
            <div className={`mt-10 leading-120 font-600 text-green`}>${price} USD</div>
        </div>
    )
}

function Method({ icon }: { icon: string }) {
    return (
        <img className='w-[38px] h-[25px]' src={`images/paymentmethods/gray/${icon}.svg`} />
    )
}

export default function Caabinet() {
    return (
        <div className='pb-[50px] md:pb-0'>
            <Wrapper>
                <Nav />
            </Wrapper>
            <Wrapper>
                <Breadcrump crumps={['Главная', 'Личный  кабинет']} />
            </Wrapper>
            <div className='sm:hidden w-full px-20 gap-10 overflow-scroll'>
                <div className='py-[12px] px-[20px] text-white font-semibold'>Мои eSIM</div>
                <div className='py-[12px] px-[20px] font-semibold'>Личная информация</div>
                <div className='py-[12px] px-[20px] font-semibold'>Методы оплаты</div>
            </div>
            <Wrapper>
                <div className='w-full px-20 sm:px-40 md:px-80 flex gap-20 mb-[100px]'>
                    <Sidebar active='sim' />
                    <MyESIMS esims={false} />
                </div>
            </Wrapper>
            <Wrapper>
                <div className='w-full px-20 sm:px-40 md:px-80 flex gap-20 mb-[100px]'>
                    <Sidebar active='sim' />
                    <MyESIMS esims={true} />
                </div>
            </Wrapper>
            <Wrapper maxw='none'>
                <div className='w-full relative mb-[100px] py-[80px]'>
                    <div className='w-full max-w-[1500px] mx-auto px-20 sm:px-40 md:px-80 flex gap-20'>
                        <Sidebar active='sim' />
                        <MyESIMS esims={true} />
                    </div>
                    <div className='absolute px-20 sm:px-40 md:px-40 flex top-0 left-0 items-center justify-center w-full h-full bg-[rgba(0,0,0,0.40)]'>
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
                </div>
            </Wrapper>
            <Wrapper maxw='none'>
                <div className='w-full relative mb-[100px] py-[150px]'>
                    <div className='w-full max-w-[1500px] mx-auto px-20 sm:px-40 md:px-80 flex gap-20'>
                        <Sidebar active='sim' />
                        <MyESIMS esims={true} />
                    </div>
                    <div className='absolute px-20 sm:px-40 md:px-40 flex top-0 left-0 items-center justify-center w-full min-h-full bg-[rgba(0,0,0,0.40)]'>
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
                </div>
            </Wrapper>
            <Wrapper>
                <div className='w-full px-20 sm:px-40 md:px-80 flex gap-20 mb-[100px]'>
                    <Sidebar active='sim' />
                    <MyESIMS esims={'progress'} />
                </div>
            </Wrapper>
            <Wrapper maxw='none'>
                <div className='w-full relative mb-[100px]'>
                    <div className='w-full max-w-[1500px] mx-auto px-20 sm:px-40 md:px-80 flex gap-20'>
                        <Sidebar active='sim' />
                        <MyESIMS esims={'progress'} />
                    </div>
                    <div className='absolute top-0 left-0 bg-[rgba(0,0,0,0.40)] w-full h-full flex flex-col sm:flex-row items-end sm:items-start justify-end lg:pr-[calc(50%-750px)]'>
                        <div className='sm:hidden w-[100px] rounded h-[5px] bg-[rgba(255,255,255,0.40)] mx-auto mb-10'></div>
                        <div className='h-auto sm:h-full rounded-tl rounded-tr sm:rounded-tr-none sm:rounded-tl-none flex flex-col gap-20 p-20 w-full sm:w-[538px] bg-bg'>
                            <div className='w-full flex justify-between'>
                                <div className='text-32 font-semibold leading-120'>Выбрите тарифный план</div>
                                <div className='flex p-[12px] justify-center items-center gap-10 font-semibold rounded border-2 border-[#E1E5EC]'>USD ($)<Arrow /></div>
                            </div>
                            <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-20'>
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
                </div>
            </Wrapper>
            <Wrapper>
                <div className='w-full px-20 sm:px-40 md:px-80 flex gap-20 mb-[100px]'>
                    <Sidebar active='id' />
                    <Profile />
                </div>
            </Wrapper>
            <Wrapper>
                <div className='w-full px-20 sm:px-40 md:px-80 flex gap-20 mb-[100px]'>
                    <Sidebar active='co' />
                    <PaymentMethods />
                </div>
            </Wrapper>
            <Wrapper>
                <div className='w-full px-20 sm:px-40 md:px-80 flex gap-20 mb-[100px]'>
                    <Sidebar active='bag' />
                    <MyOrders orders={false} />
                </div>
            </Wrapper>
            <Wrapper>
                <div className='w-full px-20 sm:px-40 md:px-80 flex gap-20 mb-[100px]'>
                    <Sidebar active='bag' />
                    <MyOrders orders={true} />
                </div>
            </Wrapper>
            <Wrapper maxw='none'>
                <div className='w-full bg-bg'>
                    <Footer />
                </div>
            </Wrapper>
            <MobileMenu active='cabinet' />
        </div>
    )
}