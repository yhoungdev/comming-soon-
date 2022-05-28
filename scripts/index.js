

//function to get the form 
let form = document.getElementsByTagName('form')[0];

    //function to prevent default actions 
    form.addEventListener('submit' , e => {
        e.preventDefault()
    })

  