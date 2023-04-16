var queues = [];

function addToQueue() {
  var queueNum = document.getElementById("queue-num").value;
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var time = document.getElementById("time").value;

  var queue = queues[queueNum] || (queues[queueNum] = []);

  var priority = age >= 60 ? 1 : 2;

  var customer = {
    name: name,
    age: age,
    time: time,
    priority: priority,
    queueNum: queueNum,
  };

  queue.push(customer);

  updateQueueDisplay();
}

function updateQueueDisplay() {
  var queueDisplay = document.getElementById("queues");
  queueDisplay.innerHTML = "";

  for (var i = 0; i < queues.length; i++) {
    var queue = queues[i];
    if (queue) {
      var queueNum = i;
      var queueHeader = document.createElement("h3");
      queueHeader.innerHTML = "Queue " + queueNum;
      queueDisplay.appendChild(queueHeader);

      for (var j = 0; j < queue.length; j++) {
        var customer = queue[j];
        var customerDiv = document.createElement("div");
        var timeRemaining = getTimeRemaining(customer.time);

        customerDiv.innerHTML =
          "Name: " +
          customer.name +
          " | Age: " +
          customer.age +
          " | Time: " +
          customer.time +
          " | Time remaining: " +
          timeRemaining;

        if (customer.priority === 1) {
          customerDiv.style.color = "red";
        }

        queueDisplay.appendChild(customerDiv);
      }
    }
  }
}

function getTimeRemaining(startTime) {
  var now = new Date();
  var start = new Date();
  var splitTime = startTime.split(":");
  start.setHours(splitTime[0]);
  start.setMinutes(splitTime[1]);
  start.setSeconds(0);

  var diff = start - now;
  if (diff < 0) {
    return "Expired";
  }
  var minutes = Math.floor((diff / 1000 / 60) % 60);
  var seconds = Math.floor((diff / 1000) % 60);
  return minutes + "m " + seconds + "s";
}
