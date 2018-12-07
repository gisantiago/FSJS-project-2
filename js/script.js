/******************************************
List Filter and Pagination
******************************************/
   


/*** 
   Global variables... DOM selectors
***/
const listItems = document.querySelectorAll('.student-list li');
let pageSize = 10;
let startPage = 1;


/*** 
   The `createPaginationDiv` function create the pagination div with its ul.
***/
function createPaginationDiv () {
   let pagination = document.createElement('div');
   pagination.className = 'pagination';
   document.querySelector('.page').appendChild(pagination);
   let ul = document.createElement('ul');
   document.querySelector('.pagination').appendChild(ul);
   ul.setAttribute('id', 'paginationUL')
}


/*** 
   The `showPage` function is used to show the number of items allowed on the `pageSize` 
   variable and hide all other item in the list. 
   On this case the default pageSize is set to (10).
***/
function showPage(list, page = 1) {
   for (let i = 0; i < list.length; i++) {
      if (i >= (page * pageSize) - pageSize && i <= (((page * pageSize) - pageSize) + pageSize) - 1) {
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
      }
   }
   return list;
}
showPage(listItems, startPage);



/*** 
   The `appendPageLinks function generates/appends HTML elements...
   This is where the pagination links are dynamically created and attached to the index.HTML.
   this function also call the `showPage` function every time the link buttons are clicked.  
***/

function appendPageLinks(list) {
   createPaginationDiv(); 
   let pageCount = Math.ceil(list.length / pageSize);

   for (let i = 1; i <= pageCount; i++) {
      let li = document.createElement('li');
      document.querySelector('.pagination ul').appendChild(li);
      let a = document.createElement('a');
      document.querySelector('.pagination ul li').appendChild(a);
      a.setAttribute('href', '#');
      a.innerHTML = i;
      a.addEventListener('click', (e) => {
         const currentLink = e.target.textContent;
         showPage(list, currentLink);
         links = document.querySelectorAll('.active');
         for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('active');
         }
         e.target.className = 'active';
      });
   }
}
appendPageLinks(listItems);


function removeLinks() {
   var elem = document.querySelector('.pagination');
   elem.parentNode.removeChild(elem);
}

   

// Search HTML
let searchInput = document.createElement('div');
searchInput.setAttribute('class', 'student-search')
document.querySelector('.page-header').appendChild(searchInput);
let input = document.createElement('input');
input.setAttribute('placeholder', 'Search for students...');
input.setAttribute('type', 'text');
document.querySelector('.student-search').appendChild(input);
input.autocomplete = "on";
let button = document.createElement('button');
button.textContent = 'Search';
document.querySelector('.student-search').appendChild(button);

/*** 
   The `noSearchMessage` 
***/

function noSearchMessage () {
   let noSearch = document.createElement('p');
   noSearch.setAttribute('class', 'noSearch');
   document.querySelector('.page').appendChild(noSearch);
   document.querySelector(".noSearch").innerHTML = 'No match found! Please try again.';
}


/*** 
   The `searchOnList` function search and filter through the Listitems 
   based on the text typed in the input field. 
   the for loop, loops through all the items on the list and hide those who don't 
   match the search query. 
***/
 
function searchOnList () {
   let filter, txtValue;
   filter = input.value.toLowerCase();
   studentArr = [];
   for (let i = 0; i < listItems.length; i ++) { 
      list = listItems[i].querySelectorAll('.student-details h3')[0];
      txtValue = list.textContent || list.innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
         listItems[i].style.display = "";
         studentArr.push(listItems[i]);
      } else {
         listItems[i].style.display = "none";
      }
   }
   
   console.log(studentArr);
   if (studentArr === []) {
      noSearchMessage();
   }

   removeLinks();
   showPage(studentArr, startPage);   
   appendPageLinks(studentArr);
}

// real time filtering and calls the `searchOnList` function
input.addEventListener('keyup', () => {
   searchOnList();
   
});


button.addEventListener('click', () => {
   searchOnList();
});


