window.onload= function(){

    var image = [];
    for(i = 0; i<4;i++)
    {
        var img =  {
            src: "./image/"+(i+1)+".jpg",
            name: "picture" + (i+1)
        };

        image.push(img);
    }

    console.log(image[0]);

    setInterval(Slideshow, 3000);

    var count = 0;
    function Slideshow(){
        console.log(count);
        var show = document.getElementsByTagName("img");
        var name = document.getElementsByTagName("h1");

        show[0].src = image[count].src;
        name[0].innerText = image[count].name;

        if(count == 3)
        {
            count = 0;
        }else{
            count = count+1;
        }
    }
}
