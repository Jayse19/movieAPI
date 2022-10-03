import { FormEvent, useRef, useState } from "react";
import { useQuery } from "react-query";
import axios from 'axios'
import { Alert, AlertTitle, Box, CircularProgress } from "@mui/material";

const MovieApi = () => {
    const movie = useRef<HTMLInputElement>(null)
    const [searchMovie, setSearchMovies] = useState(0)
    
    const { data, isLoading, isError } = useQuery(["Movie", searchMovie], () => {
        let url = `http://www.omdbapi.com/?i=${searchMovie}&apikey=fae241f2`
        return axios.get(url)
    })
    const { data: movieData, isLoading: itsLoading, isError: itsAnError } = useQuery(["movieLink", searchMovie], () => {
        let url = `http://www.omdbapi.com/?i=${searchMovie}&apikey=fae241f2`
        return axios.get(url)
    })

    if (isError) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Alert severity="error" style={{ width: '800px' }}>
                    <AlertTitle>Error</AlertTitle>
                    This Movie does not exist
                </Alert>
            </div>
        )
    }
    if (isLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
        </div>
    }
    
    const movieTitle = data?.data.Title
    
    const submissionHandler = (event: FormEvent) => {
        event.preventDefault()
        setSearchMovies(Number(movie.current!.value))
        
    }
    
    return (
        <div>

            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>

                <form onSubmit={submissionHandler} style={{ position: 'relative', display: 'flex', justifyContent: 'center', border: 'solid', borderRadius: '30px', width: '300px', height: '300px' }}>
                    <fieldset>

                        <div className="form-group">
                            <label className="form-label mt-4">Movie IMBD number</label>
                            <input className="form-control" placeholder="Enter IMBD number" ref={movie} />
                        </div>
                    </fieldset>
                </form>
                <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 0 }}>
                    <h3></h3>

                </div>
            </div>
        </div>
    );
}

export default MovieApi;