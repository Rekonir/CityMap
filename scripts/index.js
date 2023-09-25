// Получаем список всех кнопок
const buttons = document.querySelectorAll('.btn');

// Получаем список всех описаний
const discriptions = document.querySelectorAll('.btn .discription');


// Функция для обработки события клика
function handleClick(event) {
    // Проверяем, открыта ли текущая кнопка
    const isOpen = this.classList.contains('open');
    // Устанавливаем opacity описаний в 0
    discriptions.forEach(discription => discription.style.opacity = 0);

    // Закрываем все открытые кнопки 
    buttons.forEach(button => button.classList.remove('open'));

    // Если текущая кнопка уже открыта, то просто выходим из функции
    if (isOpen) {
        return;
    }

    // Открываем текущую кнопку и устанавливаем opacity описания в 1
    this.classList.add('open');
    this.querySelector('.discription').style.opacity = 1


    // Останавливаем всплытие события, чтобы не закрыть кнопку сразу же после открытия
    event.stopPropagation();
}

// Добавляем обработчик события клика для каждой кнопки
buttons.forEach(button => button.addEventListener('click', handleClick));

// Добавляем обработчик события клика для всего документа, чтобы закрывать кнопки при клике вне них
document.addEventListener('click', () => {
    buttons.forEach(button => button.classList.remove('open'));
    discriptions.forEach(discription => discription.style.opacity = 0);
});