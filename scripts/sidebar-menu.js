(function () {
    const openingBtn = document.querySelector('.sidebar__hamdurger');
    const closingBtn = document.querySelector('.sidebar__close');
    const sidebar = document.querySelector('.sidebar');
    
    openingBtn.addEventListener("click", function () {
        sidebar.classList.add('sidbar--opened');
    });
    closingBtn.addEventListener("click", function () {
        sidebar.classList.remove('sidbar--opened');
    });    
}())
    



