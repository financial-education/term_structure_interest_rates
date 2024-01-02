function myJsFunction2()
{
    var y1 = parseFloat(document.getElementById('input3').value) / 100;
    var y2 = parseFloat(document.getElementById('input4').value) / 100;
    var two_year_rate = Math.sqrt((1 + y1) * (1 + y2)) - 1;
    document.getElementById("out2").innerHTML = (100 * two_year_rate).toFixed(2);
}
