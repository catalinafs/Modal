const modal = document.getElementById('ContainerModal');

const openButton = document.getElementById('OpenFirstModal');
openButton.onclick = open;

function open(){
  modal.style.display = 'block';
}

const closeButton = document.getElementById('CloseButton');
closeButton.onclick = close;

function close(){
  modal.style.display = 'none';
}

const containerSecondModal = document.getElementById('ContainerSecondModal');
const openButton1 = document.getElementById('OpenSecondModal');
openButton1.onclick = open1;

function open1(){
  containerSecondModal.style.display = 'block';
}

const closeSecondButton = document.getElementById('CloseSecondButton');
closeSecondButton.onclick = close1;
  
function close1(){
  containerSecondModal.style.display = 'none';
}