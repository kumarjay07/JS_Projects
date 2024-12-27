var users = [
    {
        name: 'Jay',
        age: 21,
        city: 'Bhopal',
        salary: 10000

    }, {
        name: 'Harsh',
        age: 30,
        city: 'Kolkata',
        salary: 5000

    }, {
        name: 'Amit',
        age: 25,
        city: 'Mumbai',
        salary: 15000

    }

]

var clutter = ''

users.forEach(function(elem){
    clutter+= `<div class="card">
        <h1>${elem.name}</h1>
        <h4>${elem.age}, ${elem.city}</h4>
        <h5>Salary: ${elem.salary}</h5>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, excepturi.</p>

    </div>`
    
    
})

var body = document.querySelector('body')

body.innerHTML = clutter