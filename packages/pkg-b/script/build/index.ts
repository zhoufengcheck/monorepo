import delPath from '../utils/delpath';
import { series, parallel, src, dest } from 'gulp';
import { pkgPath, componentPath } from '../utils/paths';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import run from '../utils/run';


//删除easyest
export const removeDist = async() => {
  return delPath(`${pkgPath}/dist`)
};


//打包组件
export const buildComponent = async () => {
  return run('pnpm run build', componentPath);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/components/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/dist/lib`))
    .pipe(dest(`${pkgPath}/dist/es`));
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent(),
  )
);