console.log("App.js is loaded");

const cl = new cloudinary.Cloudinary({cloud_name: "peterest", secure: true});

cloudinary.setCloudName('peterest');

// widget
var myWidget = cloudinary.createUploadWidget({
  cloudName: 'peterest', 
  uploadPreset: 'preset1'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
    }
  }
)

document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);

