(function ($) {

	$.fn.attachDropLoader = function( options ) {

		var settings = $.extend({
            preview : true,
            postHover : null,
            beforeDrop : null,
			postDrop: null
		}, options);

		var dropZone = document.getElementsByClassName($(this).attr("class"))[0];
        dropZone.addEventListener('dragover', function(e) {
            e.stopPropagation();
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
            if(settings.postHover != null)
                settings.postHover();
        });
        dropZone.addEventListener('drop', function(e) {
            e.stopPropagation();
            e.preventDefault();
            dropZone.innerHTML = "";
            if(settings.beforeDrop != null)
                settings.beforeDrop();
            
            var files = e.dataTransfer.files;

            if(settings.preview) {
                $.each( files, function (key, value) {
                        var reader = new FileReader();

                        reader.onload = function (e) {
                            image = new Image();
                            image.src = e.target.result;
                            var img = document.createElement('img');
                            img.src = e.target.result;

                            dropZone.appendChild(img);

                        }
                        
                        reader.readAsDataURL(value);
                });

            }
            
            if(settings.postDrop != null)
                settings.postDrop(files);
            
        });
		
        
		
		return this;
	};

}( jQuery));