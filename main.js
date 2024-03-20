let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#1B3C73;">App and website developer</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
