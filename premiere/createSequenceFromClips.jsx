/*
    Create a new sequence from the files (clips) in the root

*/
var project = app.project;
var rootItem = project.rootItem
var clips = []; 
var sequenceName = "Main Sequence"

for (var index = 0; index < rootItem.children.numItems; index++) {
    clips.push(rootItem.children[index]);    
}

// Passing "rootItem.children" instead of "clips" doesn't work
var newSequence = project.createNewSequenceFromClips(sequenceName,clips, null);


if(newSequence){
    alert(sequenceName+" was created");
} else {
    alert("Error");
}

