export default () => {
    document.querySelector('.top-btn').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
};