import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";
export const path = {
  build: {
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`,
    images: `${buildFolder}/img/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,

  },
  clean: buildFolder,
  buildFoler: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};
