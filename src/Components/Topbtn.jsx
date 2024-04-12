import { useEffect,useState } from "react";
import { IoMdArrowUp } from "react-icons/io";

const Topbtn = () => {

    const [isVisible, setIsVisible] = useState(false);

    const GotoTopbtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    const listenToScroll = () => {
        let heightToHidden = 450;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
        <>
            {
                isVisible && (
                    <div className='z-20 w-10 sm:w-14 h-10 sm:h-14 rounded-full fixed bottom-7 right-10 animate-bounce hover:animate-none cursor-pointer flex justify-center items-center text-2xl text-white bg-gradient-to-r from-yellow-500 to-orange-600' onClick={GotoTopbtn}>
                        <IoMdArrowUp />
                    </div>
                )
            }
        </>
    )
}

export default Topbtn;