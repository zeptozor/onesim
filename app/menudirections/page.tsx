import Footer from "@/components/Footer";
import Advantages from "@/components/Home/Advantages";
import Feedback from "@/components/Home/Feedback";
import Head from "@/components/Home/Head";
import HowDoesItWork from "@/components/Home/HowDoesItWork";
import Offers from "@/components/Home/Offers";
import PaymentMethods from "@/components/Home/PaymentMethods";
import Regions from "@/components/Home/Regions";
import MobileMenu from "@/components/MobileMenu";
import Nav from "@/components/Nav";
import Questions from "@/components/Questions";
import Region from "@/components/Region";
import WhyUs from "@/components/WhyUs";
import Wrapper from "@/components/Wrapper";
import Arrow from "@/components/svg/Arrow";

function Offer({ bg, heading, description }: { bg: string, heading: string, description: string }) {
    return (
        <div className='w-full h-[208px]'>
            <div className='w-full h-full rounded' style={{ background: `url('images/offers/${bg}.png'), lightgray 50% / cover no-repeat`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='flex flex-col justify-end w-full h-full gap-10 rounded p-20' style={{ background: 'linear-gradient(90deg, #031D22 0%, rgba(1, 30, 36, 0.00) 100%)' }}>
                    <div className='text-white font-semibold leading-120'>onesim</div>
                    <div className='text-white font-semibold text-26 leading-120'>{heading}</div>
                    <div className='leading-120 text-white'>{description}</div>
                </div>
            </div>
        </div>
    )
}

export default function Directions() {
  return (
    <div className='pb-[50px] relative md:pb-0'>
      <Wrapper>
        <Nav />
      </Wrapper>
      <Wrapper maxw='none'>
        <Head />
      </Wrapper>
      <Wrapper maxw='none'>
        <Regions />
      </Wrapper>
      <Wrapper maxw='none'>
        <Advantages />
      </Wrapper>
      <Wrapper>
        <Offers />
      </Wrapper>
      <Wrapper maxw='none'>
        <WhyUs />
      </Wrapper>
      <Wrapper>
        <HowDoesItWork />
      </Wrapper>
      <Wrapper maxw='none'>
        <PaymentMethods />
      </Wrapper>
      <Wrapper>
        <Questions />
      </Wrapper>
      <Wrapper maxw='none'>
        <Feedback />
      </Wrapper>
      <Wrapper maxw='none'>
        <Footer />
      </Wrapper>
      <div className='z-30 md:hidden fixed w-full h-[calc(100vh-50px)] top-0 left-0 bg-[rgba(0,0,0,.4)] pt-20 gap-10 flex flex-col justify-end items-center'>
            <div className='w-[100px] h-[5px] rounded bg-[rgba(255,255,255,0.40)]'></div>
            <div className='w-full max-h-full overflow-scroll rounded-tr rounded-tl bg-white p-20 flex flex-col gap-20'>
                <div className='text-28 font-semibold leading-120'>Направления</div>
                <div className='flex flex-col gap-10'>
                    <div className='font-semibold leading-120'>Самые популярные</div>
                    <div className='py-[5px] flex justify-between'>
                        <div className='text-gray leading-120 text-[14px]'>Франция</div>
                        <Arrow />
                    </div>
                    <div className='py-[5px] flex justify-between'>
                        <div className='text-gray leading-120 text-[14px]'>Испания</div>
                        <Arrow />
                    </div>
                    <div className='py-[5px] flex justify-between'>
                        <div className='text-gray leading-120 text-[14px]'>Турция</div>
                        <Arrow />
                    </div>
                    <div className='py-[5px] flex justify-between'>
                        <div className='text-blue font-semibold leading-120 text-[14px]'>Все популярные</div>
                        <Arrow />
                    </div>
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='font-semibold leading-120'>Региональные eSIM</div>
                    <div className='py-[5px] flex justify-between'>
                        <div className='text-gray leading-120 text-[14px]'>Европа</div>
                        <Arrow />
                    </div>
                    <div className='py-[5px] flex justify-between'>
                        <div className='text-gray leading-120 text-[14px]'>Ближний Восток</div>
                        <Arrow />
                    </div>
                    <div className='py-[5px] flex justify-between'>
                        <div className='text-gray leading-120 text-[14px]'>США и Мексика</div>
                        <Arrow />
                    </div>
                    <div className='py-[5px] flex justify-between'>
                        <div className='text-blue font-semibold leading-120 text-[14px]'>Все региональные тарифы</div>
                        <Arrow />
                    </div>
                </div>
                <Offer bg='europe' heading='-30% для Европы' description='Охватывают 38 стран' />
                <div className='flex flex-col gap-10'>
                    <div className='font-semibold leading-120'>Локальные eSIM</div>
                    <div className='py-[5px] flex justify-between'>
                        <div className='text-gray leading-120 text-[14px]'>Германия</div>
                        <Arrow />
                    </div>
                    <div className='py-[5px] flex justify-between'>
                        <div className='text-gray leading-120 text-[14px]'>Великобритания</div>
                        <Arrow />
                    </div>
                    <div className='py-[5px] flex justify-between'>
                        <div className='text-gray leading-120 text-[14px]'>Австрия</div>
                        <Arrow />
                    </div>
                    <div className='py-[5px] flex justify-between'>
                        <div className='text-gray leading-120 text-[14px]'>Греция</div>
                        <Arrow />
                    </div>
                    <div className='py-[5px] flex justify-between'>
                        <div className='text-gray leading-120 text-[14px]'>Португалия</div>
                        <Arrow />
                    </div>
                    <div className='py-[5px] flex justify-between'>
                        <div className='text-gray leading-120 text-[14px]'>Россия</div>
                        <Arrow />
                    </div>
                    <div className='py-[5px] flex justify-between'>
                        <div className='text-gray leading-120 text-[14px]'>Гонконг</div>
                        <Arrow />
                    </div>
                    <div className='py-[5px] flex justify-between'>
                        <div className='text-gray leading-120 text-[14px]'>Польша</div>
                        <Arrow />
                    </div>
                    <div className='py-[5px] flex justify-between'>
                        <div className='text-gray leading-120 text-[14px]'>Нидерланды</div>
                        <Arrow />
                    </div>
                    <div className='py-[5px] flex justify-between'>
                        <div className='text-blue font-semibold leading-120 text-[14px]'>Все локальные тарифы</div>
                        <Arrow />
                    </div>
                </div>
            </div>
      </div>
      <MobileMenu active='directions' />
    </div>
  )
}