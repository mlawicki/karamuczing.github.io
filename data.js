

var przyslowia = ["Pij karamucza bądź bambucza",
             "O kelerze o kelerze, obudziłeś we mnie zwierze",
             "Bardzo lubia pić kelera bo on dobrze poniewiera",
             "Gdy zły humor miewosz z rana, pijej jabol Amerana!",
             "Karamuczing is bambuczing!",
             "Czy karamucz, czy to keler, zaraz szybko go wychleję!"]

var przyslowiownik = document.getElementById("tekstPrzyslowia")
przyslowiownik.innerHTML += rand(przyslowia)
document.title = rand(przyslowia)

function rand(items) {
    return items[items.length * Math.random() | 0];
}