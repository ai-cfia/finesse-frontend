const fs = require('fs');

const filePath = 'src/_versions.ts';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const versionMatch = data.match(/version:\s*'(\d+\.\d+\.\d+)'/);
    if (versionMatch && versionMatch[1]) {
        console.log("Extracted Version:", versionMatch[1]);
        process.stdout.write(`::set-output name=version::${versionMatch[1]}`);
    } else {
        console.error('Version could not be extracted');
    }
});
