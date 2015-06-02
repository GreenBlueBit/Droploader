$(document).ready(function() {
    $(".drop_here").attachDragger();
    $(".drop_here").attachDropLoader({
        preview : true,
		postDrop: function(files) {
            // You can do whatever you want with the files here
            /*
               $.each( files, function (key, value) {
                        var reader = new FileReader();

                        reader.onload = function (e) {
                            image = new Image();
                            image.src = e.target.result;
                            var img = document.createElement('img');
                            img.src = e.target.result;

                            document.getElementsByTagName('body')[0].appendChild(img);

                        }
                        
                        reader.readAsDataURL(value);
                });
                */
               $(".drop_msg").css("display","none");
        }
    });
});