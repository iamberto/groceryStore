<<<<<<< HEAD
const storeName = 'BitBerto';
document.title = `${storeName} Grocery Store`;


// 
=======
const storeName = 'Jacque\'s';
document.title = `${storeName} Grocery Store`;

>>>>>>> 647593b41b63fdc295ea9b2227025bb6d9057b2c
const NAV_LIST = [
    {
        name: 'home',
        link: 'index.html'
<<<<<<< HEAD
    }
];
=======
    },
    //Make two more
    {
        name: 'about',
        link: 'about.html'
    },
    {
        name: 'contact',
        link: 'contact.html'
    }
];
//grab nav 
const nav = document.querySelector('nav > ul');
//now to loop through nav list and append to nav, lets try it out:
NAV_LIST.forEach( function (list)  {
    let li = document.createElement('li');
    li.className = 'nav_link';
    let anchor = document.createElement('a');
    anchor.setAttribute('href', list.link);
    anchor.innerHTML = list.name;
    li.appendChild(anchor);
    nav.append(li);
});


>>>>>>> 647593b41b63fdc295ea9b2227025bb6d9057b2c
