const searchParams = new URLSearchParams(window.location.search);
let familyPage = searchParams.get('page');
console.log("Page: " + familyPage);
if (familyPage) {
  openPage(familyPage);
}
else {
  console.log("page 1");
  openPage(1);
}

function openPage (page){
  //document.getElementById("page").style.display = "none";
    let html = "";
    const pageIdx = "page_" + page;
    for (let x in familyTable) {
        if (x===pageIdx) {
          //  html = "<img src='" + articleTable[x][0].file + "' alt='" + articleTable[x][0].alt 
          //  + "' width='" + articleTable[x][0].width + "' height='" + articleTable[x][0].height   
          //  + "' style='" + articleTable[x][0].style + "' />";
           console.log(familyTable[x][0]);
           html = html + "<h2 style='text-align:center'>" + familyTable[x][0].title + "</h2>";
           for (y=1;y<familyTable[x].length;y++) {
              //console.log(articleTable[x][y]);
              if (familyTable[x][y].tag == "block") {
                if (familyTable[x][y].pos == "begin") {
                  html = html + "<div style='padding:10px; background-color:" + familyTable[x][y].color + "'>";
                }
                else {
                  html = html + "</div>";
                }
              }
              else if (familyTable[x][y].tag == "h2") {
                html = html + "<h2>" + familyTable[x][y].step + "</h2>";
            }
              else if (familyTable[x][y].tag == "h3") {
                  html = html + "<h3>" + familyTable[x][y].step + "</h3>";
            }
              else if (familyTable[x][y].tag == "p") {
                  html = html + "<p style='color:rgb(252, 222, 157); text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);'>" + familyTable[x][y].step + "</p>";
              }
              else if (familyTable[x][y].tag == "ul open") {
                html = html + "<ul>";
              }
              else if (familyTable[x][y].tag == "ul close") {
                html = html + "</ul>";
              }
              else if (familyTable[x][y].tag == "li") {
                html = html + "<li class='li-add-disc' style='" + familyTable[x][y].style + "'>" + familyTable[x][y].step + "</li>";
             }
              else if (familyTable[x][y].tag == "img") {
                html = html + "<img src='" + familyTable[x][y].file + "' alt='" + familyTable[x][y].alt 
                + "' width='" + familyTable[x][y].width + "' height='" + familyTable[x][y].height   
                + "' style='" + familyTable[x][y].style + "' />";

              }
           }
           console.log(html);
           document.getElementById("page-box").innerHTML = html;
        }
    }
    return true;
}

function closeArticle (){
    document.getElementById("denomination").style.display = "block";
    document.getElementById("articles").style.display = "block";
    document.getElementById("article").style.display = "none";
    return;
}