// const text = 'text';
// const key = 'testKey';
// localStorage.getItem(key);
// console.log(localStorage.getItem(key));
const localStorageKey = 'feedback-form-state';
const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');
const formRef = document.querySelector('.feedback-form');
const initialFormData = {
  input: '',
  textArea: '',
};
let currentFormData = null;
// debugger;
fillForm();

formRef.addEventListener('input', onFormInput);
formRef.addEventListener('submit', onFeedbackFormSubmit);
inputRef.addEventListener('input', onInputInput);

textareaRef.addEventListener('input', onTextAreaInput);

function onFormInput() {
  // console.log('input');
}

function onFeedbackFormSubmit(e) {
  e.preventDefault();
  console.log('submit');
}

function onInputInput(e) {
  currentFormData = {
    ...currentFormData,
    input: e.target.value,
  };
  const value = JSON.stringify(currentFormData);
  localStorage.setItem(localStorageKey, value);
  console.log(e.target.value);
}

function onTextAreaInput(e) {
  currentFormData = {
    ...currentFormData,
    textArea: e.target.value,
  };
  const value = JSON.stringify(currentFormData);
  localStorage.setItem(localStorageKey, value);
  console.log(e.target.value);
}

function loadFeedbackFormState() {
  currentFormData =
    JSON.parse(localStorage.getItem(localStorageKey)) || initialFormData;
  return currentFormData;
}

function fillForm() {
  const { input, textArea } = loadFeedbackFormState();
  inputRef.value = input;
  textareaRef.value = textArea;
}
// Выполняй это задание в файлах 03-feedback.html и 03-feedback.js. Разбей его на несколько подзадач:

// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.
