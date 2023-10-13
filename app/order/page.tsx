import Breadcrump from "@/components/Breadcrump";
import { ContactData } from "@/components/Cabinet/Profile";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Order, { Details } from "@/components/Order/Order";
import Wrapper from "@/components/Wrapper";

export default function Caabinet() {
    return (
        <Wrapper>
            <Nav />
            <Breadcrump crumps={['Главная', 'Личный  кабинет']} />
            <div className='w-full px-20 sm:px-40 md:px-80 flex flex-col-reverse md:flex-row gap-20 my-40'>
                <div className='w-full hidden md:block'>
                    <ContactData width='100%' />
                </div>
                <div className='w-full md:hidden'>
                    <ContactData width='100%' />
                </div>
                <Order />
                <Details />
            </div>
            <Footer />
        </Wrapper>
    )
}