var h2 = document.querySelector('h2')
var btn = document.querySelector('button')
var img = document.querySelector('img')

var flag = 0

btn.addEventListener('click', function () {
    if (flag == 0) {
        h2.innerHTML = 'Friend'
        h2.style.color = 'green'
        img.style.border = '3px solid green'
        btn.innerHTML = 'Remove'

        flag = 1
    }
    else{
        h2.innerHTML = 'Stranger'
        h2.style.color = 'red'
        img.style.border = '3px solid red'
        btn.innerHTML = 'Add Friend'

        flag = 0

    }
})

