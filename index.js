let myLeads = []
const inputEl = document.getElementById("input-el")
// log out "button clicked!" when the user clicks the "save input" button
const inputBtn = document.getElementById("input-btn")
// grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")
// store the deletebutton in a deleteBtn variable
const deleteBtn = document.getElementById("del-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// grab the save tab button and store it in a tabBtn variable
const tabBtn = document.getElementById("tab-btn")
// check if leads from localStorage is true
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
tabBtn.addEventListener("click", function() {
    // grab url of current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        // let activeTab = tabs[0]
        // let activeTabId = activeTab.id
        myLeads.push(tab[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    // save url to local storage
    myLeads.push(tab[0].url)
    // save myleads to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // trigger render
    render(myLeads)
})
// wrap all the codes in a renderLeads() function
function render(leads) {
        // a variable to hold all the html for the list items
    let listItems = ""
    // render the leads in the unordered list using ulEl.textContent
    // add the items to the listitems variable instead of the ulEl.innerHTML
    // ulEl.innerHTML +="<li>" + myLeads[i] + "</li>"  
    for(let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    // render the listItems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems
    }

// listen for double clicks on the delete button
deleteBtn.addEventListener("dblclick", function() {
    // when clicked, clear the localStorage, myLeads and the DOM (render())
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
// if SourceBuffer, set myLeads to its value and call render()
inputBtn.addEventListener("click", function() { 
// push the value from the inputEl into myLeads array 
// we have to get value from the input field 
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // call the render() function
    render(myLeads)
}) 



























