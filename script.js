document.addEventListener('mouseout', e => {
    if (!e.toElement && !e.relatedTarget) {
        document.querySelector('.exit-intent-popup').classList.add('visible'); 
    }
});
