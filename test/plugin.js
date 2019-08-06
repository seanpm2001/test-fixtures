'use strict';

const path   = require('path');

const Plugin = require('../lib/plugin');

exports.Plugin = {
    'exports a Plugin function' (test) {
        test.expect(1);
        test.equal(typeof Plugin, 'function');
        test.done();
    },
    'creates a new Plugin from .js' (test) {
        test.expect(1);
        const newPlugin = new Plugin(path.join('test','fixtures','mock-plugin'));
        // console.log(newPlugin);
        test.ok(newPlugin);
        test.done();
    },
    'creates a new Plugin from dir' (test) {
        test.expect(1);
        const newPlugin = new Plugin(path.join('test','fixtures','mock-plugin-dir'));
        // console.log(newPlugin);
        test.ok(newPlugin);
        test.done();
    },
}

exports.contents = {
    setUp (done) {
        // console.log(Plugin);
        this.plugin = new Plugin(path.join('test','fixtures','mock-plugin-dir'));
        done();
    },
    'register exists' (test) {
        test.expect(1);
        // console.log(this.plugin);
        test.equal(typeof this.plugin.register, 'function');
        test.done();
    },
    'register runs' (test) {
        test.expect(1);
        this.plugin.register();
        test.ok(true); // register() didn't throw
        test.done();
    }
}

exports.inherits = {
    'can register plugin with ineritance' (test) {
        test.expect(2);
        const pi = new Plugin(path.join('test','fixtures','mock-plugin'));
        test.equal(typeof pi.register, 'function');
        pi.register();
        test.ok(Object.keys(pi.base));
        test.done();
    },
    'plugin name remains the same after a plugin inerits' (test) {
        test.expect(2);
        const pi = new Plugin(path.join('test','fixtures','mock-plugin'));
        test.equal(typeof pi.register, 'function');
        pi.register();
        test.equal(pi.name, path.join('test','fixtures','mock-plugin'));
        test.done();
    },
}