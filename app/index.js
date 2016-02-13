
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var SimpleHtmlGenerator = yeoman.generators.Base.extend({
    initializing: function () {
        this.pkg = require('../package.json');
    },

    prompting: function () {
        var done = this.async();

        var prompts = [
            {
                name: 'siteName',
                message: 'What is your site\'s name?',
                default: 'My Simple Website'
            }
        ];

        this.prompt(prompts, function (props) {
            this.siteName = props.siteName;

            done();
        }.bind(this));
    },

    structure: function () {
        this.mkdir('css');
        this.mkdir('js');
    },

    files: function () {

        var context = {
            site_name: this.siteName
        };

        this.copy('bower.json', 'bower.json');
        this.copy('gulpfile.js', 'gulpfile.js');
        this.copy('index.html', 'index.html');
        this.copy('package.json', 'package.json');
        this.copy('css/style.css', 'css/style.css');
        this.copy('js/app.js', 'js/app.js');

    },

    end: function () {
        this.installDependencies();
    }
});

module.exports = SimpleHtmlGenerator;