document.addEventListener('mouseout', e => {
    if (!e.toElement && !e.relatedTarget) {
        document.querySelector('.exit-intent-popup').classList.add('visible'); 
    }
});
const mouseEvent = e => {
    if (!e.toElement && !e.relatedTarget) {
        document.removeEventListener('mouseout', mouseEvent);
        
        document.querySelector('.exit-intent-popup').classList.add('visible');
    }
};

document.addEventListener('mouseout', mouseEvent);
