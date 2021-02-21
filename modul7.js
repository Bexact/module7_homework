// 1
const kazakh={
    ru: "Argyn",
    juz:"Middle"
  }
  
  const Bek=Object.create(kazakh);
  Bek.ownRu="Naiman";
  Bek.ownJuz="Middle";
  
  function own(kazakh){
     for(var key in kazakh){
       if(kazakh.hasOwnProperty(key)){
         console.log(key,kazakh[key]);
       }
     }
  }
  console.log(Bek.ownRu)
  own(kazakh);
//   2.
  function f(object, String){
    if(object.hasOwnProperty(String)){
      return true;
    } else{
      return false;
    }
  }
  
  var kazakh={
    car:'camry 3.5',
    location:'Esentai'
  };
  console.log(f(kazakh,'car'));
//   3.
  function createNull(){
    var object={};
    console.log(Object.getPrototypeOf(object));
  }
  createNull();
//   4.
  function electric(name,type,lifetime){
    this.name=name;
    this.type=type;
    this.lifetime=lifetime;
  }
  
  electric.prototype.power=function(power){
    if(power=== true)
      console.log("Power on");
    else 
      console.log("Power off");
  }
  
  function mobile(cpu,camera,os){
    this.cpu=cpu;
    this.camera=camera;
    this.os=os;
    
  this.getfaceId=function(faceId){
     if(faceId)
      console.log("With faceId");
    else 
      console.log("Without faceId");
  }
  }
  
  function printer(company){
    this.company=company;
  
  this.lazer=function(lazer){
    if(lazer===true)
      console.log("With lazer");
    else 
      console.log("Without lazer");
  }
  }
  
  mobile.prototype= new electric("X","smartphone",24);
  printer.prototype=new electric("S6","printer-scaner",4);
  
  var xiaomi=new mobile("snapdragon","sony","android");
  var lite=new printer("samsung");
  xiaomi.power(true);
  lite.power(false);
  lite.lazer(true);
  
  console.log(xiaomi+" "+xiaomi.power(true)+" "+xiaomi.getfaceId(true));
  console.log(lite);
//   5.
  class Electric {
    Electric(name, type, lifetime) {
      this.name = name;
      this.type = type;
      this.lifetime = lifetime;
    }
    setPower(power) {
      this.power = power;
    }
    getPower() {
      if (power)
        console.log("Power on");
      else
        console.log("Power off");
    }
  }
  class Mobile extends Electric {
    Mobile(cpu, camera, os) {
      this.cpu = cpu;
      this.camera = camera;
      this.os = os;
    }
    setFaceId(faceId) {
      this.faceId = faceId;
    }
    getFaceId() {
      if (faceId)
        console.log("With faceId");
      else
        console.log("Without faceId");
    }
  }
  class Printer extends Electric {
    printer(company) {
      this.company = company;
    }
    setLazer(lazer) {
      this.lazer = lazer;
  
    }
    getLazer() {
      if (lazer === true)
        console.log("With lazer");
      else
        console.log("Without lazer");
    }
  }
  var xiaomi = new mobile("snapdragon", "sony", "android");
  var lite = new printer("samsung");
  xiaomi.power(true);
  lite.power(false);
  lite.lazer(true);
  
  console.log(xiaomi + " " + xiaomi.power(true) + " " + xiaomi.getfaceId(true));
  console.log(lite);