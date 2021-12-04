const panels = document.querySelectorAll('.panel');
let track = [];

panels.forEach((panel, index) =>{
    panel.addEventListener('click', function(){
        track.push(index);
        if (track.length == 2 && track[0] !== track[1]){
            panels[track.shift()].classList.remove('active');
        }
        panel.classList.add('active');
    });
})