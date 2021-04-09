  // according
  let accordingItem = document.querySelectorAll('.according-item');
  let accoringHead = document.querySelectorAll('.according-head');

  accoringHead.forEach(e => e.addEventListener('click', toggle))
  function toggle() {
      let parentItem = this.parentNode.className;
      console.log(parentItem);
      accoringHead.forEach(e => {
          e.parentNode.className = 'according-item close'
      })
      if (parentItem == 'according-item close') {
          this.parentNode.className = 'according-item open'
      }
  }