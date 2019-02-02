var name = prompt("Укажите ваше имя")
var date = prompt("Укажите год вашего рождения")
var get_current_age = function(date) {
return new Date().getFullYear() - date
}
alert (name+" "+get_current_age (date))