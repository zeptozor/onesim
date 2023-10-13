import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Wrapper from "@/components/Wrapper";
import Loupe from "@/components/svg/Loupe";

function Phone({ model, active }: { model: string, active: boolean }) {
    return (
        <div className={`py-[12px] px-20 flex items-center justify-center font-semibold rounded ${active ? 'bg-orange text-white' : 'bg-bg'}`}>
            {model}
        </div>
    )
}

function HHH({ name }: { name: string }) {
    return (
        <div className='w-full rounded bg-bg p-20 font-semibold leading-120'>
            {name}
        </div>
    )
}

export default function Devices() {
    return (
        <div>
            <Wrapper>
                <Nav />
            </Wrapper>
            <Wrapper>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='flex flex-col gap-20 px-20 sm:px-40 md:px-80 w-full md:w-1/2'>
                        <div className='flex-col flex gap-10 items-center'>
                            <div className='text-36 font-semibold leading-120 text-center'>Устройства совместимые с eSIM</div>
                            <div className='flex flex-col'>
                                <div className='leading-120 text-center'>
                                    Не все телефоны имеют совместимость с eSIM.
                                </div>
                                <div className='leading-120 text-center'>
                                    Перед покупкой убедитесь, что ваше устройство есть в этом списке и что оно не заблокировано оператором связи.
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-10 items-center'>
                            <div className='flex py-[11px] w-full px-20 gap-10 items-center justify-between bg-bg rounded'>
                                <input className='w-full text-[14px] font-semibold placeholder-black bg-inherit outline-none' placeholder='Введите модель телефона' />
                                <div className='w-[18px] h-[18px]'>
                                    <Loupe />
                                </div>
                            </div>
                            <div className='text-gray text-center leading-120'>Если после поиска вы не нашли вашу модель, то она не поддерживает eSIM.</div>
                        </div>
                        <div className='flex flex-wrap justify-center gap-10'>
                            <Phone active={true} model='Apple' />
                            <Phone active={false} model='Samsung' />
                            <Phone active={false} model='Google Pixel' />
                            <Phone active={false} model='Xiaomi' />
                            <Phone active={false} model='Huawei' />
                            <Phone active={false} model='Oppo' />
                            <Phone active={false} model='Motorola' />
                            <Phone active={false} model='Nuu Model' />
                            <Phone active={false} model='Sony' />
                        </div>
                    </div>
                    <div className='mt-40 mb-40 flex flex-col gap-20 px-20 sm:px-40 md:px-80 w-full md:w-1/2'>
                        <div className='text-center text-36 font-semibold leading-120'>Apple</div>
                        <div className='w-full flex flex-col gap-10'>
                            <HHH name='iPhone XR' />
                            <HHH name='iPhone XS / XS Max' />
                            <HHH name='iPhone 11 (модель A2221, с 2019 года) / 11 Pro' />
                            <HHH name='iPhone SE (модели начиная с 2020 года)' />
                            <HHH name='iPhone 12 / 12 mini / 12 Pro / 12 Pro Max' />
                            <HHH name='iPhone 13 / 13 Pro / 13 Pro Max' />
                            <HHH name='iPhone 14 / 14 Plus / 14 Pro / 14 Pro Max' />
                        </div>
                    </div>                
                </div>
            </Wrapper>
            <Wrapper maxw='none'>
                <Footer />
            </Wrapper>
        </div>
    )
}