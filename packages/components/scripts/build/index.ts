import delPath from "../utils/delpath";
import { series, parallel, src, dest } from "gulp";
import { pkgPath, componentPath } from "../utils/paths";
import gulpSass from "gulp-sass";
import sassLang from "sass";
// import autoprefixer from 'gulp-autoprefixer';
import run from "../utils/run";

const sass = gulpSass(sassLang);

export const removeDist = () => {
  return delPath(`${pkgPath}/dist`);
};

//打包样式
export const buildStyle = () => {
  return (
    src(`${componentPath}/src/**/style/**.scss`)
      .pipe(sass())
      // .pipe(autoprefixer())
      .pipe(dest(`${pkgPath}/dist/lib/src`))
      .pipe(dest(`${pkgPath}/dist/es/src`))
  );
};

//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
