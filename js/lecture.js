  // lecture-detail
  let know = document.querySelectorAll('.know')
  let lectureDetail = document.querySelector('.lecture-detail');
  let closePage = document.querySelector('.detail-close')
  know.forEach(e => e.addEventListener('click', openDetailPage))
  closePage.addEventListener('click', closeDetailPage)
  function openDetailPage() {
      lectureDetail.classList.add('active')
  }
  function closeDetailPage() {
      lectureDetail.classList.remove('active')
  }
  // applyForm
  let applyForm = document.querySelector('.apply-form')
  let closeForm = document.querySelector('.apply-close')
  let apply = document.querySelectorAll('.apply')
  apply.forEach(e => e.addEventListener('click', openApplyForm));
  closeForm.addEventListener('click', closeApplyForm);
  function openApplyForm() {
      applyForm.classList.add('active')
  }
  function closeApplyForm() {
      applyForm.classList.remove('active')
  }