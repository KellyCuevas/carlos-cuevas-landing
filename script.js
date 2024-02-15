document.addEventListener('DOMContentLoaded', () => {

  const opener = document.getElementById("main-menu-open");
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") opener.blur();
    console.log("dafug", event.key);
  } );  
  
  opener.addEventListener("touchstart", () => {
		opener.focus();
	} );
  opener.nextElementSibling.addEventListener("touchstart",  () => {
		opener.blur();
	} );


const reviewOneDialog = document.querySelector("#review-1-dialog")
const showDialogOne = document.querySelector("#open-review-1")
const closeDialogOne = document.querySelector("#close-review-1")

showDialogOne.addEventListener("click", () => {
  reviewOneDialog.showModal();
})

closeDialogOne.addEventListener("click", () => {
  reviewOneDialog.close();
})
const reviewTwoDialog = document.querySelector("#review-2-dialog")
const showDialogTwo = document.querySelector("#open-review-2")
const closeDialogTwo = document.querySelector("#close-review-2")

showDialogTwo.addEventListener("click", () => {
  reviewTwoDialog.showModal();
})

closeDialogTwo.addEventListener("click", () => {
  reviewTwoDialog.close();
})


})