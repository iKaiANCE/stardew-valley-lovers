const selectionListLovers = document.querySelectorAll(".lover");

selectionListLovers.forEach(lover =>{
    lover.addEventListener("click", () => {

        hideLoverCard();

        const idSelectLover = showLoverCardSelected(lover);

        deactivateLoverInList();

        activateLoverInList(idSelectLover);
        })
    })


function activateLoverInList(idSelectLover) {
    const loverSelectedInList = document.getElementById(idSelectLover);
    loverSelectedInList.classList.add("active");
}

function deactivateLoverInList() {
    const loverActiveInList = document.querySelector(".active");
    loverActiveInList.classList.remove("active");
}

function showLoverCardSelected(lover) {
    const idSelectLover = lover.attributes.id.value;
    const idOfLoverCardToOpen = idSelectLover + "-card";
    const loverCardToOpen = document.getElementById(idOfLoverCardToOpen);
    loverCardToOpen.classList.add("open");
    return idSelectLover;
}

function hideLoverCard() {
    const openLoverCard = document.querySelector(".open");
    openLoverCard.classList.remove("open");
}
    