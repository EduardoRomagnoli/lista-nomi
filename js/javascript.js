var num=1;
var numriga = 2;

function button()
{
      num++;
      var tabella = document.getElementById('tabella');
      var newriga = tabella.insertRow(numriga);
      var newcell1 = newriga.insertCell(0);
      var newcell2 = newriga.insertCell(1);
      var newcell3 = newriga.insertCell(2);
      newcell1.innerHTML = "<input type='text' name='nome'/>";
      newcell2.innerHTML = "<input type='text' name='nome'/>";
      newcell3.innerHTML = "<input type='text' name='nome'/>";
      numriga++;
}

function button1()
{
    if(numriga > 2)
    {
      document.getElementById("tabella").deleteRow(num);
      num--;
      numriga--;
    }
}
