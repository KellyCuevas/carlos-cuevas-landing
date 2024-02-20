document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  menuBtn.addEventListener('click', () => handleClick());

  function handleClick() {
    siteNav.classList.toggle('site-nav--open');
    menuBtn.classList.toggle('open');
  }

  const reviewOneDialog = document.querySelector('#review-1-dialog');
  const showDialogOne = document.querySelector('#open-review-1');
  const closeDialogOne = document.querySelector('#close-review-1');

  showDialogOne.addEventListener('click', () => {
    reviewOneDialog.showModal();
  });

  closeDialogOne.addEventListener('click', () => {
    reviewOneDialog.close();
  });
  const reviewTwoDialog = document.querySelector('#review-2-dialog');
  const showDialogTwo = document.querySelector('#open-review-2');
  const closeDialogTwo = document.querySelector('#close-review-2');

  showDialogTwo.addEventListener('click', () => {
    reviewTwoDialog.showModal();
  });

  closeDialogTwo.addEventListener('click', () => {
    reviewTwoDialog.close();
  });
});
