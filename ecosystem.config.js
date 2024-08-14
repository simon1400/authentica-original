module.exports = {
  apps : [{
    name   : "Authentica client",
    script : "npm start"
  }],

  deploy : {
    production : {
      user : 'dimi',
      host : ['89.221.216.23'],
      ref  : 'origin/main',
      repo : 'git@github.com:simon1400/authentica-original.git',
      path : '/home/dimi/app/authentica-original/client',
      'post-deploy' : 'npm i && npm run build && pm2 reload ecosystem.config.js --env production',
    }
  }
};
