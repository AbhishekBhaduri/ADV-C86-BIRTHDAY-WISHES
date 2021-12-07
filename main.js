var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.image.fromURL('BirthdayImage.jpg',function(img){
        block_image_object=img;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeigth(510)
        
    });
	canvas.add(block_image_object);
  };

function playSound(){
	x.play();
}
