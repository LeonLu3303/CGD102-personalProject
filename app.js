// ======混合器開關功能======

//開啟混合器
function switchMixBoxOpen(e) {
  let container = document.getElementById('mix-box-container');
  let openButton = document.getElementById('mixBoxBtnOpen');
  let closeButton = document.getElementById('mixBoxBtnClose');
  let content = document.getElementById('mixBoxContent');
  let open = 'mix-box-open';
  let close = 'mix-box-hidden';
  if (container.classList.contains('mix-box-container-hidden') == true) {
    container.classList.remove('mix-box-container-hidden');
    container.classList.add('mix-box-container-open');
    openButton.classList.remove(open);
    openButton.classList.add(close);
    closeButton.classList.remove(close);
    closeButton.classList.add(open);
    content.classList.remove(close);
    content.classList.add(open);
  }

  e.stopPropagation();
}

function switchMixBoxClose(e) {
  let container = document.getElementById('mix-box-container');
  let openButton = document.getElementById('mixBoxBtnOpen');
  let closeButton = document.getElementById('mixBoxBtnClose');
  let content = document.getElementById('mixBoxContent');
  let open = 'mix-box-open';
  let close = 'mix-box-hidden';
  if (container.classList.contains('mix-box-container-open') == true) {
    container.classList.remove('mix-box-container-open');
    container.classList.add('mix-box-container-hidden');
    openButton.classList.remove(close);
    openButton.classList.add(open);
    closeButton.classList.remove(open);
    closeButton.classList.add(close);
    content.classList.remove(open);
    content.classList.add(close);
  }
  e.stopPropagation();
}

document
  .getElementById('mix-box-container')
  .addEventListener('click', switchMixBoxOpen, false);

document
  .getElementById('mixBoxBtnClose')
  .addEventListener('click', switchMixBoxClose, false);
// ======混合器開關功能 end======
