
function run(){
	var width = 0;
    var id = setInterval(frame, 1200);
	var x = document.getElementById("bgm");
	function frame()
	{
		if(width==10)
		{
			x.volume = 0.5;
			x.loop = true;
			x.load();
			clearInterval(id);
			x.play();
		}
		else
		{
			width+=1;
			console.log(width);
		}
	}
}

function jump(st){
	//pass
	var a = 1;
}