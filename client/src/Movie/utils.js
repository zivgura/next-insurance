export function setTitle(ref, movie){
    if(ref?.current) {
        ref.current.innerHTML = `${movie?.title} (${movie?.released})`
    }
}