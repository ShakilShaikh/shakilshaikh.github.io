
function run(){
	var width = 0;
	openTab(event, 'home')
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
	window.location = st;
}

function openTab(evt, tabName) {
	var ggwp = document.getElementById('greeter');
	console.log(tabName)
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  
  if(tabName=='home'){
	  ggwp.innerHTML = "<h2>Welcome</h2>";
  }else if(tabName=='about'){
	  ggwp.innerHTML = "<h2>About Me</h2>";
  }
  else if(tabName=='projects'){
	  ggwp.innerHTML = "<h2>My Projects</h2>";
  }
}
