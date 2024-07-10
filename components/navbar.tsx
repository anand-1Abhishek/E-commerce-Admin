import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { MainNav } from "@/components/main-nav";        //it will be a destructured thing
import StoreSwitcher from "@/components/store-switcher";
import prismadb from "@/lib/prismadb";
// import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = async () => {
    const { userId } = auth(); //user verification

    if(!userId){
        redirect("/sign-up");
    }
    
    const stores = await prismadb.store.findMany({
        where:{
            userId,
        },
    });
    // console.log(stores);
    return ( 
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <StoreSwitcher items={stores}/>
                <MainNav className="mx-6"/>
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton afterSignOutUrl="/"/>  
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;