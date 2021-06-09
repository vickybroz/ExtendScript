/*
    This script allows you to organize your files in different forlders according to its types.

    You can remove or add types in the "folders" object by adding the extention of the file to the "types" property array.

    You can change the folders name by changing the words in the "names" property string.

*/

// Setup Object

var folders = [
    {
      name: "images",
      types:["jpg", "png", "gif"],
      files:[],
      bin:null
    },
    { 
      name: "audio",
      types:["mp3"],
      files:[],
      bin:null
    },
    {
       name: "video",
       types:["mp4", "mov", "avi"],
       files:[],
       bin:null
    }
  ]
  

// function

  function organizeFoldersByType(folders){
    var project = app.project;
    var projectItem = project.rootItem;
    for (var i = 0 ; i<folders.length; i++){
      folders[i].bin = projectItem.createBin(folders[i].name)
  
      for (var n = 0 ; n<projectItem.children.numItems; n++){
        
        if(folders[i].types.indexOf(projectItem.children[n].name.slice( - 3)) > -1){
          folders[i].files.push(projectItem.children[n]);
        }
  
      }
  
      if(folders[i].files.length) {
        for (var v = 0 ; v<folders[i].files.length; v++){
          folders[i].files[v].moveBin( folders[i].bin);
        }5
      }
    }
    alert("Folders have been organized");
  }


// Run function
  organizeFoldersByType(folders);