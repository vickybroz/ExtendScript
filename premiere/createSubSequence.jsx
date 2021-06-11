// 1st Mapping project



var myProject =[];

function projectMapping(project){
  var projectItem = project.rootItem;

  return {
      root: getFolderFiles(projectItem)
  }

  function getFolderFiles(folderItems){

    var files =[];
  
    for (var i = 0; i < folderItems.children.numItems; i++) {
     
      if(folderItems.children[i].children){

        files[folderItems.children[i].name] =getFolderFiles(folderItems.children[i]);
        
      } else {
        
        files.push(folderItems.children[i]);    
  
      }
  
    }
  
    return files;
  }
  
}

myProject = projectMapping(app.project);

// 2nd
var project = app.project
var cancion = [];

for (var index = 0; index < project.sequences.numSequences; index++) {
  if (project.sequences[index].name.indexOf("_cancion_")!=-1) {
     cancion.push(project.sequences[index]);
  }
    
}
// Si pongo true me copia la secuencia tal cual teniendo en cuenta in y out 
// si pongo false ademas toma en cuenta los tracks habilitados.
cancion[0].createSubsequence(true); 



