/**
 * JavaScript file for ratings
 * 
 * Resourceful Website https://www.codingnepalweb.com/star-rating-html-css-javascript/
 */

const btn = document.querySelector(".rating__btn");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");

btn.onclick = ()=>{ 
  widget.style.display = "none";
  post.style.display = "block";

  editBtn.onclick = ()=>{
    widget.style.display = "block";
    post.style.display = "none";
  }
  return false;
}

/**
 * New problem. 
 * When we click the post button, it brings us to the homepage
 * 
**/

