import Layout from "../layout";
import menuData from "./Menu.json";

// const play = [
//     {
//         img : '0.jpg',
//         logo : '1.jpg',
//         title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         chanal : 'Set India',
//         view: '190K',
//         time : '1 Day Ago'

//     },
//     {
//         img : '0.jpg',
//         logo : '1.jpg',
//         title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         chanal : 'Set India',
//         view: '190K',
//         time : '1 Day Ago'

//     },
//     {
//         img : '0.jpg',
//         logo : '1.jpg',
//         title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         chanal : 'Set India',
//         view: '190K',
//         time : '1 Day Ago'

//     },
//     {
//         img : '0.jpg',
//         logo : '1.jpg',
//         title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         chanal : 'Set India',
//         view: '190K',
//         time : '1 Day Ago'

//     },
//     {
//         img : '0.jpg',
//         logo : '1.jpg',
//         title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         chanal : 'Set India',
//         view: '190K',
//         time : '1 Day Ago'

//     },
//     {
//         img : '0.jpg',
//         logo : '1.jpg',
//         title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         chanal : 'Set India',
//         view: '190K',
//         time : '1 Day Ago'

//     },
//     {
//         img : '0.jpg',
//         logo : '1.jpg',
//         title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         chanal : 'Set India',
//         view: '190K',
//         time : '1 Day Ago'

//     },
//     {
//         img : '0.jpg',
//         logo : '1.jpg',
//         title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         chanal : 'Set India',
//         view: '190K',
//         time : '1 Day Ago'

//     },
//     {
//         img : '0.jpg',
//         logo : '1.jpg',
//         title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         chanal : 'Set India',
//         view: '190K',
//         time : '1 Day Ago'

//     },
//     {
//         img : '0.jpg',
//         logo : '1.jpg',
//         title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         chanal : 'Set India',
//         view: '190K',
//         time : '1 Day Ago'

//     },
//     {
//         img : '0.jpg',
//         logo : '1.jpg',
//         title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         chanal : 'Set India',
//         view: '190K',
//         time : '1 Day Ago'

//     },
//     {
//         img : '0.jpg',
//         logo : '1.jpg',
//         title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         chanal : 'Set India',
//         view: '190K',
//         time : '1 Day Ago'

//     }
// ]


const Home = ()=>{
    return(
        <Layout>
            <div className="grid md:grid-cols-4 gap-5">
              {
                  menuData.map((item,index)=>(
                    <div key={index} className="flex flex-col gap-y-4"> 
                    <img src={item.img} alt="A" className="rounded-lg" />
                    <div className="flex gap-x-4">
                        <img src={item.logo } alt="1"  className="rounded-full w-10 h-10" />
                        <div>
                            <h1 className="text-sm font-semibold mb-3">{item.title}</h1>
                            <div className="flex items-center gap-x-2 mb-1">
                                <p className="text-xs text-slate-500">{item.chanal}</p>
                                <span className="material-icons" style={{ fontSize:16 }}>check_circle</span>
                            </div>
                            <div className="flex items-center gap-x-2 ">
                                <p className="text-xs text-slate-500">{item.view}</p>
                                <p className="text-xs text-slate-500">{item.time}</p>
                            </div>
                        </div>
                    </div>
                </div>
                ))
              }
            </div>
        </Layout>
    ) 
    
}

export default Home