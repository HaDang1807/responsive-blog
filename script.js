const searchIcon = document.querySelector('#search-icon');
const searchForm = document.querySelector(".search-form");
const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');

searchIcon.onclick = () =>{
  searchIcon.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  menu.classList.remove('fa-times');
};

menu.onclick = () => {
  navbar.classList.toggle('active');
  menu.classList.toggle('fa-times');
  searchForm.classList.remove('active');
  searchIcon.classList.remove('fa-times');
};


