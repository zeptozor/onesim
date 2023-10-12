import { Field, Payment } from "../Cabinet/PaymentMethods";

function Method({ icon }: { icon: string }) {
    return (
        <img className='w-[38px] h-[25px]' src={`images/paymentmethods/gray/${icon}.svg`} />
    )
}

export default function Order({ variant }: { variant: '1' | '2' | '3' }) {
    if (variant == '1') {
        return (
            <div className='w-full flex gap-20'>
                <div className='w-full flex flex-col gap-20'>
                    <div className='flex flex-col rounded bg-bg p-20 gap-20'>
                        <div className='text-20 font-semibold'>Платежная информация</div>
                        <div className='text-gray text-[14px] leading-150'>При оплате криптовалютой (Bitcoin, Ethereum, Tether и др.) вы получите скидку -5%</div>
                    </div>
                    <div className='flex flex-col rounded bg-bg p-20 gap-20'>
                        <div className='w-full flex flex-col p-20 gap-20 bg-[#EEF0F4] rounded'>
                            <div className='font-semibold text-20'>Банковская карта</div>
                            <Field active={false} label='Номер карты' value='7461 2412 9481 2456' />
                            <div className='flex gap-20'>
                                <Field active={false} label='Дата окончания действия' value='02/24' />
                                <Field active={false} label='CVC' value='...' />
                            </div>
                            <div className='w-full flex items-center justify-center p-[12px] font-semibold rounded bg-orange text-white'>Добавить</div>
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
                        <div className='w-full flex flex-col p-20 gap-20 bg-[#EEF0F4] rounded'>
                            <div className='font-semibold'>Криптовалюта</div>
                            <div className='leading-150'>Вы будете перенаправлены на форму оплаты <span className='text-blue font-semibold lead'>Coinbase</span>, где вы сможете оплатить через Bitcoin, Bitcoin Cash, Dai, Dogecoin, Ethereum, Litecoin, SHIBA INU, Tether или USD Coin.</div>
                        </div>
                    </div>
                    <div className='rounded bg-green p-[12px] flex justify-center items-center w-full text-white font-semibold'>Оплатить</div>
                </div>
                <div className='w-2/3 p-20 flex flex-col gap-20 rounded bg-bg'>
                    <div className='text-20 font-semibold leading-120'>Ваш заказ</div>
                    <div className='border-t-2 border-b-2 border-[#E1E5EC] w-full flex flex-col py-20 gap-10'>
                        <div className='w-full flex justify-between'>
                            <div className='leading-120 font-semibold'>eSIM для Европы</div>
                            <div className='leading-120 font-semibold'>X1</div>
                        </div>
                        <div className='text-gray leading-120'>7 дней, 1 ГБ</div>
                        <div className='text-green leading-120 font-semibold'>$3.90 USD</div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='text-gray text-20 leading-120 font-semibold'>Итого</div>
                        <div className='flex gap-10 font-semibold leading-120'>
                            <div className='text-20 text-green'>$3.90</div>
                            <div className='text-[14px]'>USD</div>
                        </div>
                    </div>
                    <div className='border-t-2 border-b-2 border-[#E1E5EC] w-full flex flex-col py-20 gap-20'>
                        <div className='font-semibold'>Купон</div>
                        <div className='w-full pl-10 flex gap-10 rounded border-2 border-[#E1E5EC]'>
                            <input className='w-full bg-inherit outline-none appearance-none placeholder:text-gray placeholder:text-[14px]' placeholder='Купон на скидку' />
                            <div className='w-full p-[12px] flex items-center justify-center rounded bg-green text-white'>Активировать</div>
                        </div>
                        <div className='w-full pl-10 flex gap-10 rounded border-2 border-[#E1E5EC]'>
                            <input className='w-full bg-inherit outline-none appearance-none placeholder:text-gray placeholder:text-[14px] text-orange text-[14px] font-semibold p-[12px]' value='UysAw21' placeholder='Купон на скидку' />
                        </div>
                        <div className='flex justify-between'>
                            <div className='text-gray leading-150 text-[14px]'>Ваш купон активирован</div>
                            <div className='text-orange text-[14px] font-semibold leading-150'>-15%</div>
                        </div>
                    </div>
                    <div className='flex items-center w-full gap-10'>
                        <div className='w-[18px] h-[18px] bg-gray'></div>
                        <div className='text-gray text-[14px] leading-120'>QR-код будет немедленно отправлен по электронной почте</div>
                    </div>
                    <div className='flex items-center w-full gap-10'>
                        <div className='w-[18px] h-[18px] bg-gray'></div>
                        <div className='text-gray text-[14px] leading-120'>Безопасная оплата</div>
                    </div>
                    <div className='flex items-center w-full gap-10'>
                        <div className='w-[18px] h-[18px] bg-gray'></div>
                        <div className='text-gray text-[14px] leading-120'>Популярный продукт</div>
                    </div>
                </div>
            </div>
        )
    }
}