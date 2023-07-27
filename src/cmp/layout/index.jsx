import { useState } from "react";

const menus = [
    {
        label : 'Home',
        icon : 'home'
    },
    {
        label : 'Shorts',
        icon : 'app_shortcut'
    },
    {
        label : 'Subscriptions',
        icon : 'loyalty'
    },
    {
        label : 'History',
        icon : 'history'
    },
    {
        label : 'Your videos',
        icon : 'slideshow'
    },
    {
        label : 'Watch Later',
        icon : 'timer'
    },
    {
        label : 'Watch Later',
        icon : 'download'
    },
    {
        label : 'Home',
        icon : 'home'
    },
    {
        label : 'Shorts',
        icon : 'app_shortcut'
    },
    {
        label : 'Subscriptions',
        icon : 'loyalty'
    },
    {
        label : 'History',
        icon : 'history'
    },
    {
        label : 'Your videos',
        icon : 'slideshow'
    },
    {
        label : 'Watch Later',
        icon : 'timer'
    },
    {
        label : 'Watch Later',
        icon : 'download'
    },{
        label : 'Your videos',
        icon : 'slideshow'
    },
    {
        label : 'Watch Later',
        icon : 'timer'
    },
    {
        label : 'Watch Later',
        icon : 'download'
    }
   
    
]

const Layout = ({children})=>{
    const [open,setOpen]= useState(true);
    return(
        <div>
            <nav className="bg-white border-b fixed top-0 left-0 w-full h-16 z-10 px-5 flex justify-between items-center">
                <div className="flex items-center gap-x-4">
                <button onClick={()=>setOpen(!open)} className="hover:bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center">
                    <span className="material-icons" style={{fontSize:24}}>menu</span>
                </button>
                <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="logo" className="w-16" />
                </div>

                <div className="w-1/2 flex flex-col">
                   <form action="" className="flex">
                       <input type="text" className="border border-slate-300 rounded-l h-10 flex-1 p-3" placeholder="search" />
                       <button className="border border-slate-300 border-l-0  rounded-r h-10 w-14 flex  justify-center items-center">
                       <span className="material-icons-outlined text-slate-400" style={{fontSize:24}}>search</span>
                       </button>
                   </form>
                </div>

                <div className="flex items-center gap-x-4">
                <button className="hover:bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center">
                    <span className="material-icons-outlined" style={{fontSize:24}}>video_call</span>
                </button>
                <button className="hover:bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center">
                    <span className="material-icons-outlined" style={{fontSize:24}}>notifications</span>
                </button>
                <img src="https://yt3.ggpht.com/yti/AOXPAcWEs23RFSW9p8olKwaLmnto9wyCzoQw4KQzO3NQq5c=s88-c-k-c0x00ffffff-no-rj" alt="logo" className="w-110 h-10 rounded-full"  />
                </div>
                
            </nav>
            <aside className="overflow-auto bg-white-600 h-full fixed top-0 left mt-16 flex flex-col px-3 gap-y-2 py-3"
            style={{
                width: open ? 250 : 70,
                transition: '0.2s'
            }} 
            >
             {
                menus.map((item,index)=>(
                    <button 
                    key={index} 
                    className={`flex ${open ? 'flex-row' : 'flex-col'} ${open ? 'items-start' : 'items-center'} gap-x-5 py-2 rounded-lg hover:bg-gray-200 px-2`}
                    >
                         <span className="material-icons-outlined text-black">{item.icon}</span>
                         <span 
                          className={`capitalize text-black ${open ? null : 'text-xs'}`}>
                            {open ? item.label : item.label.slice(0,5)}
                        </span>
                    </button>
                ))
             }

            </aside>
            <section className="mt-16 p-5"
            style={{
                marginLeft: open ? 250 : 70,
                transition: '0.2s'
            }}>
             {children}
            </section>

            
        </div>
    )
}
export default Layout