import AuthForm from "@/components/AuthForm";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Wrapper from "@/components/Wrapper";

export default function Auth() {
    return (
        <Wrapper>
            <div className='w-full h-screen flex flex-col'>
                <Nav />
                <div className='w-full h-full px-20 sm:px-40 md:px-80 flex items-center justify-center'>
                    <AuthForm />
                </div>
            </div>
            <div className='w-full hidden md:block'>
                <Footer />
            </div>
        </Wrapper>
    )
}