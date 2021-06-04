const headEntry = document.querySelector(".header-container");
const Header = (title, date, temp) => {
  const head = document.createElement("div");
  const dateSpan = document.createElement("span");
  const headTitle = document.createElement("h1");
  const headTemp = document.createElement("span");

  dateSpan.textContent = `Date: ${date}`;
  headTitle.textContent = `Title: ${title}`;
  headTemp.textContent = `Temp: ${temp}`;

  head.classList.add("header");
  dateSpan.classList.add("date");
  headTemp.classList.add("temp");
  
  head.appendChild(dateSpan);
  head.appendChild(headTitle);
  head.appendChild(headTemp);

 return head;

}


  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

function headerAppender(){
  headEntry.appendChild(Header({title:'Happy Days', date:'11/07/1993', temp:'97degrees'}))

}


  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //


export { Header, headerAppender }
