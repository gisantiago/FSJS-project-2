/******************************************
ist Filter and Pagination
******************************************/
   


/*** 
   Global variables... DOM selectors
***/
const listItems = document.querySelectorAll('.student-list li');
let pagination = document.createElement('div');
pagination.className = 'pagination';
document.querySelector('.page').appendChild(pagination);
let ul = document.createElement('ul');
document.querySelector('.pagination').appendChild(ul);


let pageSize = 10;
let pageCount = Math.ceil(listItems.length / pageSize);
let startPage = 1;


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

   for (let i = 1; i <= pageCount; i++) {
      let li = document.createElement('li');
      document.querySelector('.pagination ul').appendChild(li);
      let a = document.createElement('a');
      document.querySelector('.pagination ul li').appendChild(a);
      a.setAttribute('href', '#');
      a.innerHTML = i;
      a.addEventListener('click', (e) => {
         const currentLink = e.target.textContent;
         showPage(listItems, currentLink);
         links = document.querySelectorAll('.active');
         for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('active');
         }
         e.target.className = 'active';
      });
   }
   
}

appendPageLinks(listItems);
