import { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { getMovies } from './movieUtils';
import { theme } from './theme';

import { ContentContainer, TitleContainer } from "./App.style";
import MovieList from "./MovieList/MovieList";
import { SearchBar } from "./SearchBar/SearchBar";
import { MAIN_HEADER } from "./constants";
import './App.css';

export const ScreenContext = createContext(window.innerWidth)

function App() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies()
            .then(data => {
                setMovies(data)
            })
    }, []);

    useEffect(() => {
        window.addEventListener("resize", resize);
        resize();
    }, []);

    function resize() {
        setScreenWidth(window.innerWidth)
    }

    return (
        <ScreenContext.Provider value={screenWidth}>
            <div className="App">
                <ThemeProvider theme={theme}>
                    <Header/>
                    <ContentContainer>
                        <TitleContainer>
                            {MAIN_HEADER}
                        </TitleContainer>
                        <SearchBar movies={movies} setMovies={setMovies}/>
                        <MovieList movies={movies}/>
                    </ContentContainer>
                    <Footer/>
                </ThemeProvider>
            </div>
        </ScreenContext.Provider>
    );
}

export default App;
