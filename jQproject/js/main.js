console.log('Hello World!');

//let cpArea = document.getElementById("text-basic")
// let btnPaste = document.getElementById("btn-paste")

// btnPaste.addEventListener("click", function(){
//   cpArea.value = "Sample Tetx"
// })

/**
 * Download Link: https://drive.google.com/uc?id=1KKkviXRvRrZ8eH8WI5k_KZG7t7fhRKES&export=download
 * 
 *                https://drive.google.com/uc?id=1Q9fnMFPCWRqUqM_9NqjNXBF0kxLn4zUo&export=download
 * 
 *                https://drive.google.com/u/0/open?id=1Q9fnMFPCWRqUqM_9NqjNXBF0kxLn4zUo
 * 
 */



$(document).ready(function(){

  $("#btn-paste").click(function(){
    $("#text-basic").val("https://drive.google.com/file/d/1FN-DQ7yvHDpcETj5QQUzMn_5c8E85nGW/view?usp=sharing")
  })

  

  $("#btn-copy").click(function(){

    let cpArea = document.getElementById("text-basic")

    let sliceID = cpArea.value.slice(-50, -17)

    let strPt1 = "https://drive.google.com/uc?id=";

    let strPt2 = "&export=download";

    let finalDLlink = strPt1 + sliceID + strPt2;

    $("#test-txt").text(sliceID)

    /*
    if ($("#text-basic").val()==="") {
      alert("No Text Selected!")
    } else {

      let cpArea = document.getElementById("text-basic")

      let sliceID = cpArea.value.slice(-33)

      let strPt1 = "https://drive.google.com/uc?id=";

      let strPt2 = "&export=download";

      let finalDLlink = strPt1 + sliceID + strPt2;

      const textCut = ClipboardJS.copy(finalDLlink);

      cpArea.value = "Copied!"

    } */

  })



  
})