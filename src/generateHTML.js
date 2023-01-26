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
            </div>
    </div>
    <div class="row">
        ${appendHTML(data)}
    </div>
    </body>
    </html>`;
}

// //Adds cards to the base HTML page
function appendHTML(data) {
  const array = [];
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].getRole());
    if (data[i].getRole() === 'Manager') {
      array.push(`
      <div class="card col-3">
      <div class="card-body">
        <h5 class="card-title">Manager</h5>
        <p class="card-text">${data[i].name}</p>
        <p class="card-text">ID: ${data[i].id}</p>
        <p class="card-text"><a href="mailto:${data[i].email}">Email Me</a></p>
        <p class="card-text">Office Number:${data[i].managerNumberInput}</p>
      </div>
    </div>`)
    } else if (data[i].getRole() === 'Engineer') {
      array.push(`
      <div class="card col-3">
      <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <p class="card-text">${data[i].name}</p>
        <p class="card-text">ID: ${data[i].id}</p>
        <p class="card-text"><a href="mailto:${data[i].email}">Email Me</a></p>
        <a href="https://github.com/${data[i].gitHub}" class="btn btn-primary">GitHub Profile</a>
      </div>
    </div>`)
    } else {
      array.push(`
      <div class="card col-3">
      <div class="card-body">
        <h5 class="card-title">Intern</h5>
        <p class="card-text">${data[i].name}</p>
        <p class="card-text">ID: ${data[i].id}</p>
        <p class="card-text"><a href="mailto:${data[i].email}">Email Me</a></p>
        <p class="card-text">School: ${data[i].school}</p>
      </div>
    </div>`)
    }
  }
  return array;
};

module.exports = generateHTML;
