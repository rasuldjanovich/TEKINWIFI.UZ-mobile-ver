let inputs = document.querySelectorAll(".password"); 
 
let value = []; 
 
const handleBtn = (num) => { 
    if (value.length >= 4) { 
        return; 
    } else { 
        value.push(num); 
    } 
    inputs[0].textContent = value[0] ; 
    inputs[1].textContent = value[1] ; 
    inputs[2].textContent = value[2] ; 
    inputs[3].textContent = value[3] ; 

    console.log(value);
}; 
const deleteBtn = () => { 
    if (value.length == 4) {
        handleBtn(); 
    } 

    if (value.length == 3) {
        handleBtn(); 
    } 

    if (value.length == 2) {
        handleBtn(); 
    } 

    if (value.length == 1) {
        handleBtn(); 
    } 
    return; 
};