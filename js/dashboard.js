let sheet = (function() {
    let styles = document.getElementsByTagName('link'),
         style = document.createElement("style");
    style.appendChild(document.createTextNode(""));
    for (let i = 0; i < styles.length; i += 1){
        if (styles[i].href.split('/').includes('dashboard.css') === true){
            styles[i].parentNode.insertBefore(style, styles[i].nextSibling);
        }
    }
    return style.sheet;
})();
function dividedStatsType (){
    let dividedStats = document.querySelectorAll('.koala-stats .divided-stats');
    for (let i = 0; i < dividedStats.length; i += 1){
        let height = dividedStats[i].offsetHeight,
            leftPosition = dividedStats[i].offsetLeft,
            topPosition = dividedStats[i].offsetTop;
        sheet.insertRule(".koala-stats .divided-stats::before{height:"+height+"px"+"}",0);
        //sheet.insertRule(".koala-stats .divided-stats::before{left:"+leftPosition+"px"+"}",0);
       // sheet.insertRule(".koala-stats .divided-stats::before{top:"+topPosition+"px"+"}",0);
    }
}
function strippedLists(){
    let listItems = document.querySelectorAll(".lists-stripped-items .list-item");
    for ( let i = 0; i < listItems.length; i += 2 ){
        listItems[i].classList.add('stripped');
    }
}
window.onload = function (){
    dividedStatsType();
    strippedLists();
}

