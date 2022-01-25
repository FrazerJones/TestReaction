document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("Start").addEventListener("click", Start);
    document.getElementById("Area").addEventListener("click", End);
  });

  document.getElementById("Area").disabled = true; 
  var timeInSeconds = 0;

  function Start() {
    timeInSeconds = 0;
      document.getElementById("time").style.display = "block";
      document.getElementById("Area").disabled = true;
      document.getElementById("Area").style.backgroundColor = "red";
      document.getElementById("Start").style.display = "None";
      Random = Math.floor(Math.random() * 25000) + 5000;
      timer = setInterval(() => {
        timeInSeconds += 4;
        document.getElementById('time').innerText = ("Elapsed time: " + timeInSeconds + "ms");
        if (timeInSeconds >= Random) {
            document.getElementById("Area").style.backgroundColor = "limeGreen";
            document.getElementById("Area").disabled = false;
        }
     }, 1)
    }

  function End() {
    var total = (timeInSeconds - Random);
    clearInterval(timer);
    document.getElementById('time').innerText = ("Your reaction time is: " + total + "ms");
    document.getElementById("Area").style.backgroundColor = "blueviolet";
    document.getElementById("Area").disabled = true;
    document.getElementById("Start").style.display = "block";
}
