const { spawn } = require('child_process');

function runNodeApp(fileName) {
    const appProcess = spawn('node', [fileName]);

    appProcess.stdout.on('data', (data) => {
        console.log(`Output (${fileName}): ${data}`);
    });

    appProcess.stderr.on('data', (data) => {
        console.error(`Error (${fileName}): ${data}`);
    });

    appProcess.on('close', (code) => {
        console.log(`Process (${fileName}) exited with code ${code}`);
    });
}

// Run single.js
runNodeApp('single.js');

// Run double.js
runNodeApp('double.js');