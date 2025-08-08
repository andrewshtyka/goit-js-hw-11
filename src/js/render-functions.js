import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// екземпляр SimpleLightbox для роботи з модальним вікном
new SimpleLightbox('.some-element a', {
  /* options */
});

export function createGallery(images) {
  /*
    Ця функція повинна:
    - приймати масив images
    - створювати HTML-розмітку для галереї
    - додавати її в контейнер галереї
    - викликати метод екземпляра SimpleLightbox refresh()
    
    Нічого не повертає.
    */
}

export function clearGallery() {
  /*
    Ця функція нічого не приймає та повинна очищати вміст контейнера галереї.
    Нічого не повертає.
    */
}

export function showLoader() {
  /*
    Ця функція нічого не приймає, повинна додавати клас для відображення лоадера.
    Нічого не повертає.
    */
}

export function hideLoader() {
  /*
    Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера.
    Нічого не повертає.
    */
}
