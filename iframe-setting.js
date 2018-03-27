/*
 iframe settings
*/
function resizeIFrameToFitContent(iframeObj) {

    //get current frame width and height
    var actualwidth  = iframeObj.offsetWidth;
    var actualheight = iframeObj.offsetHeight;
    
    // Get the parent container's width
    var maxwidth = iframeObj.parentElement.clientWidth;
    
    if (actualwidth > maxwidth)
    {
      //sanity check - change only if width above a minimum number
      if (maxwidth > 220)
      {
        //iframeObj.width = maxwidth;
        iframeObj.width = "100%";

        //get width after setting to 100%
        var newwidth  = iframeObj.offsetWidth;
          
        var proportion = newwidth / actualwidth;
        newheight= actualheight * proportion;
        
        var newheight2 = Math.ceil(newheight);
                
        iframeObj.height = newheight2;      
      }    
    } 
}

var iFrame = document.getElementById( 'iframe_game' );
if (iFrame) {
  resizeIFrameToFitContent( iFrame );
}
    