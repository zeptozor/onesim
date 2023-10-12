import Breadcrump from "@/components/Breadcrump";
import { ContactData } from "@/components/Cabinet/Profile";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Order from "@/components/Order/Order";

export default function Caabinet() {
    return (
        <>
            <Nav />
            <Breadcrump crumps={['Главная', 'Личный  кабинет']} />
            <div className='w-full px-20 sm:px-80 flex gap-20 mt-40 mb-40'>
                <ContactData width='400px' />
                <Order variant='1' />
            </div>
            <Footer />
        </>
    )
}