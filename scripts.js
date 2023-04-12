let queue1 = [];
let queue2 = [];

function addToQueue(queueNum) {
  let name = prompt("Enter your name:");
  let time = prompt("Enter estimated time in minutes:");
  let item = {name: name, time: time};
  if (queueNum === 1) {
    queue1.push(item);
    updateQueue(1);
  } else if (queueNum === 2) {
    queue2.push(item);
    updateQueue(2);
  }
}

function updateQueue(queueNum) {
  let queue = queueNum === 1 ? queue1 : queue2;
  let queueList = document.getElementById(`queue${queueNum}`);
  queueList.innerHTML = "";
  for (let i = 0; i < queue.length; i++) {
    let item = queue[i];
    let li = document.createElement("li");
    li.innerHTML = `${item.name} - <span id="time-${queueNum}-${i}">${item.time} min</span>`;
    queueList.appendChild(li);
    updateTimeRemaining(queueNum, i);
  }
}

function updateTimeRemaining(queueNum, index) {
  let item = queueNum === 1 ? queue1[index] : queue2[index];
  let timeRemaining = item.time * 60;
  let timer = setInterval(() => {
    timeRemaining--;
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    let timeSpan = document.getElementById(`time-${queueNum}-${index}`);
    timeSpan.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds} remaining`;
    if (timeRemaining === 0) {
      clearInterval(timer);
      alert(`${item.name} is done!`);
      let queue = queueNum === 1 ? queue1 : queue2;
      queue.splice(index, 1);
      updateQueue(queueNum);
    }
  }, 1000);
}
