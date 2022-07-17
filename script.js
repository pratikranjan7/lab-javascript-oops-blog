/* Fill your code*/
function makevisible() {
  document.getElementById("popupContact").style.display = "block";
}

function makeinvisible() {
  document.getElementById("popupContact").style.display = "none";
}

let post = () => {
  document.getElementById("popupContact").style.display = "none";

  let title = document.getElementById("title").value;
  console.log(title);
  let detail = document.getElementById("detail").value;
  console.log(detail);
  let obj = new Blog(title, detail); //cons
  obj.addTitle();
  obj.addDescription();
};

class Blog {
  constructor(title, detail) {
    this.Title = title;
    this.Detail = detail;
    console.log("called" + this.Title);
    this.newdiv = document.createElement("div");
  }
  addTitle() {
    this.newdiv.className = "article-card";
    this.newdiv.setAttribute("id", "blog-card");
    console.log(this.Title);
    this.newdiv.innerHTML = '<img src="./assets/javascript.png" alt=""></img>';
    this.newdiv.innerHTML += "<h1>" + this.Title + "</h1>";
  }
  addDescription() {
    console.log(this.Detail);
    this.newdiv.innerHTML += "<p>" + this.Detail + "</p>";
    document.getElementById("body-div2").appendChild(this.newdiv);
  }
}
