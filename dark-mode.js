var enableDarkMode = false;
// load extension user options
chrome.storage.sync.get(['darkModeEnabled'], function(result) {
  enableDarkMode = result.darkModeEnabled;
  if( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches || enableDarkMode ){
    let root=document.getElementsByTagName('html')[0];
    root.setAttribute('class','res-nightmode');
  }
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',event=>{
  const newColorScheme=event.matches?"dark":"light";
  let root=document.getElementsByTagName('html')[0];
  if ( newColorScheme === 'dark' ) {
    root.setAttribute('class', 'res-nightmode');
  } else {
    root.classList.remove('res-nightmode');
  }
});