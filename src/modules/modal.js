class Modal {
  constructor(){
    this.comBtn = document.querySelector('#comBtn');
    this.commentModal = document.querySelector('#commentModal');
    this.closeBtn = document.querySelector('.close');
    this.modalContent = document.querySelector('#modalContent');
  }

  displayModal = () => {
   this.comBtn.addEventListener('click', () => {
     /* display modal*/
     this.commentModal.style.display = 'block';

     /* close modal */
     this.closeBtn.addEventListener('click', () => {
      this.commentModal.style.display = 'none';
     })

     window.addEventListener('click', (e) => {
       if (e.target == this.commentModal) {
         this.commentModal.style.display = 'none';
       }
     })
   })
  }
}

export const  modal = new Modal();