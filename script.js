"use strict";




function darkmode() {
    const body = document.body
    const wadDarkmode = localStorage.getItem('darkmode') === 'true'

    localStorage.setItem('darkmode', !wadDarkmode)
    body.classList.toggle('dark-mode', !wadDarkmode)


}

document.querySelector('.image-button').addEventListener('click', darkmode)



var myModal = new bootstrap.Modal(document.getElementById('exampleModalCenter'), {
    keyboard: false
});

// Функция для открытия модального окна и вывода id кнопки внутрь содержимого модального окна
function openModal(buttonId) {
    var button = document.getElementById(buttonId);
    var buttonIdText = button.textContent;
    document.getElementById('modalBodyContent').textContent = buttonIdText;
    myModal.show();
}



// Добавляем обработчик события для каждой кнопки
document.getElementById('button1').addEventListener('click', function() {
    openModal('button1');
});

document.getElementById('button2').addEventListener('click', function() {
    openModal('button2');
});



document.addEventListener("DOMContentLoaded", function() {
    // Слушаем событие при закрытии модального окна с аудио
    $('#exampleModalCenter1').on('hidden.bs.modal', function (e) {
      var audioPlayer = document.getElementById('audioPlayer');
      audioPlayer.pause();
    });
  
    // Слушаем событие при закрытии модального окна с видео
    $('#exampleModalCenter2').on('hidden.bs.modal', function (e) {
      var videoPlayer = document.getElementById('videoPlayer');
      videoPlayer.pause();
    });
  });