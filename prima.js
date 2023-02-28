var btn = document.getElementById("btn");

    btn.addEventListener("click", function(){
      // File name and link to the file
      var filename = "cv.pdf";
      var link = "path/to/cv.pdf";
      
      // Create a link element and trigger a click event
      var a = document.createElement("a");
      a.href = link;
      a.download = filename;
      a.click();
    });

   
  