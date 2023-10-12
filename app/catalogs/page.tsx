import Breadcrump from "@/components/Breadcrump";
import Head from "@/components/Catalogs/Head";
import Regions from "@/components/Catalogs/Regions";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Wrapper from "@/components/Wrapper";

export default function Catalogs() {
    return (
        <Wrapper>
            <Nav />
            <Head />
            <Breadcrump crumps={['Главная', 'Самые популярные']} />
            <Regions />
            <Footer />
        </Wrapper>
    )
}