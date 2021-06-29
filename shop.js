/*This additional exercises, from 7 to 12, use JavaScript as well



EX7.: Write a function to change the h1 text

EX8.: Write a function to change the page background color

EX9.: Write a function to change the footer address with a fake one

EX10.: Write a function to add a CSS class to every Amazon link

EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

EX12: Write a function to color the price of each product in a different one every time it's invoked*/


changeText = function(){
    let htag = document.getElementById('heading')
    htag.innerText = 'Text Changed'
    let heading = document.createElement('h1')
    htag.appendChild(heading)

    
}
ChangeBackgroundColor = function(){
    document.body.style.backgroundColor = 'green';
    

    }
ChangefooterAddress = function(){
    let footerAddress = document.getElementById('address')
    footerAddress.innerText = 'Via Vacuna 13B,Roma.'
    let address = document.createElement('p')
    footerAddress.appendChild(address)

} 
Pricecolor = function(){
    document.price.style.color = 'red';
}  