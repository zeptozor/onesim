import Breadcrump from "@/components/Breadcrump";
import Head from "@/components/Catalogs/Head";
import Regions from "@/components/Catalogs/Regions";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import Nav from "@/components/Nav";
import Wrapper from "@/components/Wrapper";

export default function Catalogs() {
    return (
        <div>
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
            <Wrapper maxw='none'>
                <Footer />
            </Wrapper>
        </div>
    )
}