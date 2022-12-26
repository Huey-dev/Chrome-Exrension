let myLeads = []
const inputEl = document.getElementById("input-el")
// log out "button clicked!" when the user clicks the "save input" button
const inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function() { 
// push the value from the inputEl into myLeads array 
// we have to get value from the input field 
    myLeads.push(inputEl.value)
    // call the renderLeads() function
    renderLeads()
}) 
// grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")
// wrap all the codes in a renderLeads() function
function renderLeads() {
        // a variable to hold all the html for the list items
    let listItems = ""
    // render the leads in the unordered list using ulEl.textContent
    // add the items to the listitems variable instead of the ulEl.innerHTML
    // ulEl.innerHTML +="<li>" + myLeads[i] + "</li>"  
    for(let i = 0; i = myLeads.length; i++) {
        listItems +="<li>" + myLeads[i] + "</li>"  
    }
    // render the listItems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems
}



























