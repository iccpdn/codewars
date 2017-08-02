const formatDuration = (s) => {
    s = s || 0;
    const time = {};
    if (Math.floor(s / 31536000)) { time.year = Math.floor(s / 31536000); }
    s %= 31536000;
    if (Math.floor(s / 86400)) { time.day = Math.floor(s / 86400); }
    s %= 86400;
    if (Math.floor(s / 3600)) { time.hour = Math.floor(s / 3600); }
    s %= 3600;
    if (Math.floor(s / 60)) { time.minute = Math.floor(s / 60); }
    if (s % 60) { time.second = s % 60; }

    const elementString = (time) => {
        const arr = [];
        for (const prop in time) {
                if (time[prop] > 1) { arr.push(time[prop] + ' ' + prop + 's'); }
                else { arr.push(time[prop] + ' ' + prop); }
        }
        
        return arr;
    };

    const arr = elementString(time);

    switch (Object.keys(time).length) {
        case 0:
            return 'now';
        case 1:
            return arr[0];
        case 2:
            return arr[0] + ' and ' + arr[1]; 
        case 3:
            return arr[0] + ', ' + arr[1] + ' and ' + arr[2];
        case 4:
            return arr[0] + ', ' + arr[1] + ', ' + arr[2] + ' and ' + arr[3];    
        default:
            return arr[0] + ', ' + arr[1] + ', ' + arr[2] + ', ' + arr[3] + ' and ' + arr[4]; 
    }
};


// codewars best practice

function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}

function formatDuration (seconds) {
  if(!seconds)return "now";
  var strout = "";
  var s = seconds%60;
  seconds = (seconds-s)/60;
  var m = seconds%60;
  seconds = (seconds-m)/60;
  var h = seconds%24;
  seconds = (seconds-h)/24;
  var d = seconds%365;
  seconds = (seconds-d)/365;
  var y = seconds;
  
  var english=[];
  if(y)english.push(y+" year"+(y>1?'s':''));
  if(d)english.push(d+" day"+(d>1?'s':''));
  if(h)english.push(h+" hour"+(h>1?'s':''));
  if(m)english.push(m+" minute"+(m>1?'s':''));
  if(s)english.push(s+" second"+(s>1?'s':''));
  
  return english.join(", ").replace(/,([^,]*)$/," and$1");
  
}

console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3600));
console.log(formatDuration(3662));

