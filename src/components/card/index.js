import { useNavigate } from 'react-router-dom';
import './card.css';

function Poster(props) {
    const {title, type, imgUrl, id, imageHeight = '14rem', imageWidth = '10rem', cardHeight = '16rem', cardWidth = '10rem' } = props;
    const navigate = useNavigate();
    return (
        <div onClick={() => {navigate(`${type}/${id}`)}} className="box" style={{ height: cardHeight, width: cardWidth }}>
            <img className="image-size" src={imgUrl} alt={title} style={{ height: imageHeight, width: imageWidth }} />
            <h6 className="movie-title">{title}</h6>
        </div>
    )
}
export default Poster



// import { useNavigate } from 'react-router-dom';
// import './card.css';


// function Poster(props) {
//     const {title, id, ImgUrl} = props;
//     const navigate = useNavigate();
//     return(
//         <div className='container'>
//             <div onClick={() => {navigate(`/${id}`)}} className='box'>
//                 <h6 className='title'>{title}</h6>
//                 <img className='image-size' src={ImgUrl} alt={title}/>
//             </div>
//         </div>
//     )
// }
// export default Poster;




// import './card.css';
// import { useNavigate } from 'react-router-dom';


// function Poster(props) {
//     const { title, ImgUrl, id } = props;
//     const navigate = useNavigate()
//     return (
//         <div className="container">
//             <div onClick={() => navigate(`/${id}`)} className="box">
//                 <h4 className="title">{title}</h4>
//                 <img className="image-size" src={ImgUrl} />
//             </div>
//         </div>
//     )
// }
// export default Poster;





// import { useNavigate } from 'react-router-dom';
// import './card.css'

// function Poster(props) {
//     const navigate = useNavigate();
//     const {title, imgUrl, id} = props;

//     return(
//         <div className='container'>
//         <div onClick={() => navigate(`/${id}`)} className="box">
//             <h4 className="movie-title">{title}</h4>
//             <img className="image-size" src={imgUrl} />
//         </div>
//         </div>
//     )
// }
// export default Poster;









// import {Card} from 'react-bootstrap'

// function Poster(props) {
//     const {ImgUrl, title, date, vote} = props;
//     return (
//             <Card border="success" style={{ width: '16rem'  }}>
//                 <Card.Img height='160px' width='130px' variant="top" src={ImgUrl} />
//                 <Card.Body>
//                     <Card.Title className='p-0 fs-6'>{title}</Card.Title>
//                     <Card.Text className='p-0 fs-6'>
//                        {date}
//                     </Card.Text>
//                     <Card.Text className='p-0 fs-6'>
//                        {vote}
//                     </Card.Text>
//                     {/* <Button variant="primary">More Details</Button> */}
//                 </Card.Body>
//             </Card>
//     )
// }
// export default Poster;










