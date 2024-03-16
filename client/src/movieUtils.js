import { hoursRegx, minutesRegx } from './constants';
import { getAllMovies } from './DAL/utils';

export async function getMovies() {
    return await getAllMovies();
}
export function getTitle(movie, withYear){
    return `${movie?.title}${withYear ? ` (${movie?.released})` : ''}`
}

export function getDuration(movie){
    const runtime = movie?.runtime
    if(runtime){
        const hours = hoursRegx.exec(runtime)?.[0];
        const minutes = minutesRegx.exec(runtime)?.[0];
        return hours || minutes ? `${hours} ${minutes}in` : '';
    }
    return '';
}

export function getRating(movie){
    if(movie?.rating) {
        return `★ ${movie?.rating}`
    }
    return '';
}
