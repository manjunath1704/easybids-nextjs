function noThumb(e){return'<img src="./assets/images/easybids/easybids_pro.jpg">'.replace("ID",e)+'<div class="play"></div>'}function noIframe(){var e=document.createElement("iframe");e.setAttribute("src","https://player.vimeo.com/video/419485152?dnt=1&amp;app_id=122963&autoplay=1".replace("ID",this.dataset.id)),e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen","1"),e.setAttribute("allow","autoplay; encrypted-media"),this.parentNode.replaceChild(e,this)}document.addEventListener("DOMContentLoaded",function(){for(var e,t=document.getElementsByClassName("eb-vimeo__player"),a=0;a<t.length;a++)(e=document.createElement("div")).setAttribute("data-id",t[a].dataset.id),e.innerHTML=noThumb(t[a].dataset.id),e.onclick=noIframe,t[a].appendChild(e)}),$(document).ready(function(){$(window).scroll(function(){650<$(this).scrollTop()?$("#eb-backToTop").fadeIn():$("#eb-backToTop").fadeOut()}),$("#eb-backToTop").click(function(){$("html ,body").animate({scrollTop:0},800)})}),$(".eb-banner-sp").paroller({factor:.1,factorXs:.1,factorSm:.1,type:"background",direction:"vertical"});