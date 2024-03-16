import { getTitle } from './movieUtils';
import { theme } from './theme';

export function setTitle(htmlElement, movie, withYear = true) {
    if (htmlElement) {
        htmlElement.innerHTML = getTitle(movie, withYear)
    }
}

export function setDescription(htmlElement, movie) {
    if (htmlElement) {
        htmlElement.innerHTML = movie?.synopsis
    }
}

export function getWidth(screenWidth) {
    return screenWidth <= theme.gridBreakpoints.md
        ? theme.photoWidths.small
        : theme.photoWidths.large;
}

export function getNumberOfMoviesInRow(width) {
    if (width <= theme.gridBreakpoints.md) {
        return Math.floor(width / theme.photoWidths.small)
    }
    return Math.floor(width / theme.photoWidths.large)
}

export function getColumns(screenWidth) {
    const margin = (10 * screenWidth) / 100;
    const width = screenWidth - 2 * margin;
    const columns = getNumberOfMoviesInRow(width);
    let columnWidth = theme.photoWidths.large;
    if (screenWidth <= theme.gridBreakpoints.md) {
        columnWidth = theme.photoWidths.small
    }

    let res = '';
    for (let i = 0; i < columns; i++) {
        res = res + `${columnWidth}px `;
    }
    return res;
}