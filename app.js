

/// crete variables for each id
    let newForm = document.querySelector('#form');
    let addURL = document.querySelector('#addURL');
    let upperText = document.querySelector('#upperText');
    let lowerText = document.querySelector('#lowerText');
    let items = document.querySelector('#items');

   items.addEventListener('click', function(e){
     console.log(e.target)
       if(e.target.tagName === 'DIV'){
       e.target.remove();
       }
       if(e.target.tagName === 'H2'){
       e.target.parentElement.remove();
       }
   });
   
   form.addEventListener('submit', function (e){
        e.preventDefault();
        let newURL = addURL.value;
        const newMeme= document.createElement('div');
        const topText = document.createElement('h2');
        const bottomText = document.createElement('h2');
        bottomText.setAttribute("class", "bottom-text");
        newMeme.style.backgroundImage = "url(" +newURL +")";
        //console.log(newMeme.style.backgroundImage);
        topText.innerText = upperText.value;
        bottomText.innerText = lowerText.value;
        newMeme.append(upperText);
        newMeme.append(lowerText);
        items.append(newMeme);
        upperText.value = '';
        lowerText.value = '';
        addURL.value = '';

     });




    


    
