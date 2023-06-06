const fs = require("fs");

module.exports = async (client) => {
  const SlashsArray = [];

  fs.readdir(`././commandSlash/`, (erro, pasta) => {
    pasta.forEach((subpasta) => {
      fs.readdir(`././commandSlash/${subpasta}/`, (erro, arquivos) => {
        arquivos.forEach((arquivo) => {
          if (!arquivo?.endsWith(".js")) return;
          arquivo = require(`../commandSlash/${subpasta}/${arquivo}`);
          if (!arquivo?.name) return;
          client.slashCommands.set(arquivo?.name, arquivo);
          SlashsArray.push(arquivo);
        });
      });
    });
  });

  fs.readdir(`././commandPrefix/`, (erro, pasta) => {
    pasta.forEach((subpasta) => {
      fs.readdir(`././commandPrefix/${subpasta}/`, (erro, arquivos) => {
        arquivos.forEach((arquivo) => {
          if (!arquivo?.endsWith(".js")) return;
          comando = require(`../commandPrefix/${subpasta}/${arquivo}`);
          client.prefixCommands.set(arquivo.replace(/.js/g, ""), comando);
          if (comando?.aliases?.length) {
            comando.aliases.forEach((cmd) =>
              client.prefixCommands.set(cmd, comando)
            );
          }
        });
      });
    });
  });

  client.on("ready", async () => {
    client.application.commands.set(SlashsArray);
  });

  fs.readdir(`././Events/`, (erro, pasta) => {
    pasta.forEach((subpasta) => {
      fs.readdir(`././Events/${subpasta}/`, (erro, arquivos) => {
        arquivos.forEach((arquivo) => {
          if (!arquivo.endsWith(".js")) return;
          require(`../Events/${subpasta}/${arquivo}`);
        });
      });
    });
  });
};
