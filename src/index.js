module.exports = function toReadable(number) {
    if (!number) return "zero";
    let arr12 = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let arr100 = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number < 20) return arr12[number];
    if (number > 19 && number < 100) {
        if (number % 10 === 0) return arr100[Math.floor(number / 10)];
        else return arr100[Math.floor(number / 10)] + " " + arr12[number % 10];
    }
    if (number > 99) {
        if (number % 100 === 0)
            return arr12[Math.floor(number / 100)] + " " + "hundred";
        if (number % 10 === 0)
            return (
                arr12[Math.floor(number / 100)] +
                " " +
                "hundred" +
                " " +
                arr100[(number % 100) / 10]
            );
        else
            return (
                arr12[Math.floor(number / 100)] +
                " " +
                "hundred" +
                " " +
                toReadable(number % 100)
            );
    }
};
