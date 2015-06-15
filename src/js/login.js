var button=document.getElementById("input-form");
button.addEventListener("submit",function(){
    self.postMessage(document.getElementById("code").value);
    return false;
});
