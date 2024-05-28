function slugify(str) {
  return String(str)
    .normalize('NFKD') // dividir os caracteres acentuados nos seus caracteres de base e nos sinais diacríticos
    .replace(/[\u0300-\u036f]/g, '') // remove todos os acentos, isso ocorre para estarem todos na \u03xx UNICODE block.
    .trim() //   aparar espaços em branco à frente ou atrás
    .toLowerCase() // converte para letra minúscula
    .replace(/[^a-z0-9 -]/g, '') // remove caractéres não alfa numéricos
    .replace(/\s+/g, '-') // substitui os espaços por hiféns
    .replace(/-+/g, '-'); // remove hiféns consecutivos
}

module.exports = slugify;
