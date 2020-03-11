window.addEventListener('load',function(){
  startTimer();
  startCounter();
  addInfiniscroll();
  spreadList();
  initNewsfeed();
});

function startTimer(){
  if(document.getElementById('clock')){
    var timer = document.getElementById('clock');
    var setTimer = function () {
      function pad(n){
        return String("00" + n).slice(-2);
      }
      var date = new Date();
      timer.innerHTML = pad(date.getHours()) + ':' + pad(date.getMinutes()) + ':' + pad(date.getSeconds());
    }
    setTimer();
    setInterval(setTimer, 1000, timer);
  }
}

function spreadList(){
  var lis = [].slice.call(document.getElementById('container').getElementsByTagName('li'));
  for(var _li in lis){
    var li = lis[_li];
    var max = {v:window.innerWidth*0.5,h:window.innerHeight*0.5};
    var min = {v:window.innerWidth*0.2,h:window.innerHeight*0.2};
    function getRand(min,max,p){
      return min[p] + Math.random() * (max[p] - min[p]);
    }
    var m = {
      t: getRand(min,max,'v') + 'px',
      r: getRand(min,max,'h') + 'px',
      b: getRand(min,max,'v') + 'px',
      l: getRand(min,max,'h') + 'px'
    }
    li.style.margin = m.t + ' ' + m.r + ' ' + m.b + ' ' + m.l;
  }
}

function startCounter(){
  var counter = document.getElementById('counter');
  document.getElementById('container').addEventListener('scroll',function(){
    counter.innerText = (3000 + (Number(counter.innerText) - 2999)) % 9999;
  },counter);
}

function addInfiniscroll(){
  var container = document.getElementById('container');
  container.innerHTML += container.innerHTML;
  container.addEventListener('scroll',function(){
    if(this.scrollTop == this.scrollTopMax){
      this.scrollTop = 0;
    }
  });
}

function initNewsfeed(){
  var feed = document.getElementById('newsfeed');
  var news = [].slice.call(feed.getElementsByTagName('a'));
  var html = '';
  for(var i = 0; i < 10; i++){
    for(var link in news){
      console.log(news[link]);
      html += news[link].outerHTML + ' +++ ';
    }
  }
  feed.innerHTML = html;
}
