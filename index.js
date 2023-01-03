let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("del-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
// get current tab opened
tabBtn.addEventListener("click", function() {
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })   
})

function render(leads) {
    let listItems = "" 
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
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // call the render() function
    render(myLeads)
}) 



























