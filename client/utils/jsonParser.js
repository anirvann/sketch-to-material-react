const jsonFileName = process.argv[2];
const molecule = require('../templates/molecule');
const path = require('path');
const sr = require('screenres');
const writeFileToDisk = require('./fileUtilities');
const data = require(`../json/${jsonFileName}`);

const document = data.document;
const canvas = document.children[0];
const frames = canvas.children[0];
const organisms = frames.children.sort(function(a,b){
  const yA = a.absoluteBoundingBox.y;
  const yB = b.absoluteBoundingBox.y;
  return yA - yB;
});

const getMaterialCompFromType = type => ({
  startTag: '<>',
  endTag: '</>'
});
const calcTop = (frame) => {
  let top = 0, i = 0;
  while(i < organisms.length && organisms[i].id !== frame.id){
    top += organisms[i].absoluteBoundingBox.height;
    i++;
  }
  return top;
}
let frame = {};
const organismCreator = (organism, root) => {
  let organismStyle = {
    coversParent: false,
    backgroundColor: { r: null, g: null, b: null, a: null } 
  };
  if(root){
    width = organism.absoluteBoundingBox.width;
    height = organism.absoluteBoundingBox.height;
    frame = organism;
  } 
  if(organism.children){
    let htmlData = '';
    const totalLeaves = [];
    organism.children.forEach(el => {
      if(el.type === 'RECTANGLE') {
        if(width === el.absoluteBoundingBox.width &&
        height === el.absoluteBoundingBox.height){
          organismStyle.coversParent = true;
          organismStyle.backgroundColor = el.fills[0].color;
        }else{
          organismStyle.coversParent = false;
        }
      }
      
      htmlData += getMaterialCompFromType(el.type).startTag
      const { value = '', leafName, isWrittenToFile, isThirdParty, atomName } = organismCreator(el);
      isWrittenToFile && atomName? totalLeaves.push({
        leafName: leafName.substring(1, leafName.length),
        atomName,
        isThirdParty,
      }) : null;
      htmlData += value + getMaterialCompFromType(el.type).endTag
    })
    const [ componentName = null, ...atomName ] = organism.name.split('_');
    if(organism.name.charAt(0) === '#'){
      const cName = componentName.substring(1, componentName.length);
      let str1 = '';
      if(root){
        atomName.forEach(atom => { 
          totalLeaves.unshift({
            leafName: atom,
            atomName: atom,
            isThirdParty: true
          })})
          const { r, g, b, a } = organismStyle.backgroundColor;
        atomName.forEach(atom => str1 += 
        `<${atom || 'div'} style={{
          position: 'relative', 
          width: ${organism.absoluteBoundingBox.width}, 
          height: ${organism.absoluteBoundingBox.height}, 
          margin: '0 auto',
          padding: 0,
          backgroundColor: 'rgba(${Math.round(r*255)}, ${Math.round(g*255)}, ${Math.round(b*255)}, ${Math.round(a*1)})'}}
        >`)
        str1 += htmlData;
        atomName.reverse().forEach(atom => str1 += `</${atom || 'div'}>`)
        htmlData = str1;
      } else {
        htmlData = htmlData;
      }
      let str = `${molecule(cName, totalLeaves, '{}', htmlData)}`;
      writeFileToDisk(path.join(__dirname, '../src/components/molecules', `${cName}.js`), str);
      return {
        value: `<${cName} />`,
        leafName: cName,
        isWrittenToFile: true,
        isThirdParty: false
      };
    } else {
      return {
        value: htmlData,
        leafName: componentName,
        isWrittenToFile: false,
        isThirdParty: false
      };;
    }
  }else {
    const [ componentName = null, atomName = null ] = organism.name.split('_');
    const { r, g, b, a } = organism.fills[0].color;
    console.log(organism.name, r, g, b, a)
    return atomName && {
      value: `<${atomName} style={{
        position: 'absolute', 
        top: ${organism.absoluteBoundingBox.y - calcTop(frame)}, 
        left: ${organism.absoluteBoundingBox.x},
        width: ${organism.absoluteBoundingBox.width},
        height: ${organism.absoluteBoundingBox.height},
        ${organism.type === 'TEXT'? 'color': 'backgroundColor'} : 'rgba(${r*255},${g*255},${b*255},${a})'}}
      >${organism.characters || ''}</${atomName}>`,
      leafName: componentName,
      isWrittenToFile: true,
      isThirdParty: true,
      atomName
    } || {};
  }
};

organisms.forEach(org => organismCreator(org, true));