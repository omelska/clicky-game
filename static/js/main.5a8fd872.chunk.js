(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),i=a(2),s=a.n(i),l=(a(16),function(){return c.a.createElement("header",{id:"header"},c.a.createElement("h1",null,"Art you clicked!"),c.a.createElement("h3",null,"Click on an image to earn points, but remember images that you already clicked on!"))}),n=a(6),o=a(8),m=a(3),u=a(4),g=a(7),h=a(5),d=a(9),b=(a(17),function(e){return c.a.createElement("nav",{id:"nav",className:"sticky-top "},c.a.createElement("h2",{id:"art"},"Click on ART!"),c.a.createElement("h2",{id:"text"},e.text),c.a.createElement("h2",{id:"score"},"Score: ",e.score),c.a.createElement("h2",{id:"total-score"},"Highest Score: ",e.bestScore))}),k=(a(18),function(e){return c.a.createElement("div",{className:"fixed-size"},c.a.createElement("img",{src:e.src,alt:e.alt,className:"img-fluid img frame",isclicked:e.isclicked,onClick:function(){return e.onClick(e)}}))}),y=[{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/1.jpg?raw=true",alt:"The Persistence of Memory by Salvadore Dali",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/2.jpg?raw=true",alt:"Unknown painting by Salvadore Dali",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/3.jpg?raw=true",alt:"Soft Construction with Boiled Beans by Salvadore Dali",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/4.jpg?raw=true",alt:"Apparition of Face and Fruit Dish on a Beach by Salvadore Dali",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/5.jpg?raw=true",alt:"Columbine by Leonardo Da Vinci ",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/6.jpg?raw=true",alt:"Mona lisa by Leonardo Da Vinci",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/7.jpg?raw=true",alt:"Lady with an Ermine by Leonardo Da Vinci",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/8.jpg?raw=true",alt:"Madonna of the Carnation by Leonardo Da Vinci",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/9.jpg?raw=true",alt:"The Birth of Venus by Sandro Botticelli",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/10.jpg?raw=true",alt:"Young Lady In A Boat by James Tissot",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/11.jpg?raw=true",alt:"The Starry Night by Van Gogh",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/12.jpg?raw=true",alt:"Self portrait, Van Gogh",isClicked:!1}],f=(a(19),function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(g.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={score:0,bestScore:0,text:"Click an image to begin",imgArr:y},a.handleClick=function(e){console.log("Clicked"),a.calculateScore(e),a.handleTextChange(e),a.compareScores(),a.ramdomizeImages()},a.calculateScore=function(e){var t=a.state.imgArr.map(function(t){return t.src===e.src?Object(o.a)({},t,{isClicked:!t.isClicked}):t});e.isclicked?a.setState({score:0,imgArr:y}):a.setState({score:a.state.score+1,imgArr:t})},a.compareScores=function(){a.state.score>a.state.bestScore?a.setState({bestScore:a.state.score}):a.setState({bestScore:a.state.bestScore})},a.handleTextChange=function(e){e.isclicked?a.setState({text:"Wrong!"}):a.setState({text:"You've guessed correctly"})},a.shuffleArray=function(){for(var e=Object(n.a)(a.state.imgArr),t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),c=e[t];e[t]=e[r],e[r]=c}console.log(e),a.setState({imgArr:e})},a.ramdomizeImages=function(){var e=[];for(console.log("BEFORE RANDOMIZE"),a.state.imgArr.forEach(function(e){return console.log(e.alt,e.isClicked)});e.length<a.state.imgArr.length;){var t=Math.floor(Math.random()*a.state.imgArr.length);-1===e.indexOf(a.state.imgArr[t])&&e.push(a.state.imgArr[t])}a.setState({imgArr:e}),console.log("AFTER RANDOMIZE ARR"),e.forEach(function(e){return console.log(e.alt,e.isClicked)})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.ramdomizeImages()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(b,{score:this.state.score,bestScore:this.state.bestScore,text:this.state.text}),c.a.createElement("div",{className:"flex"},this.state.imgArr.map(function(t){return c.a.createElement(k,{key:t.src,src:t.src,alt:t.alt,isclicked:t.isClicked,onClick:function(t){return e.handleClick(t)}})})))}}]),t}(c.a.Component)),p=(a(20),function(){return c.a.createElement("footer",{id:"footer"},c.a.createElement("p",null,"copyright \xa9 2019"))});var C=function(){return c.a.createElement("div",null,c.a.createElement(l,null),c.a.createElement(f,null),c.a.createElement(p,null))};s.a.render(c.a.createElement(C,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.5a8fd872.chunk.js.map