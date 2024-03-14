import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

import { ContentContainer, HeaderContainer, TitleContainer } from "./App.style";
import MovieList from "./MovieList/MovieList";
import { SearchBar } from "./SearchBar/SearchBar";
import { MAIN_HEADER } from "./constants";
import Logo from "./assets/Logo.png"
import './App.css';

function App() {
    return (
        <div className="App">
            <HeaderContainer className="header">
                <img src={Logo} alt={''} height={'80'}/>
            </HeaderContainer>
            <ThemeProvider theme={theme}>
                <ContentContainer>
                    <TitleContainer>
                        {MAIN_HEADER}
                    </TitleContainer>
                    <SearchBar/>
                    <MovieList/>
                </ContentContainer>
            </ThemeProvider>
        </div>
    );
}

export default App;
