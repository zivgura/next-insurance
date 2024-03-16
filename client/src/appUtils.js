import { getTitle } from './movieUtils';

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