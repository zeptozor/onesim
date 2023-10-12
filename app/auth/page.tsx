import AuthForm from "@/components/AuthForm";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Wrapper from "@/components/Wrapper";

export default function Auth() {
    return (
        <Wrapper>
            <div className='w-full h-screen flex flex-col'>
                <Nav />
                <div className='w-full h-full flex bg-black items-center justify-center'>
                    <AuthForm />
                </div>
            </div>
            <Footer />
        </Wrapper>
    )
}