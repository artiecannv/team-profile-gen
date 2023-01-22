//Create the different team cards, based on the user inputs given
const renderTeam = (team) => {
    const renderManager = (manager) => `
    
    
    `
}






function generateHTML(data) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Meet the team!</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
    </div>
        ${appendHTML(data)}
    </body>
    </html>`;
}

//Adds cards to the base HTML page
function appendHTML(data) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
  }
}

module.exports = generateHTML;
