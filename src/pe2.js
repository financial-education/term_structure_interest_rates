function myJsFunction2()
{
    var y1 = parseFloat(document.getElementById('input3').value);
    var y2 = parseFloat(document.getElementById('input4').value);
    var two_year_rate = 100 * Math.sqrt((1 + y1/100) * (1 + y2/100)) - 1);
    document.getElementById("out2").innerHTML = two_year_rate.toFixed(2);
}
