export default function scrollTo(section){
    window.scrollTo({
        y: section.clientHeight,
        x: 0,
        behavior: 'smooth'
    })
}