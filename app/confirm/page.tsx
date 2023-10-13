import AuthConfirm from "@/components/AuthConfirn";
import AuthForm from "@/components/AuthForm";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Wrapper from "@/components/Wrapper";

export default function Auth() {
    return (
        <div>
            <Wrapper>
                <div className='w-full h-screen md:h-auto md:mb-[20px] flex flex-col'>
                    <Nav />
                    <div className='w-full h-full px-20 sm:px-40 md:px-80 flex items-center justify-center'>
                        <AuthConfirm />
                    </div>
                </div>
            </Wrapper>
            <Wrapper maxw='none'>
                <div className='w-full hidden md:block'>
                    <Footer />
                </div>
            </Wrapper>
        </div>
    )
}