var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var img = document.querySelector('img')
var flag = 0

btn.addEventListener('click', function () {

    if (flag == 0) {
        h2.innerHTML = 'Requesting...'
        h2.style.color = 'yellow'

        setTimeout(function () {
            h2.innerHTML = 'Friend'
            h2.style.color = 'green'
            img.style.border = '3px solid green'
            btn.innerHTML = 'Remove'

        }, 3000)
        flag = 1

    }
    else {
        setTimeout(function () {
            h2.innerHTML = 'Stranger'
            h2.style.color = 'red'
            btn.innerHTML = 'Add Friend'
            img.style.border = '3px solid red'

        }, 500)
        flag = 0

    }

})