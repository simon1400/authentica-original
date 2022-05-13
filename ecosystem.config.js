module.exports = {
  apps : [{
    name   : "Authentica client",
    script : "yarn start",
    watch: [".next", "pages"],
    watch_delay: 1000,
    ignore_watch : ["node_modules"],
    env_production: {}
  }],

  deploy : {
    production : {
      user : 'dimi',
      host : ['89.221.216.23'],
      ref  : 'origin/main',
      repo : 'git@github.com:simon1400/authentica-original.git',
      path : '/var/www/authentica-original/client',
      'post-deploy' : 'yarn && yarn build && pm2 reload ecosystem.config.js --env production',
    }
  }
};
