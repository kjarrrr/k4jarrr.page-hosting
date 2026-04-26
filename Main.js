
function playSequence() {
    
    const Fuse = document.getElementById('Fuse');
    const Stick = document.getElementById('Stick');
    const Closing = document.getElementById('Closing');
    const Author1 = document.getElementById('Author1');
    const Author2 = document.getElementById('Author2');
    const Author3 = document.getElementById('Author3');

    Fuse.play();

    Author1.style.display = "block";



    Fuse.addEventListener('ended', () => {
      Author1.style.display = "none";  
      Stick.play();
      Author2.style.display = "block";
    });
    
    Stick.addEventListener('ended', () => {
      Author2.style.display = "none";
      Closing.play();
      Author3.style.display = "block"
    });

    Closing.addEventListener('ended', () => {
      Author3.style.display = "none"  
    });
  }