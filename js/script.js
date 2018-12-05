/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
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
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
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
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
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




// Remember to delete the comments that came with this file, and replace them with your own code comments.