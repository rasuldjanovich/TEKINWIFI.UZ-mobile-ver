function show() {
    document.getElementById("displayseconds").style.visibility="visible"
}

let i = 16
let interval = setInterval(()=>{
    count()
},1000)

function count(){
    i = i-1 
    if(i === 10){
        show()
    }if (i === 0) {
        counted.style.display='none'
        window.location = "Congratulations.html"
        return clearTimeout(interval)
    }
    else{
        counted.textContent = i 
    }
}

displayseconds.addEventListener('click',()=>{
    window.location = "Congratulations.html" 
})