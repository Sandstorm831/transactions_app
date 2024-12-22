import NavbarRoot from "@/components/navbar/root";

export default function RootPage(){
    return <div className="w-screen h-screen">
        <div className="w-full h-full flex flex-col px-1 bg-gradient-to-t from-[#30cfd0] to-[#330867] text-white">
            <div>
                <NavbarRoot leftBlock="Transactions App"/>
            </div>
            <div className="flex justify-center h-full">
                <div className="text-5xl text-white font-bold flex flex-col justify-center font-serif">
                    <div>The Transactions App</div>
                    <div className="text-xl">With Security </div>
                </div>
            </div>
        </div>
    </div>
}