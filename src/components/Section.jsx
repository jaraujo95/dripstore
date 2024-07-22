export default function Section({children, title, titleCenter, btnTitle, btn}) {
    return (
        <section
            className={`flex flex-col gap-5 mt-10 ${titleCenter ? 'px-0' : 'px-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] '}`}>
            <div className={`flex flex-row w-full ${titleCenter ? 'justify-center': 'justify-between'}`}>
                <div>
                    <p className="text-2xl sm:text-3xl font-bold">
                        {titleCenter? titleCenter: title}
                    </p>
                </div>
                <div
                    className="flex flex-row text-sm sm:text-base items-center gap-2 hover:text-pink-500 cursor-pointer">
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