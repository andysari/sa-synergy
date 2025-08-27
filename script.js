document.addEventListener("DOMContentLoaded", () => {

  // ---------- MATRIX TEXT EFFECT ----------
  const matrixEl = document.querySelector(".matrix-text");
  if(matrixEl){
    const lines = Array.from(matrixEl.querySelectorAll("p"));
    let curLine = 0;
    function showLine(){
      lines.forEach((p,i)=> p.style.display = i===curLine ? "block" : "none");
      curLine = (curLine+1)%lines.length;
    }
    showLine();
    setInterval(showLine, 5000);
  }

  // ---------- SMOOTH SCROLL FOR LINKS ----------
  const links = document.querySelectorAll('.nav a');
  links.forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

});
