module.exports = function getZerosCount(number, base) {
    var num = number;
    for(var i = 2; i <= base; i++){
        var a = 0;
        while(base % i == 0){
            a++;
            base = Math.trunc(base / i);
        }
        var x = 0;
        var  num2 = number;
        while (num2 / i > 0){
            x = x + Math.trunc(num2 / i);
            num2 = Math.trunc(num2 / i);
        }
        if (num > x / a){
            num = x / a;
        }

    }
    return Math.trunc(num);
};