		 
		<script>
var s=0;
document.addEventListener('keydown', function (event) {
	  if (event.keyCode === 13 && (event.target.nodeName == 'INPUT' || event.target.nodeName == 'SELECT') ) {
	    var form = event.target.form;
	    var index = Array.prototype.indexOf.call(form, event.target);
	    if(event.target.id == 'a28'){
 
	    }
	    
	   	    else{
	    	 form.elements[index+1].focus();
	    }
	    event.preventDefault();
	    
	  }
	 
	});
</script>   