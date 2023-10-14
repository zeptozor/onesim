import Breadcrump from "@/components/Breadcrump";
import Footer from "@/components/Footer";
import HowDoesItWork from "@/components/Good/HowDoesItWork";
import Info from "@/components/Good/Info";
import Map from "@/components/Good/Map";
import Reviews from "@/components/Good/Reviews";
import Feedback from "@/components/Home/Feedback";
import MobileMenu from "@/components/MobileMenu";
import Nav from "@/components/Nav";
import Questions from "@/components/Questions";
import WhyUs from "@/components/WhyUs";
import Wrapper from "@/components/Wrapper";

export default function Good() {
    return (
        <div className='pb-[226px] md:pb-0'>
            <Wrapper>
                <Nav />
            </Wrapper>
            <Wrapper>
                <Breadcrump crumps={['Главная', 'Самые популярные', 'Региональные eSIM', 'eSIM для Европы']} />
            </Wrapper>
            <Wrapper>
                <Info id='europe' />
            </Wrapper>
            <Wrapper maxw='none'>
                <Map />
            </Wrapper>
            <Wrapper>
                <HowDoesItWork region='europe' />
            </Wrapper>
            <Wrapper maxw='none'>
                <WhyUs region='для Европы' />
            </Wrapper>
            <Wrapper>
                <Questions />
            </Wrapper>
            <Wrapper maxw='none'>
                <Feedback />
            </Wrapper>
            <Wrapper maxw='none'>
                <Reviews />
            </Wrapper>
            <Footer />
            <MobileMenu active='directions' />
        </div>
    )
}