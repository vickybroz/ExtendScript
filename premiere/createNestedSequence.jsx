 /*
    Create a new sequence with a nested sequence

*/
 var project = app.project;
 var rootItem = project.rootItem
 var clips = []; 
 var sequenceName = "Nested Sequence"
 
 for (var index = 0; index < rootItem.children.numItems; index++) {
     if (rootItem.children[index].name === "secuenciaANestear") {
         var newSequence = project.createNewSequenceFromClips(sequenceName,rootItem.children[index], null);
         if(newSequence){
             alert(sequenceName+" was created");
         } else {
             alert("Error");
         }
         
     }
 
     
 }
 
 
 
 
 