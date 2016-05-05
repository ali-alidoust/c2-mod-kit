module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
          release: ['./dist']  
        },
        ts: {
            default: {
                tsconfig: true
            }
        },
        exec: {
          create_executable: {
              command: 'pyinstaller c2-mod-kit.py -i icon.ico -F'
          }
        }
    });
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('default', ['ts']);
    grunt.registerTask('dist', ['clean', 'ts', 'exec:create_executable']);
};