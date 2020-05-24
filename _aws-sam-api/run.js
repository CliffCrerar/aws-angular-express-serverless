const instruction = process.argv[2]
const { spawn } = require('child_process');
const spawnConfig = { stdio: 'inherit', cwd: require('path').resolve(), env: process.env };

const commandsIndex = {
    remove: { command: 'rm', args: ['-rd', '.aws-sam'] },
    build: { command: 'sam', args: ['build'] },
    start: { command: 'sam', args: ['local', 'start-api', '--env-vars', 'env.json'] },
    invoke: { command: 'sam', args: ['invoke', 'start-api', '--env-vars', 'env.json'] },
    validate: { command: 'sam', args: ['validate'] },
    deploy: { command: 'sam', args: ['deploy'] }
}

const sequences = {
    start: ['remove', 'build', 'start'],
    build: ['remove', 'build'],
    deploy: ['remove', 'build', 'deploy'],
    validate: ['validate'],
    invoke: ['remove','build','invoke']
}

console.log('process.argv: ', instruction);
switch (instruction) {
    case 'start': runSamAppWith(instruction); break;
    case 'invoke': runSamAppWith(instruction); break;
    case 'validate': runSamAppWith(instruction); break;
    case 'deploy': runSamAppWith(instruction); break;
    default: dickHole();
}

function runSamAppWith(query) {
    console.log('command: ', query);
    console.log(sequences[query]);

    sequences




}

function execute(instruction, shellCommand, args) {

    return new Promise((resolved, rejected) => {

        spawn(commandsIndex()[shellCommand], [args], spawnConfig)

        sp.on('message', msg => console.log(instruction, 'msg:', msg));
        sp.on('exit', (msg) => console.log(instruction, 'exit:', msg));

        sp.on('error', (err) => {
            console.error(instruction, 'err:', err)
            rejected(err);
        });

        sp.on('close', (msg) => {
            console.log(instruction, 'exit', msg)
            resolved(msg);
        });
    })

}


function dickHole() {
    console.log('--------------------------------------------');
    console.log(' INVALID COMMAND!\n');
    console.log(' No such process dickhole!\n');
    console.log(' Exiting\n');
    console.log(' No sequence running try somin else');
    console.log('--------------------------------------------');
    process.exit(1);
}