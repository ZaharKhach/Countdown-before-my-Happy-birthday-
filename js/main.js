const days = document.getElementById('days'),
      hours = document.getElementById('hours'),
      minutes = document.getElementById('minutes'),
      seconds = document.getElementById('seconds'),
      countdown = document.getElementById('countdown'),
      preloader = document.getElementById('preloader')

//Делаем расчеты следующего года 
const currentYear = new Date().getFullYear();
const birthday = new Date(`October 06 ${currentYear} 00:00:00`);``      

function updateCountdowmn() {
    const currentTime = new Date();

    const diff = birthday - currentTime;
    
    const dayLeft = Math.floor(diff / 1000 / 60 / 60 / 24),
        // округляем в большую сторну 
        // делим на 1000 - получаем секудны 
        // минуты 
        // часы
        // дни
          hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24,
          //получаем сколько всего часов осталось и потом от этого мы вычитаем то, что нам не надо то есть дни
          minutesLeft = Math.floor(diff / 1000 / 60) % 60;
          //получаем сколько всего минут, и вычитаем часы 
          secondsLeft = Math.floor(diff / 1000) % 60;
          //получаем сколько всего секунд, и вычитаем минуты
    
    days.innerText = dayLeft.toString().padStart(2, "0");
    hours.innerText = hoursLeft.toString().padStart(2, "0");
    minutes.innerText = minutesLeft.toString().padStart(2, "0");
    seconds.innerText = secondsLeft.toString().padStart(2, "0");
}
//Используем SetInterval для того чтобы наша фция работала каждую секунду 
setInterval(updateCountdowmn, 1000);

setTimeout(() => {
    preloader.remove();
    countdown.style.display = 'flex';
},1000)
//когда мы заходим на страницу у нас не сразу срабатывает фция update.... потому что она 
//в интервале и работает спустя сек после зашрузки стр поэтмоу 
//я добавил preloader (типа загрузка ) и убрал отображение счетчика поставив none в свойство display
//этот таймаут нужен для удаления спустя секу нашего preloader и отобрадения отчета 