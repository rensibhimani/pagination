let link = document.getElementsByClassName("link");

let currenyValue = 1;

function activeLink(){
    for(l of link){
        l.classList.remove("active");
    }
    event.target.classList.add("active");
    currenyValue = event.target.value;
}

function backBtn(){
    if(currenyValue > 1){
        for(l of link){
            l.classList.remove("active");
        }
        currenyValue -- ;
        link[currenyValue -1].classList.add("active");
    }
}

function nextBtn(){
    if(currenyValue < 6){
        for(l of link){
            l.classList.remove("active");
        }
        currenyValue ++ ;
        link[currenyValue -1].classList.add("active");
    }
}