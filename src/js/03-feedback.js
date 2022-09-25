import throttle from 'lodash.throttle';

const localStorageKey = 'feedback-form-state';
const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');
const formRef = document.querySelector('.feedback-form');
const timeDelay = 500;
const initialFormData = {
  email: '',
  message: '',
};
let currentFormData = initialFormData;
// debugger;
fillForm();

formRef.addEventListener('input', throttle(onFormInput, timeDelay));
formRef.addEventListener('submit', onFeedbackFormSubmit);
// inputRef.addEventListener('input', throttle(onInputInput, timeDelay));

// textareaRef.addEventListener('input', throttle(onTextAreaInput, timeDelay));

function onFormInput(e) {
  currentFormData = {
    ...currentFormData,
    [e.target.name]: e.target.value,
  };
  const value = JSON.stringify(currentFormData);
  localStorage.setItem(localStorageKey, value);
}

function onFeedbackFormSubmit(e) {
  e.preventDefault();

  formRef.reset();
  console.log(currentFormData);
  currentFormData = initialFormData;
  const value = JSON.stringify(currentFormData);
  localStorage.setItem(localStorageKey, value);
}

function loadFeedbackFormState() {
  currentFormData =
    JSON.parse(localStorage.getItem(localStorageKey)) || initialFormData;
  return currentFormData;
}

function fillForm() {
  const { email, message } = loadFeedbackFormState();
  inputRef.value = email;
  textareaRef.value = message;
}
// Выполняй это задание в файлах 03-feedback.html и 03-feedback.js. Разбей его на несколько подзадач:

// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.
