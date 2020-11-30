"use strict";

// Menu buttons
var menuBtn = document.querySelector('.nav__btn');
var menuBtnClose = document.querySelector('.menu-popup__btn-close');
var menuPopup = document.querySelector('.menu-popup');
menuBtn.addEventListener('click', function () {
  menuPopup.classList.add('menu-popup--active');
  document.body.classList.add('blocked');
});
menuBtnClose.addEventListener('click', function () {
  menuPopup.classList.remove('menu-popup--active');
  document.body.classList.remove('blocked');
}); // lightbox

var lightboxImage = document.querySelector('.lightbox__image');
var lightbox = document.querySelector('.lightbox');
var backdrop = document.querySelector('.backdrop');
backdrop.addEventListener('click', function () {
  closeLightbox();
});

function closeLightbox() {
  lightbox.classList.remove('lightbox--active');
  document.body.classList.remove('blocked');
}

function openLightBox(src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.classList.add('lightbox--active');
  document.body.classList.add('blocked');
}

var images = document.querySelectorAll('.gallery__item-image');
images.forEach(function (image) {
  image.addEventListener('click', function (e) {
    var imageSrc = e.target.src;
    var imageAlt = e.target.alt;
    openLightBox(imageSrc, imageAlt);
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibWVudUJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVCdG5DbG9zZSIsIm1lbnVQb3B1cCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwicmVtb3ZlIiwibGlnaHRib3hJbWFnZSIsImxpZ2h0Ym94IiwiYmFja2Ryb3AiLCJjbG9zZUxpZ2h0Ym94Iiwib3BlbkxpZ2h0Qm94Iiwic3JjIiwiYWx0IiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbWFnZSIsImUiLCJpbWFnZVNyYyIsInRhcmdldCIsImltYWdlQWx0Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBaEI7QUFDQSxJQUFNQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBckI7QUFDQSxJQUFNRSxTQUFTLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFsQjtBQUVBRixPQUFPLENBQUNLLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDdkNELEVBQUFBLFNBQVMsQ0FBQ0UsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0Isb0JBQXhCO0FBQ0FOLEVBQUFBLFFBQVEsQ0FBQ08sSUFBVCxDQUFjRixTQUFkLENBQXdCQyxHQUF4QixDQUE0QixTQUE1QjtBQUNBLENBSEQ7QUFLQUosWUFBWSxDQUFDRSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxZQUFNO0FBQzVDRCxFQUFBQSxTQUFTLENBQUNFLFNBQVYsQ0FBb0JHLE1BQXBCLENBQTJCLG9CQUEzQjtBQUNBUixFQUFBQSxRQUFRLENBQUNPLElBQVQsQ0FBY0YsU0FBZCxDQUF3QkcsTUFBeEIsQ0FBK0IsU0FBL0I7QUFDQSxDQUhELEUsQ0FNQTs7QUFDQSxJQUFNQyxhQUFhLEdBQUdULFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBdEI7QUFDQSxJQUFNUyxRQUFRLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFqQjtBQUNBLElBQU1VLFFBQVEsR0FBR1gsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQWpCO0FBRUFVLFFBQVEsQ0FBQ1AsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsWUFBTTtBQUN4Q1EsRUFBQUEsYUFBYTtBQUNiLENBRkQ7O0FBSUEsU0FBU0EsYUFBVCxHQUF5QjtBQUN4QkYsRUFBQUEsUUFBUSxDQUFDTCxTQUFULENBQW1CRyxNQUFuQixDQUEwQixrQkFBMUI7QUFDQVIsRUFBQUEsUUFBUSxDQUFDTyxJQUFULENBQWNGLFNBQWQsQ0FBd0JHLE1BQXhCLENBQStCLFNBQS9CO0FBQ0E7O0FBRUQsU0FBU0ssWUFBVCxDQUFzQkMsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQy9CTixFQUFBQSxhQUFhLENBQUNLLEdBQWQsR0FBb0JBLEdBQXBCO0FBQ0FMLEVBQUFBLGFBQWEsQ0FBQ00sR0FBZCxHQUFvQkEsR0FBcEI7QUFDQUwsRUFBQUEsUUFBUSxDQUFDTCxTQUFULENBQW1CQyxHQUFuQixDQUF1QixrQkFBdkI7QUFDQU4sRUFBQUEsUUFBUSxDQUFDTyxJQUFULENBQWNGLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLFNBQTVCO0FBQ0E7O0FBRUQsSUFBTVUsTUFBTSxHQUFHaEIsUUFBUSxDQUFDaUIsZ0JBQVQsQ0FBMEIsc0JBQTFCLENBQWY7QUFDQUQsTUFBTSxDQUFDRSxPQUFQLENBQWUsVUFBQUMsS0FBSyxFQUFJO0FBQ3ZCQSxFQUFBQSxLQUFLLENBQUNmLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFVBQUNnQixDQUFELEVBQU87QUFDdEMsUUFBTUMsUUFBUSxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU1IsR0FBMUI7QUFDQSxRQUFNUyxRQUFRLEdBQUdILENBQUMsQ0FBQ0UsTUFBRixDQUFTUCxHQUExQjtBQUNBRixJQUFBQSxZQUFZLENBQUNRLFFBQUQsRUFBV0UsUUFBWCxDQUFaO0FBQ0EsR0FKRDtBQUtBLENBTkQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNZW51IGJ1dHRvbnNcclxuXHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19idG4nKVxyXG5jb25zdCBtZW51QnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wb3B1cF9fYnRuLWNsb3NlJylcclxuY29uc3QgbWVudVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtcG9wdXAnKVxyXG5cclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRtZW51UG9wdXAuY2xhc3NMaXN0LmFkZCgnbWVudS1wb3B1cC0tYWN0aXZlJylcclxuXHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrZWQnKVxyXG59KVxyXG5cclxubWVudUJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdG1lbnVQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXBvcHVwLS1hY3RpdmUnKVxyXG5cdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYmxvY2tlZCcpXHJcbn0pXHJcblxyXG5cclxuLy8gbGlnaHRib3hcclxuY29uc3QgbGlnaHRib3hJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodGJveF9faW1hZ2UnKVxyXG5jb25zdCBsaWdodGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodGJveCcpXHJcbmNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJylcclxuXHJcbmJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdGNsb3NlTGlnaHRib3goKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gY2xvc2VMaWdodGJveCgpIHtcclxuXHRsaWdodGJveC5jbGFzc0xpc3QucmVtb3ZlKCdsaWdodGJveC0tYWN0aXZlJylcclxuXHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2NrZWQnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuTGlnaHRCb3goc3JjLCBhbHQpIHtcclxuXHRsaWdodGJveEltYWdlLnNyYyA9IHNyY1xyXG5cdGxpZ2h0Ym94SW1hZ2UuYWx0ID0gYWx0XHJcblx0bGlnaHRib3guY2xhc3NMaXN0LmFkZCgnbGlnaHRib3gtLWFjdGl2ZScpXHJcblx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdibG9ja2VkJylcclxufVxyXG5cclxuY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbGxlcnlfX2l0ZW0taW1hZ2UnKVxyXG5pbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XHJcblx0aW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0Y29uc3QgaW1hZ2VTcmMgPSBlLnRhcmdldC5zcmNcclxuXHRcdGNvbnN0IGltYWdlQWx0ID0gZS50YXJnZXQuYWx0XHJcblx0XHRvcGVuTGlnaHRCb3goaW1hZ2VTcmMsIGltYWdlQWx0KVxyXG5cdH0pXHJcbn0pXHJcblxyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==
