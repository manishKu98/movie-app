import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import getMovies from "../../helper";
import { IMG_URL } from "../../helper/constant";
import Poster from "../card";

import './main.css'

function Main() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [search] = useSearchParams();

    useEffect(() => {
        getMovies(page)
            .then((res) => {
                setData(res.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [page])

    function prev() {
        setPage((pre) => {
            if(pre <= 1){
                return pre
            }
            return pre - 1;            
        })
    }
    function next() {
        setPage((pre) => {
            return pre + 1;
        })
    }
    const paramsTitle = search.get('title') || '';
    return (
        <div className='main'>
            <div className="poster-container">
            {
                data.filter((d) => d.title.toLowerCase().includes(paramsTitle?.toLowerCase())).map((arg) => {
                    const {title, poster_path, id} = arg;
                    return <Poster type="movie" key={id} id={id} title={title} imgUrl={`${IMG_URL}${poster_path}`} />
                })
            }
            </div>
            <div className="btns">
                <button className="prev btn" onClick={prev}>Prev</button>
                <button className="next btn" onClick={next}>Next</button>
            </div>
        </div>
    )
}
export default Main;