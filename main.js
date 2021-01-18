var canvas = new fabric.Canvas("myCanvas")
var block_width = 30;
var block_height = 30;
player_x = 100;
player_y = 100;
var player_object = "";
block_object = "";

function update_player() {
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function update_block(block) {
    fabric.Image.fromURL(block,function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object)
    });
}