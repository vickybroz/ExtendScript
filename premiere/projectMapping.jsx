/*
    This script creates a function "projectMapping()" that creates an object with the project folders as sub properties. We recommend creating a variable "myProject" to store the mapping so you can call that variable and its property to access the sub folder files without having to loop through each folder.

    Example:
            -Your project: 

            root
            |_ file1.mp3
            |_ file2.mp4
            |_ subfolder
                |_ file3.avi

            -Run

            alert(myProject.root.subfolder[0].name);

            - Result: Will create a dialog box titled "file3.avi"

*/


var myProject =[];

function projectMapping(project){
  var project = app.project;
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

