"use strict";

var modal = document.querySelectorAll('.service-modal');
var btnList = document.querySelectorAll('.modal-content  button.btn-modal');
document.addEventListener('DOMContentLoaded', function () {
  for (var i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', function () {
      var indexParent = this.parentElement.parentElement.nextSibling;
      indexParent.style.display = 'block';
    });
  }

  window.addEventListener('click', function (event) {
    for (var i = 0; i < modal.length; i++) {
      if (event.target === modal[i]) {
        modal[i].style.display = 'none';
      }
    }
  });
});