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
