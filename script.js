// Wrap the setTimeout into an if statement
if (!CookieService.getCookie('exitIntentShown')) {
    setTimeout(() => {
        document.addEventListener('mouseout', mouseEvent);
        document.addEventListener('keydown', exit);
    }, 10_000);
}

const mouseEvent = e => {
    const shouldShowExitIntent = 
        !e.toElement && 
        !e.relatedTarget &&
        e.clientY < 10;

    if (shouldShowExitIntent) {
        document.removeEventListener('mouseout', mouseEvent);
        document.querySelector('.exit-intent-popup').classList.add('visible');
        
        // Set the cookie when the popup is shown to the user
        CookieService.setCookie('exitIntentShown', true, 30);
    }
};
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
var connection = mysql.createConnection({
	host     : 'lin-5547-4194-mysql-primary.servers.linodedb.net',
	user     : 'linroot',
	password : 'pRU#olTED12Y2Au7',
	database : 'PynxTech'
});
