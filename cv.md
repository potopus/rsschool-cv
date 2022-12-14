![Foto](/img.jpg)


## Butkevich Pavel Aleksandrovich
### 19/06/1980
**e-mail:** Paveldelo@yandex.ru <br/>
**tel:** +375 33 305 22 08

I study the layout and am interested in the frontend. Good skills in using HTML and CSS. General knowledge of JavaScript, Java Core. A general representation of manual QA testing.
I found and studied all the acquired knowledge from open sources.
When I found out about the RSSchool courses, I decided to take it and get enough knowledge to acquire a new specialty in the field of JS developer.


```javascript
function nearestSq(n){
    // your code
   let i=0,
  valueDwn=0,
  valueUp=0;
  if (Number.isInteger(Math.sqrt(n))){
    //console.log(n);
    return (n);
}else 
  do{
    valueUp=Math.sqrt(n+i);
    valueDwn=Math.sqrt(n-i);
    if(Number.isInteger(valueUp)){
     // console.log(n+i);
      return (n+i)
    }else
      if (Number.isInteger(valueDwn)){
        //console.log(n-i);
        return (n-i);
      }
      
    i++;
  }
while (!Number.isInteger(valueUp)&!Number.isInteger(valueDwn));
}
```
## Completed courses
[Html and CSS Layout Tutorials](https://code.mu/ru/)<br/>

[Tutorial on JS - javascript.ru](https://learn.javascript.ru/)


## Projects on GitHub
[https://github.com/potopus/rsschool-cv.git](https://github.com/potopus/rsschool-cv.git)