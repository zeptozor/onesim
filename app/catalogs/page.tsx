import Breadcrump from "@/components/Breadcrump";
import Head from "@/components/Catalogs/Head";
import Regions from "@/components/Catalogs/Regions";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import Nav from "@/components/Nav";
import Wrapper from "@/components/Wrapper";

export default function Catalogs() {
    return (
        <div className='pb-[50px] md:pb-0 md:min-h-screen flex flex-col justify-between'>
            <div className='flex flex-col w-full'>
                <Wrapper>
                    <Nav />
                </Wrapper>
                <Wrapper maxw='none'>
                    <Head />
                </Wrapper>
                <Wrapper>
                    <Breadcrump crumps={['Главная', 'Самые популярные']} />
                </Wrapper>
                <Wrapper>
                    <Regions />
                </Wrapper>
            </div>
            <Footer />
            <MobileMenu active='directions' />
        </div>
    )
}