// http://stackoverflow.com/questions/8751020/how-to-get-a-pixels-x-y-coordinate-color-from-an-image

$(function() {

    /*$('img').mousemove(function(e) {

        if(!this.canvas) {
            this.canvas = $('<canvas />')[0];
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.canvas.getContext('2d').drawImage(this, 0, 0, this.width, this.height);
        }

        var pixelData = this.canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;

        $('#output').html('R: ' + pixelData[0] + '<br>G: ' + pixelData[1] + '<br>B: ' + pixelData[2] + '<br>A: ' + pixelData[3]);

    });*/



    var img = document.getElementById('mountains');
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

    var css_x = 0;
    var css_y = 0;
    for( y=1; y<=img.height; y+=2 ){
        css_x = 0;

        for( x=1; x<=img.width; x+=2 ){
            var pixelData = canvas.getContext('2d').getImageData(x, y, 1, 1).data;
            console.log(pixelData);
            document.write( css_x+'em '+css_y+'em rgba('+pixelData[0]+', '+pixelData[1]+', '+pixelData[2]+', '+pixelData[3]+'),<br>' );

            css_x++;
        }

        css_y++;
    }

});
