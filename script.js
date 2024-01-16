function fun(){
    var div_element=document.getElementById('cart')
    var imag = document.createElement("img");
    imag.src = "https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-kurta/3/m/r/s-gf300greenkurta-guljar-fashion-original-imaghbhv2gtqewy7.jpeg?q=70&crop=false",
    imag.style.height ="200px"
    div_element.appendChild(imag);
    const para = document.createElement("p");
    const node = document.createTextNode("This is new.");
    para.appendChild(node);
    }