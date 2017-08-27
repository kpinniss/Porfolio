
class Main{
    constructor(){
        this.category = [
            {name:"Design", id:"delm"},
            {name:"Programming", id:"pelm"},
            {name:"Game Development", id:"gelm"},
        ];
        this.skills = [
            {name:"C#", img:"https://cdn.codementor.io/assets/tutors/c-sharp-tutors-online.png"},
            {name:".NET", img:"http://www.hsdata.com/Media/Default/HS%20Data/net_framework_service_pack_1_hosting.png"},
            {name:"Xamarin", img:"https://cdn.arstechnica.net/wp-content/uploads/2014/05/ide-xamarin-studio.png"},
            {name:"JavaScript", img:"https://www.javatpoint.com/images/javascript/javascript_logo.png"},
            {name:"Angular JS", img:"https://avatars0.githubusercontent.com/u/139426?v=4&s=200"},
            {name:"HTML5", img:"https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"},
            {name:"CSS", img:"http://divinitycomputing.com/wp-content/uploads/2015/12/css.png"},
            {name:"BootStrap", img:"https://www.eleven2.com/img-2015/bootstraplogo.png"},
            {name:"Unity 3D", img:"http://xsion.net/wp-content/uploads/2015/12/unity-200x200.png"},
            // {name:"Game Maker", img:"https://maxcdn.icons8.com/Share/icon/androidL/Logos//game_maker1600.png"},
            // {name:"Unreal Engine", img:"http://fc08.deviantart.net/fs71/f/2014/133/5/9/utlogo_by_crotale-d7iaqud.png"},
        ];
    }
//"https://www.loggly.com/wp-content/uploads/2017/03/setup-net.png"
    w3_open() {
        document.getElementById("main").style.marginLeft = "25%";
        document.getElementById("mySidebar").style.width = "25%";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("openNav").style.display = 'none';
      }

      w3_close() {
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("openNav").style.display = "inline-block";
      }

      dropArt() {
        var x = document.getElementById("art");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else { 
            x.className = x.className.replace(" w3-show", "");
        }
    }

    dropGame() {
        var x = document.getElementById("game");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else { 
            x.className = x.className.replace(" w3-show", "");
        }
    }

    dropDev() {
        var x = document.getElementById("dev");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else { 
            x.className = x.className.replace(" w3-show", "");
        }
    }
    
    start(name) {
        var width = 1;
        var id = setInterval(frame, 10);
        var value = 0;
        if(name === "pelm"){
            var elem = document.getElementById("pelm"); 
            value = 89
        }
        if(name === "delm"){
            var elem = document.getElementById("delm"); 
            value = 70;
        }
        if(name === "gelm"){
            var elem = document.getElementById("gelm"); 
            value = 65;
        }
        
        function frame() {
            if (width >= value) {
                clearInterval(id);
            } else {
                width++; 
                elem.style.width = width + '%'; 
            }
        }
    }


}
var app = angular.module("MaterialApp",['ngMaterial']);
app.controller("Main", function(){
    return new Main();
});







