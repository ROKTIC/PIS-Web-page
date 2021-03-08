// Initiate a Canvas instance 
// 캔버스 고정하기
//var canvas = new fabric.StaticCanvas("canvas"); 
		var canvas = new fabric.Canvas("canvas"); 
		console.log(canvas);
		canvas.on('mouse:down', function(options) {
		  console.log(options.e.clientX - 20, options.e.clientY - 20);
			console.log('Event mouse:down Triggered');
		});
		
		
		/*canvas.setBackgroundImage('sample_4.jpg', canvas.renderAll.bind(canvas), {
			width: 400,
			height: 500,
			originX: 'left',
			originY: 'top'
		});
		*/

		fabric.Image.fromURL('../images/right_area.png', function(img) {
		//	img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
		   //img.scale(1).set('flipX', true);
		   //img.scaleToWidth(350);
		   img.scaleToHeight(900);
		   canvas.setBackgroundImage(img);
		   canvas.requestRenderAll();
		});

		/*fabric.Image.fromURL('sample_4.jpg', function (oImg) {
			//oImg.set('left', PosX).set('top',PosY);
			canvas.add(oImg);
			canvas.renderAll();
		  }, {"left": 0, "top": 0, "scaleX": 0.5, "scaleY": 0.5, "scaleToWidth": 600, "scaleToHeight":800});
*/

		/*fabric.Image.fromURL('sample_4.jpg', function(img, isError) {
		   img.set({width: 300, height: 400, originX: 'left', originY: 'top'});
		   canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
		});*/

		//canvas.setBackgroundImage('lotte_sample.jpg', canvas.renderAll.bind(canvas));
		//canvas.setBackgroundImage('sample_3.jpg', canvas.renderAll.bind(canvas));
		
		text = new fabric.Text('현재위치', { 
			left: 200, top: 400, fontSize:10,
			stroke: 'red',
			strokeWith: 0 /*,
			textBackgroundColor: 'rgb(0, 200, 0)'*/
		});
		//canvas.add(text);

		rect = new fabric.Circle({
			left: 100,
			top: 500,
			radius: 5,     
			fill: 'blue'
		});  
		rect.on('selected', function() {
		  console.log('selected a circle');
		});

		//canvas.add(rect);

		

        // Get the image element 
        //var image = document.getElementById('car-image'); 
  
        // Initiate a Fabric instance 
        //var fabricImage = new fabric.Image(image); 
		//var src;  //Image source here
		fabric.Image.fromURL('../images/mark.png', function(img) { 
			var oImg = img.set({left: 798, top:798, angle: 00}).scale(0.2);
			canvas.add(oImg);
		});

		//fabric.Image.fromURL('mark.png', function(img) { 
		//	var oImg = img.set({left: 180, top:240, angle: 00}).scale(0.1);
		//	canvas.add(oImg);
		//});
  
       

		var elem = document.documentElement;
		function openFullscreen() {
		  if (elem.requestFullscreen) {
			elem.requestFullscreen();
		  } else if (elem.mozRequestFullScreen) { /* Firefox */
			elem.mozRequestFullScreen();
		  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
			elem.webkitRequestFullscreen();
		  } else if (elem.msRequestFullscreen) { /* IE/Edge */
			elem.msRequestFullscreen();
		  }
		}

		function closeFullscreen() {
		  if (document.exitFullscreen) {
			document.exitFullscreen();
		  } else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		  } else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		  } else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		  }
		}

		$(document).ready(function() {
			$("#btn-move").on("click", function(e) {
				console.log('move!!');
    
				//방법1
				//canvas.clear();
				//canvas.setBackgroundImage('sample_2.jpg', canvas.renderAll.bind(canvas));
				
				//방법2
				canvas.remove(rect);

				var left = parseInt($('#left').val(), 10);
				var top = parseInt($('#top').val(), 10);

				console.log('left >>'+ left);
				console.log('top >>'+ top);

				rect = new fabric.Circle({
					'left': left,
					'top': top,
					'radius': 5,     
					'fill': 'blue'
				});  

				console.log(rect);

				canvas.add(rect);
			});
		});

