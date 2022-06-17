const tabs = Array.from(document.querySelectorAll('.tab')); // массив вкалдок
const content = Array.from(document.querySelectorAll('.tab__content')); // массив контента вкладок
let indexTabs;

function contentSwitching() {
    tabs.forEach((tab) => tab.classList.remove('tab_active')); // итерация для удаления активных ссылок
    content.forEach((element) => element.classList.remove('tab__content_active')); // итерация для удаления активного контента
    this.classList.add('tab_active'); // добавление активной ссылки к this.
    // indexTabs = tabs.indexOf(this);
    content[tabs.indexOf(this)].classList.add('tab__content_active') // добавление активного контента 
}

tabs.forEach((link) => { // итерация по вкладкам для обработчика событий
    link.addEventListener('click', contentSwitching);
});

