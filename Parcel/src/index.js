import './styles/index.scss'

// window.scrollBy(0, 50);


let $h1 = document.getElementById("h1")
let $head = document.getElementById("head")
let $p = document.getElementById("p")
let $p2 = document.getElementById("p2")
let $p3 = document.getElementById("p3")

$p.style.opacity = "1";

let $button = document.getElementById("button")
$button.addEventListener("click", clickButton);

setTimeout(()=>{
    $h1.innerHTML = "Как Вам Parcel?"
    $head.innerHTML = "Parcel testing..."    

    // $p.style.display = "none";
    // $p.style.display = "block";

    document.addEventListener("scroll", scrolling);
    window.scrollTo(0, 0);
    
}, 1500)

function scrolling() {
    
	if ($p.style.opacity == "1") {
        $p.style.opacity = "0";
        setTimeout(()=>{
            $p2.style.opacity = "1";
        }, 300)
    }else if($p2.style.opacity == "1") {
        $p2.style.opacity = "0";
        setTimeout(()=>{
            $p3.style.opacity = "1";
        }, 300)
    }else {
        $p3.style.opacity = "0";
        setTimeout(()=>{
            $p.style.opacity = "1";
        }, 300)
    }

    console.log("scroll");
	document.removeEventListener("scroll", scrolling);
   
    setTimeout(()=>{
        window.scrollTo(0, 0);
    }, 200)

    setTimeout(()=>{
        document.addEventListener("scroll", scrolling);
    }, 300)

}

function clickButton() {
    let $footer = document.getElementById("footer")
    document.removeEventListener("scroll", scrolling);

    setTimeout(()=>{
        $footer.scrollIntoView(true)
    }, 200)
    
    console.log("click");
    setTimeout(()=>{
        document.addEventListener("scroll", scrolling);
    }, 300)
}