// function seatch(){
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9fb3e3de8amsh1e6649a61edaf24p1c3870jsn9cb5621555b0',
// 		'X-RapidAPI-Host': 'shazam-song-recognizer.p.rapidapi.com'
// 	}
// };

// fetch('https://shazam-song-recognizer.p.rapidapi.com/recognize?link=https%3A%2F%2Fidudtgf.github.io%2Fjs%2Fproject5%2Fmusics%2Fmusic.mp3', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))

// }
// seatch()
function importPortfolioFunction( arg ) {
    var f = document.getElementById( 'importPfForm' );
    var fileName= f.datafile.value;
    console.log(fileName)  
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9fb3e3de8amsh1e6649a61edaf24p1c3870jsn9cb5621555b0',
            'X-RapidAPI-Host': 'shazam-song-recognizer.p.rapidapi.com'
        }
    };
    
    fetch(`https://shazam-song-recognizer.p.rapidapi.com/recognize?link=${fileName}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}