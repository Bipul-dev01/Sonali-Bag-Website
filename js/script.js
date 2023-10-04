// Scroll Reveal Animation

const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:100,
});
sr.reveal(`#homeicon,#getStarted,.maxWidth200,#productgallery,#secFooterIndexx`,{interval:100});
sr.reveal(`.scrollMessage`,{origin:'left'});
sr.reveal(`.scrollImage`,{origin:'right'});
