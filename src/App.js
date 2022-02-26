// import NavBar from "./components/navbar/navbar";
// import Aside from "./components/aside/aside";
// import Main from "./components/main/main";
// import Form from "./components/form/form";
import AppRoutes from "./router"; 



function App() {
  return(
    <AppRoutes />
  )
}
export default App;








// import './App.css';
// import AppRoutes from './router';

// function App() {
    
//     return (
//         <div>
//             <h1 className='heading'>THE MOVIE APP</h1>
//             <AppRoutes />
//         </div>
//     )
// }
// export default App













// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useEffect, useState } from 'react';
// import getMovies from './helper';
// import Poster from './components/card'
// import { IMG_URL } from './helper/constant';
// import Header from './components/header';
// import { Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

// function App() {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [text, setText] = useState('')

//   useEffect(() => {
//     getMovies(page)
//       .then((res) => {
//         setData(res.results)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }, [page])
//   function prev() {
//     setPage((pre) => {
//       if (pre <= 1) {
//         return pre;
//       }
//     })
//   }
//   function next() {
//     setPage((pre) => {
//       return pre + 1;
//     })
//   }
//   return (
//     <>
//       <Header />

//       <InputGroup className="m-3">
//         <FormControl
//           value={text}
//           onChange={(e) => {setText(e.target.value)}}
//           placeholder="search movies"
//           aria-label="Recipient's username"
//           aria-describedby="basic-addon2"
//         />
//       </InputGroup>


//       <Row className='m-4'>
//         {
//           data.filter((d) => d.title.includes(text)).map((arg) => {
//             const { poster_path, title, release_date, vote_average } = arg;
//             return <Poster key={arg.id} ImgUrl={`${IMG_URL}${poster_path}`} title={title} date={release_date} vote={vote_average} />
//           })
//         }
//       </Row>
//       <Row>
//         <Col>
//           <Button onClick={prev}>Prev</Button>
//         </Col>
//         <Col>
//           <Button onClick={next}>Next</Button>
//         </Col>
//       </Row>
//     </>
//   )
// }
// export default App;






