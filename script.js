const menu=document.querySelector('.menu');
const btn=document.querySelector('.hamburger');
if(btn){btn.addEventListener('click',()=>menu.classList.toggle('open'));}

const yearEl=document.getElementById('year');
if(yearEl){yearEl.textContent=new Date().getFullYear();}

const track=document.querySelector('.carousel .track');
const prev=document.querySelector('.carousel .prev');
const next=document.querySelector('.carousel .next');
function scrollByAmount(dir){
  if(!track) return;
  const card=track.querySelector('img');
  const amount=card?card.clientWidth+12:300;
  track.scrollBy({left:dir*amount,behavior:'smooth'});
}
if(prev) prev.addEventListener('click',()=>scrollByAmount(-1));
if(next) next.addEventListener('click',()=>scrollByAmount(1));

// Galeri resimlerine tıklayınca modal aç
document.querySelectorAll('.carousel .track img').forEach(img => {
  img.addEventListener('click', function() {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'flex';
    modalImg.src = this.src;
    modalImg.alt = this.alt;
  });
});

// Modalı kapatma
document.querySelector('.modal .close').onclick = function() {
  document.getElementById('image-modal').style.display = 'none';
};

// Modal dışında tıklayınca kapansın
document.getElementById('image-modal').onclick = function(e) {
  if (e.target === this) this.style.display = 'none';
};


