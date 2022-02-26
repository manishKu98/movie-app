import Main from "../../components/main/main";
import Aside from "../../components/aside/aside";
import Form from "../../components/form/form";


function Home() {
    return(
        <div style={{display: "flex", justifyContent: 'space-between'}}>
            <div style={{ flex: 1 }}>
                <Aside />
                <Form />
            </div>
            <Main />
        </div>
    )
}
export default Home;



// import { useState, useEffect } from "react";
// import Poster from "../../components/card";
// import getMovies from "../../helper";
// import { IMG_URL } from "../../helper/constant";


// function Home(){
//     const [data, setData] = useState([]);
//     const [page, setPage] = useState(1);
//     const [text, setText] = useState('');

//     function prev() {
//         setPage((pre) => {
//             if(pre <= 1){
//                 return pre;
//             }
//         })
//     }
//     function next() {
//         setPage((pre) => {
//            return pre + 1;
//         })
//     }

//     useEffect(() => {
//         getMovies(page)
//         .then((res) => {
//             setData(res.results)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     },[page])
//     return(
//        <>
//        <div className="search-section">
//        <input className="search-bar" type='text' value={text} onChange={(e) => {setText(e.target.value)}}/>
//        <button className="search-btn">SEARCH</button>
//        </div>
//       {
//             data.map((arg) => {
//                 const {poster_path, title, id} = arg;
//                 return <Poster key={id} title={title} ImgUrl={`${IMG_URL}${poster_path}`} />
//             })
//       }
//       <div className="btns"> 
//           <button onClick={prev} className='pre btn'>Prev</button>
//           <button onClick={next} className='next btn'>Next</button>
//       </div>
//        </>
//     )
// }
// export default Home;
 


// import { useEffect, useState } from 'react';
// import getMovies from '../../helper';
// import Poster from '../../components/card'
// import { IMG_URL } from '../../helper/constant';

// function Home() {
//     const [data, setData] = useState([]);
//     const [page, setPage] = useState(1);
//     const [text, setText] = useState('');

//     function prev() {
//         setPage((pre) => {
//             if (pre <= 1) {
//                 return pre
//             }
//         })
//     }
//     function next() {
//         setPage((pre) => {
//             return pre + 1;
//         })
//     }
//     useEffect(() => {
//         getMovies(page)
//             .then((res) => {
//                 setData(res.results)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }, [page]);
//     return (
//         <>
//             <div className='search-section'>
//                 <input value={text} type='text' className='search-bar' onChange={(e) => setText(e.target.value)} />
//                 <button className='search-btn'>SEARCH</button>
//             </div>
//             {
//                 data.filter((d) => d.title.includes(text)).map((arg) => {
//                     const { title, poster_path, id } = arg;
//                     return <Poster key={id} id={id} title={title} ImgUrl={`${IMG_URL}${poster_path}`} />
//                 })
//             }
//             <div className='btns'>
//                 <button onClick={prev} className='prev btn'>Prev</button>
//                 <button onClick={next} className='next btn'>Next</button>
//             </div>
//         </>
//     );
// }

// export default Home;
