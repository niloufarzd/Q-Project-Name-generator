// access to the form values
document.querySelector('#generate-names').addEventListener('submit', loadNames)

// read the values and generate URL
function loadNames(e){
    e.preventDefault()

    // read the values from the form
    const country = document.querySelector('#country').value,
          genre = document.querySelector('#genre').value

    // generate the URL
    let url = 'https://api.namefake.com/'
    // check the country value
    if (country !== '') {
        url +=  (country + '/' )
    } else {
        url += 'random/'
    }
    // check the gender
    if (genre !== '') {
        url +=  (genre + '/' )
    } else {
        url += 'random/'
    } 
    console.log(url);

    // Ajax
    const xhr = new XMLHttpRequest()

    xhr.open('GET', url, true)

    xhr.onload = function(){
        if (this.status === 200) {
            console.log(this.responseText);
        }
    }

    xhr.send()
}