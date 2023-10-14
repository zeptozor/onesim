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
import WhyUs from "@/components/WhyUs";
import Wrapper from "@/components/Wrapper";
import Arrow from "@/components/svg/Arrow";

function Button({ text, active }: { text: string, active: boolean }) {
    return (
        <div className={`p-[12px] flex justify-center rounded ${active ? 'text-white bg-orange' : 'bg-bg'}`}>{text}</div>
    )
}

export default function Cabinet() {
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
      <div className='z-30 md:hidden fixed w-full h-[calc(100vh-50px)] top-0 left-0 bg-[rgba(0,0,0,.4)] gap-10 flex flex-col justify-end items-center'>
            <div className='w-[100px] h-[5px] rounded bg-[rgba(255,255,255,0.40)]'></div>
            <div className='w-full rounded-tr rounded-tl bg-white p-20 flex flex-col gap-20'>
                <div className='text-center font-bold text-32'>onesim</div>
                <div className='w-full bg-bg rounded flex p-[12px] justify-between items-center'>
                    <div className='text-[14px]'>Войти / Зарегистрироваться</div>
                    <Arrow />
                </div>
                <div className='w-full flex flex-col gap-10'>
                    <div className='leading-120 font-semibold'>Валюта</div>
                    <div className='w-full flex flex-wrap gap-10'>
                        <Button text='USD ($)' active={true} />
                        <Button text='EUR (€)' active={false} />
                        <Button text='GBP (£)' active={false} />
                        <Button text='CAD (€)' active={false} />
                        <Button text='AUD (€)' active={false} />
                    </div>
                </div>
                <div className='w-full flex flex-col gap-10'>
                    <div className='leading-120 font-semibold'>Язык</div>
                    <div className='w-full flex flex-wrap gap-10'>
                        <Button text='Русский' active={true} />
                        <Button text='English' active={false} />
                        <Button text='Español' active={false} />
                        <Button text='Portuguese' active={false} />
                        <Button text='Français' active={false} />
                        <Button text='Deutsch' active={false} />
                        <Button text='Қазақша' active={false} />
                        <Button text='繁體中文' active={false} />
                        <Button text='日本語' active={false} />
                        <Button text='한국어' active={false} />
                    </div>
                </div>
            </div>
      </div>
      <MobileMenu active='cabinet' />
    </div>
  )
}