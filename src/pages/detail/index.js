import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getMovieDetail, getTvShowDetail } from "../../helper";
import { IMG_URL } from "../../helper/constant";
import './style.css';

function MovieDetail() {
    const [detail, setDetail] = useState({});
    const { id } = useParams();
    const { pathname } = useLocation();
    const fun = pathname.includes('tv') ? getTvShowDetail : getMovieDetail;
    useEffect(() => {
        fun(id)
            .then((res) => {
                setDetail(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])
    if (!Object.keys(detail).length) {
        return <p>Details not available</p>
    }
    let title = detail.title;
    let release_date = detail.release_date;
    const { vote_average, original_language, backdrop_path, overview, credits: { cast } } = detail;
    if(pathname.includes('tv')) {
        title = detail.name;
        release_date = detail.first_air_date;
    }
    return (
        <>
            <div className="description">
                <img className="image" src={`${IMG_URL}${backdrop_path}`} alt={title} />
                <div className="details">
                    <p className="p">{`Title:- ${title}`}</p>
                    <p className="p">{`Release Date:- ${release_date}`}</p>
                    <p className="p">{`Rating:- ${vote_average}`}</p>
                    <p className="p">{`Language:- ${original_language}`}</p>
                    <p className="overview">{`Overview:- ${overview}`}</p>
                </div>
            </div>
            <h4 className="star-cast">Star cast</h4>
            <div className="cast-container">
                {
                    cast.map((arg) => {
                        const { name, profile_path } = arg
                        if (profile_path) {
                            return (
                                <div className="casts">
                                    <img className="cast-image" src={`${IMG_URL}${profile_path}`} alt={name} />
                                    <p className="cast-name">{name}</p>
                                </div>
                            )
                        }
                        return null
                    })
                }
            </div>
        </>
    )
}
export default MovieDetail;





// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getMovieDetail } from "../../helper";
// import { IMG_URL } from "../../helper/constant";

// function MovieDetail() {
//     const [detail, setDetail] = useState({});
//     const { id } = useParams();
//     useEffect(() => {
//         getMovieDetail(id)
//             .then((d) => {
//                 setDetail(d)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }, [id])
//     if (!Object.keys(detail).length) {
//         return <p>Details not available</p>
//     }
//     const { title, vote_average, release_date, original_language, overview, backdrop_path, credits: {cast} } = detail;
//     return (
//         <>
//             <img src={`${IMG_URL}${backdrop_path}`} alt={title} />
//             <div>
//                 <p>{`Name: ${title}`}</p>
//                 <p>{`Overview: ${overview}`}</p>
//                 <p>{`Rating: ${vote_average}`}</p>
//                 <p>{`Language: ${original_language}`}</p>
//                 <p>{`Year: ${release_date}`}</p>
//             </div>
//             <div>
//                 {
//                     cast.map((c) => {
//                         const { name, profile_path } = c;
//                         if (profile_path) {
//                             return (
//                                 <div>
//                                     <img src={`${IMG_URL}${profile_path}`} alt={name} />
//                                     <p>{name}</p>
//                                 </div>

//                             )
//                         }
//                         return null
//                     })
//                 }
//             </div>
//         </>
//     )
// }
// export default MovieDetail;