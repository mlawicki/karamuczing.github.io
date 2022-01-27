

var przyslowia = ["Pij karamucza bądź bambucza",
             "O kelerze o kelerze, obudziłeś we mnie zwierze",
             "Bardzo lubia pić kelera bo on dobrze poniewiera",
             "Gdy zły humor miewosz z rana, pijej jabol Amerana!",
             "Karamuczing is bambuczing!",
             "Czy karamucz, czy to keler, zaraz szybko go wychleję!"]

function rand(items) {
    return items[items.length * Math.random() | 0];
}

document.title = rand(przyslowia)