const organism = (componentName, imports, styles, children) => `
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
${imports.map(lf => `import ${lf} from '../molecules/${lf}';`).join('\n')}

const styles = theme => (${styles});

const ${componentName} = () => {

    return (<>${children}</>);
}

export default withStyles(styles)(${componentName});
`;

module.exports = organism;