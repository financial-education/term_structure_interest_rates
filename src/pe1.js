function myJsFunction()
{
    var y1 = parseFloat(document.getElementById('input1').value);
    var y2 = parseFloat(document.getElementById('input2').value);
    var forward_rate = 100 * (((1 + y2/100) * (1 + y2/100)) / (1 + y1/100) - 1);
    document.getElementById("out1").innerHTML = forward_rate.toFixed(2);
}
