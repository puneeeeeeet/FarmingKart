import { Icon } from "../icon";
import { ArrowDown } from "../icons/arrowDown";
import { Kart } from "../icons/kart";
import { Search } from "../icons/search";
import { User } from "../icons/user";
import { WishList } from "../icons/wishList";
export default function Nav(){
    return(
        <div className="bg-[#72B462] h-28 w-screen flex flex-col">

            <div className="flex pt-4 pb-5 gap-2 items-center justify-center text-white">
             <div className="text-2xl font-bold  px-10  ">
                Farmers Point
             </div>
             <div className="border-2 h-8 w-96 rounded-md ">
                <div className="ml-2 mt-0.5 gap-2 flex items-center">
                <Icon icon={Search} size="lessSmall" />
                Search Your Items Here!
                </div>
                
             </div>
             <div className="ml-5">
             <Icon icon={WishList} size="medium"/>
             </div>
             <div className="ml-2">
                <Icon icon={Kart} size="large"/>
             </div>
            <div className="flex gap-2 ml-5">
                <div>
                    User
                </div>
                <div>
                    <Icon icon={User} />
                </div>
            </div>
            </div>
            
            <div className="w-screen bg-[#549744] h-12 flex justify-center	font-bold items-center gap-6 text-white">
            <div>
                Home
            </div>
            <div className="flex justify-center items-center">
                Categories
                <Icon icon={ArrowDown}/>
            </div>
            <div className="flex justify-center items-center">
               Top Brands
               <Icon icon={ArrowDown}/>
            </div>
            <div>
                About
            </div>
            <div>
               Contact Us
            </div>
            </div>
        </div>
    );
}