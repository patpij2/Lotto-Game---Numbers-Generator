(function() {

    var btn = document.querySelector("#getNumbers"),
        output = document.querySelector("#showNumbers");

    function getRandom(min, max) {
        return Math.round(Math.random() * (max-min) + min);
    }
    
    function showRandomNumbers() {
        var numbers = [],
            random;

        for (var i=0; i<6; i++) {
            random = getRandom(1,49);

            while (numbers.includes(random)) {
                random = getRandom(1,49);
                // console.log('powtorzyla sie liczba kurde')
            }

            numbers.push(random)
        }
        output.value = numbers.join(", ");
    }

    btn.onclick = showRandomNumbers;

})(); 