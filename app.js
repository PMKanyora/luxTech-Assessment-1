document.getElementById('main').style.backgroundColor = 'blue';
document.getElementById('main').style.padding = 0;
document.getElementById('main').style.margin = 0;
document.getElementById('main').style.display = 'flex';
document.body.style.background = '#E1B168'
document.body.style.fontSize = '24px'
document.getElementById('nav').style.backgroundColor = 'green';
document.getElementById('nav').style.display = 'flex';
document.getElementById('nav').style.padding = '0';
document.getElementById('nav').style.marginBottom = '15px';

//create a button
var btn = document.createElement('button');
btn.innerHTML = 'button';

//append it to body
var body = document.getElementsByTagName('body')[0];
body.appendChild(btn);

//add event hundler
btn.addEventListener('click', function() {
    alert (
        `
        <h2>Welcome to JavaScript Training BootCamp</h2>
        <p>Lux Tech Academy is a free online training BootCamp which have crash and advance
        coding classes.</p>
        `
    )
})

