import {  useNavigate } from "react-router-dom";

export default function Section({children, title, titleCenter, btnTitle, btn}) {

    const navigate = useNavigate();
    const handleButtonClick = () => {
    navigate('/Lista-Produtos');
    };
    
    return (
        <section
            className="flex flex-col px-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] gap-5 mt-10">
            <div className={`flex flex-row w-full ${titleCenter ? 'justify-center': 'justify-between'}`}>
                <div>
                    <p className="text-2xl sm:text-3xl font-bold">
                        {titleCenter? titleCenter: title}
                    </p>
                </div>
                <div
                    onClick={handleButtonClick}
                    className="flex flex-row text-sm sm:text-base items-center gap-2 hover:text-red-500 cursor-pointer">
                    <p>{btnTitle}</p>
                    <div>
                        {btn}
                    </div>
                </div>
            </div>
            {children}
        </section>
    )
}