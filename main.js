var p1 = document.getElementsByTagName('p')[0]
var p2 = document.getElementsByTagName('p')[1]
var body = document.querySelector('body')
var image = document.querySelector('img')
var dates = new Date()
var hour = dates.getHours()
if (hour<6){
  p1.innerText = 'Madruga ta ON!' 
  p1.style.color = '#252627'
  body.style.backgroundColor = 'rgba(90, 0, 100)'
  image.src = 'https://miro.medium.com/fit/c/256/256/1*SXjyRsYrH0z4DiLHFuVhhg.png'
} else if (hour<13){
  p1.innerText = 'Bom dia!' 
  p1.style.color = 'rgb(177, 100, 0)'
  body.style.backgroundColor = 'rgba(255, 255, 79, 0.863)'
  image.src = 'https://anotherbloodybullshitblog.files.wordpress.com/2016/01/java-coffee-14303.png?w=256'
} else if (hour<18){
  p1.innerText = 'Boa Tarde!' 
  p1.style.color = 'rgb(245, 118, 0)'
  body.style.backgroundColor = 'rgba(245, 118, 0, 0.863)'
  image.src = 'https://a.thumbs.redditmedia.com/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4.png'
} else{
  p1.innerText = 'Boa Noite!' 
  p1.style.color = 'rgb(46, 0, 99)'
  body.style.backgroundColor = 'rgb(46, 0, 99)'
  image.src = 'https://miro.medium.com/fit/c/256/256/0*dGXe0whU_tOOcnbY.jpg'
}

p2.innerHTML = `${hour}:${dates.getMinutes()}:${dates.getSeconds()}`