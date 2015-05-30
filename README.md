# Droploader
Makes any html element into a dropzone. Gives access to the files locally, no need to save on server first.

Needed a way to quickly load files in a server and start doing stuff with it but without having to first save the files anywhere,
since my server is very limited. I know there is a jquery plugin called DropZone, but I could not figure out if it was possible
to do this.

This plugin let's you easily make any area to listen to hovering over with files and dropping them, you can then also choose if
you wish to preview the sent files (only works with images though).

In this repo, there's also my draggable plugin to make the element with images easily scroll on drag.
It runs like this :

    $(".drop_here").attachDropLoader();

This code handles the files after dropping them in the drop area :

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
    
These are the following options :

    preview - True if you wish to display the images in the element afterwars as thumbnails.
    postHover - A function which runs when the mouse is over the element with files.
    beforeDrop - Before everything that the plugin handles when you drop the files.
    postDrop - After you do the preview of the file and everything else on dropping the files.


The following images show the example that I made for this repo.

![alt tag](http://imageshack.com/a/img673/9150/vqE5qu.png)
![alt tag](http://imageshack.com/a/img908/9882/volYb5.png)
