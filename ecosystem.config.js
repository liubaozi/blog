module.exports = {
    apps: [{
        name: 'geek_blog',
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start',
        env: {
            NODE_ENV: "production",
            PORT: 3095
        }
    }]
}