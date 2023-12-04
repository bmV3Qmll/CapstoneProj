document.addEventListener("DOMContentLoaded",function(){
    var Addbutton = document.getElementById("Addbutton1");
    var Addbutton2 = document.getElementById("Addbutton2");
    if (Addbutton){
        Addbutton.addEventListener("click",function(){
            alert("Đã chọn mặc định");
        });
    }
    if (Addbutton2){
        Addbutton2.addEventListener("click",function(){
            alert("In thành công !");
        });
    }
    
});
// document.addEventListener("upload-files-item",function(){
//     var Addbutton2 = document.getElementById("Addbutton2");
//     if (Addbutton2){
//         Addbutton2.addEventListener("click",function(){
//             alert("In thành công !");
//         });
//     }
// });