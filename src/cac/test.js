import cac from 'cac';
const cli = cac("vite");
cli.option('--type [type]', 'Choose a project type', {
    default: 'node',
});
cli.option('--name <name>', 'Provide your name');
cli.command('lint [...files]', 'Lint files').action((files, options) => {
    console.log(files, options);
});
// Display help message when `-h` or `--help` appears
cli.help();
cli.version('1.0.0');
const parsed = cli.parse();
// console.log(JSON.stringify(parsed, null, 2))
