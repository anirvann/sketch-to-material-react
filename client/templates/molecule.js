const molecule = (componentName, imports, styles, children) => `
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
${imports
    .filter((item, pos, arr) => arr.findIndex(item => item.atomName === arr[pos].atomName) === pos)
    .map(lf => {
  return lf.isThirdParty? `import ${lf.atomName} from '@material-ui/core/${lf.atomName}';\n` : `import ${lf.leafName} from '../src/components/molecules/${lf.leafName}';\n`
}).join('')}

const styles = theme => (${styles});

const ${componentName} = () => <>${children}</>

export default withStyles(styles)(${componentName});
`;

module.exports = molecule;