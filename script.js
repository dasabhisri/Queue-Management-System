var queue = [];
var prevTime=0;

function addCustomer(){ 
  var customerName = document.getElementById("customerName").value;
  var customerAge = document.getElementById("customerAge").value;
  var estimatedTime = document.getElementById("estimatedTime").value;
  if(customerAge>60){
    alert("Priotity Customer Added !");
  }
  else{
    alert("Customer Added !");
  }
  var currentTime = new Date().getTime();
  //var prevTime=0;

  //for(var i=0;i<=queue.length;i++){
  //  prevTime+=customer[i].timeRemaining;
  //}
  
  var timeRemaining = (estimatedTime * 60 * 1000) + currentTime;

  var customer = { name: customerName, age: customerAge, timeRemaining: timeRemaining };

  if (customerAge > 60) {
    queue.unshift(customer);
  } else {
    queue.push(customer);
  }

   document.getElementById("customerName").value = "";
   document.getElementById("customerAge").value = "";
   document.getElementById("estimatedTime").value = "";

  displayQueue();
}

function displayQueue() {
  var queueList = document.getElementById("queueList");
  queueList.innerHTML = "";

  for (var i = 0; i < queue.length; i++) {
    var customer = queue[i];

    var timeRemaining = Math.round((customer.timeRemaining - new Date().getTime()) / 1000);
    if (timeRemaining < 0) {
      timeRemaining = 0;
      alert("Customer Served !");
      queue.shift(customer);
    }
        
        var listItem = document.createElement("li");
        var text = document.createTextNode(customer.name + " (" + customer.age + " years old) - " + timeRemaining + " seconds remaining");
        listItem.appendChild(text);

    queueList.appendChild(listItem);
  }
}
