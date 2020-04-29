<?php
namespace Deployer;

require 'recipe/common.php';

// Project name
set('application', 'setup.adabs.ch');

// Project repository
set('repository', 'git@github.com:adabs-urdum/vanilla_setup.git');

// [Optional] Allocate tty for git clone. Default value is false.
// set('git_tty', true);

// Shared files/dirs between deploys
// ProcessWire shared dirs
set('shared_dirs', []);

// ProcessWire shared files
set('shared_files', ['.htaccess']);

// Writable dirs by web server
set('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts
host('cyrill-lehmann.ch')
    ->stage('production')
    ->user('slothnew')
    ->set('deploy_path', '~/public_html/setup.adabs.ch');
set('default_stage', 'production');


// Tasks

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:vendors',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
