quoteSentence = document.getElementById("quote");
author = document.getElementById("author");


function fetchquote(){
  fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    // Access the fetched quote data
    quoteSentence.textContent = data.content;
    author.textContent = "Author- " + data.author;
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch request
    console.log('Error:', error);
  });
}
fetchquote();

