
    // Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
    // Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
    // Obtain a reference the element with a class of dashed and remove it.
    // Obtain a reference the element with a class of article_footer and add the class of goldenrod it.


function changeClasses() {
    const articleHeader = document.querySelector(".article__header")

    articleHeader.textContent = "Welcome to the Barry Griffith blog" 

   var allArticleHeaders = document.querySelectorAll(".article__header")
   for(let i = 0; i < allArticleHeaders.length; i++){
       allArticleHeaders[i].classList.add("important")
   }

   const dashedClass = document.querySelector(".dashed")
   dashedClass.classList.remove("dashed")

   //Another syntax to do the remove exercise
  //document.querySelector(".dashed").classList.remove("dashed") 

   const articleFooter = document.querySelector(".article__footer")
   articleFooter.classList.add("goldenrod")

}


changeClasses()


    



    


