/* eslint-disable */
const gulp = require('gulp');
const argv = require('yargs').argv;
const fs = require('fs');
getStyle(argv.profile);
function getStyle(type) {
  const style = {
    api: {
      typePokemon: '',
    },

    colors: {
      primary: '',
      secondary: '',
    },
  };
  if (type === 'fairy') {
    style.api.typePokemon = 'fairy';
    style.colors.primary = '#f492a5';
    style.colors.secondary = '#f9cbd0';
  } else if (type === 'fire') {
    style.api.typePokemon = 'fire';
    style.colors.primary = '#d57534';
    style.colors.secondary = '#f1a43f';
  } else if (type === 'bug') {
    style.api.typePokemon = 'bug';
    style.colors.primary = '#448346';
    style.colors.secondary = '#8bb53d';
  }

  let profile = `/* eslint-disable */
  export const style = {
    api: {
      typePokemon: '${style.api.typePokemon}',
    },

    colors: {
      primary: '${style.colors.primary}',
      secondary: '${style.colors.secondary}',
    },
  };
`;

  fs.writeFileSync('./src/style.js', profile, (error) => {
    if (error) throw error;
  });
  console.log(`criado perfil para o cliente ${argv.profile} !!!`);
}
