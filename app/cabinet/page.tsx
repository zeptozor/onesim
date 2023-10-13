import Breadcrump from "@/components/Breadcrump";
import MyESIMS from "@/components/Cabinet/MyESIMS";
import MyOrders from "@/components/Cabinet/MyOrders";
import PaymentMethods from "@/components/Cabinet/PaymentMethods";
import Profile from "@/components/Cabinet/Profile";
import Sidebar from "@/components/Cabinet/Sidebar";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Wrapper from "@/components/Wrapper";

export default function Caabinet() {
    return (
        <Wrapper>
            <Nav />
            <Breadcrump crumps={['Главная', 'Личный  кабинет']} />
            {/* <div className='w-full px-20 sm:px-40 md:px-80 flex gap-20 mt-40 mb-40'>
                <Sidebar active='sim' />
                <MyESIMS esims={false} />
            </div>
            <div className='w-full px-20 sm:px-40 md:px-80 flex gap-20 mt-40 mb-40'>
                <Sidebar active='sim' />
                <MyESIMS esims={true} />
            </div>
            <div className='w-full relative px-20 sm:px-40 md:px-80 flex gap-20 mt-40 mb-40'>
                <Sidebar active='sim' />
                <MyESIMS esims={true} />
                <div className='absolute px-20 sm:px-40 md:px-40 flex top-0 left-0 items-center justify-center w-full h-full bg-gray bg-opacity-50'>
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
            <div className='w-full relative px-20 sm:px-40 md:px-80 flex gap-20 mt-40 mb-40'>
            <Sidebar active='sim' />
                <MyESIMS esims={true} />
                <div className='absolute px-20 sm:px-40 md:px-40 flex top-0 left-0 items-center justify-center w-full min-h-full bg-gray bg-opacity-50'>
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
            </div> */}
            <div className='w-full px-20 sm:px-40 md:px-80 flex gap-20 mt-40 mb-40'>
                <Sidebar active='sim' />
                <MyESIMS esims={'progress'} />
            </div>
            {/* <div className='w-full px-20 sm:px-40 md:px-80 flex gap-20 mt-40 mb-40'>
                <MyESIMS esims={'plan'} />
            </div>
            <div className='w-full px-20 sm:px-40 md:px-80 flex gap-20 mt-40 mb-40'>
                <Sidebar active='id' />
                <Profile />
            </div>
            <div className='w-full px-20 sm:px-40 md:px-80 flex gap-20 mt-40 mb-40'>
                <Sidebar active='co' />
                <PaymentMethods />
            </div>
            <div className='w-full px-20 sm:px-40 md:px-80 flex gap-20 mt-40 mb-40'>
                <Sidebar active='bag' />
                <MyOrders orders={false} />
            </div>
            <div className='w-full px-20 sm:px-40 md:px-80 flex gap-20 mt-40 mb-40'>
                <Sidebar active='bag' />
                <MyOrders orders={true} />
            </div> */}
            <Footer />
        </Wrapper>
    )
}