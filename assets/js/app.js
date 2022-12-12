cl=console.log;
var request=document.getElementById("imgcontainer")
var imgarray=[
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
             "https://source.unsplash.com/random/",
          ]
		var result=" ";	 
imgarray.forEach(function(img,i){
	result+=`
	<div class="col-sm-4 mb-3">
	   <div class="card">
	      <div class="card-header text-center bg-success">Image ${i+1}</div>
		    <div class="card-ibody">
			  <img src="${img+i}" class="img-fluid">
			</div>
		</div>
	</div>
	`
})		 
		 
	request.innerHTML=result;	 
		 
		 
		 
		 
		 
		 