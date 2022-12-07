const text1_options = [
  "MOST HUNDREDS AGAINST ONE TEAM",
  "MOST PLAYER OF THE SERIES AWARDS(POS)",
  "HIGHEST CAREER BATTING AVERAGE",
  "MOST FIFTIES IN CAREER",
  "FASTEST TO 12000 RUNS",
  "MOST RUNS IN A CALENDAR YEAR",
  "MOST RUNS IN T20 CAREER",
  "MOST HUNDREDS IN A CALENDAR YEAR",
  "ICC RANKING",
  "WORLD DOMINANCE IN TEST CRICKET",
  "CHASE MASTER",
  "MOST HUNDREDS",
];
const text2_options = [
  "9 times against West Indie in 41 innings , with an average of 66.5",
  "Virat Kohli has most POS awards in T20 internationals with 7 POS awards and he has the 2nd most POS awards in all  international formats with 19 POS awards",
  "Virat Kohli has the highest batting average , 51.50 after 89 innings in T20 internationals ",
  "Virat Kohli stands 1st in most T20 career fifties with 30 fifties in T20 internationals, and 4th most career fifties with 107 fifties in ODI internationals ",
  "Virat Kohli scored 12000 runs in 242 matches in ODI internationals marking the fastest",
  "In 2017 Virat Kohli scored 2818 runs with an average of 68.73 marking the 3rd highest runs in a calendar year and scored 2735runs in 2018 marking the 4th highest, also 2595runs in 2016 marking the 10th highest",
  "Virat Kohli scored 3296 runs in 89 matches in T20 internationals marking the 3rd highest career runs",
  "In 2018 Virat Kohli scored 11 hundreds in 47 innings marking the 2rd highest hundreds in a calendar year and he again scored 11 hundreds in 2017 in 52 innnings",
  "Virat Kohli stayed as NO 1 ODI Batsman for 1,258 days , and he is the third player ever to achieve the no.1 rankings in all three formats.",
  "India won 5 consecutive ICC Test Mace under Virat Kohli captaincy. He is greatest Indian test captian and 3rd most successful in the world",
  "He is at his best when he has a set target and is allowed to chase it",
  "Virat Kohli has scored 70 hundreds in all international formats marking the 3rd most hundreds scored",
];
const color_options = [
  "#ffadad",
  "#ffd6a5",
  "#fdffb6",
  "#caffbf",
  "#9bf6ff",
  "#a0c4ff",
  "#bdb2ff",
  "#ffc6ff",
  "#cb997e",
  "#a5a58d",
  "#b0d0d3",
  "#fb6376",
];
const image_options = [
  "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/12/06/884297-twitter-9.jpg",
  "./assets/vkpos.jpg",
  "https://cdn.wisden.com/wp-content/uploads/2021/10/GettyImages-966584540-3-980x530.jpg",
  "https://imgk.timesnownews.com/story/Virat_Kohli_70_not_out_in_3rd_T20I_vs_WI.jpg?tr=w-1200,h-900",
  "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2020/12/03090952/untitled-jpg.jpg",
  "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/270500/270572.png",
  "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/267900/267912.jpg",
  "https://c.ndtvimg.com/k5edarqk_virat-kohli-century_625x300_02_August_18.jpg",
  "https://www.insidesport.in/wp-content/uploads/2018/08/4-56.jpg",
  "https://s02.sgp1.cdn.digitaloceanspaces.com/article/109999-soejqckvvr-1546848449.jpg",
  "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/237400/237479.3.jpg",
  "https://tatvabodhini.com/wp-content/uploads/2021/11/Copy-of-Featured-Image-3.jpg",
];
var i = 0;
const currentText1 = document.getElementById("heads");
const currentText2 = document.getElementById("bodys");
const currentImage = document.getElementById("imgs");
const carousel = document.getElementById("slidecon");
const mainMenu = document.getElementById("slide");
const optionPrevious = document.getElementById("preva");
const optionNext = document.getElementById("nexta");

const beforeDiv = document.getElementById("before");
const afterDiv = document.getElementById("after");
const button = document.getElementById("buttf");

currentText1.innerText = text1_options[i];
currentText2.innerText = text2_options[i];
currentImage.src = image_options[i];
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
  i = i + 1;
  i = i % text1_options.length;
  currentText1.dataset.nextText = text1_options[i];

  currentText2.dataset.nextText = text2_options[i];

  mainMenu.style.background = color_options[i];
  currentImage.src = image_options[i];
  currentText1.innerText = text1_options[i];
  currentText2.innerText = text2_options[i];
};
button.onclick = function () {
  beforeDiv.style.display = "none";
  afterDiv.style.display = "block";
};

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length;
  }
  i = i - 1;
  currentText1.dataset.previousText = text1_options[i];

  currentText2.dataset.previousText = text2_options[i];

  mainMenu.style.background = color_options[i];

  currentImage.src = image_options[i];
  currentText1.innerText = text1_options[i];
  currentText2.innerText = text2_options[i];
};
const navBar = document.getElementById("navbar");
var lastScrollTop = 0;
window.onscroll=function(event){
  var st =window.pageYOffset;
  if (st > lastScrollTop) {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "flex";
  }
  lastScrollTop = st;
};

