import vue from 'rollup-plugin-vue';
import resolve from '@rollup/plugin-node-resolve';
import { terser as minify } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';

const isProduction = process.env.ROLLUP_WATCH !== 'true';

export default {
    input: {
        'frontend/SampleVue': 'src/frontend/sample-vue/Frontend.ts'
    },
    output: [
        {
            dir: 'build.web',
            format: 'es',
            sourcemap: true
        }
    ],
    plugins: [
        vue({
            //compileTemplate: true,
            //css: true
        }),
        css({
            output: 'build.web/css/sample-vue.css'
        }),
        resolve({
            browser: true,
            dedupe: module => /^vue(\/|$)/.test(module)
        }),
        typescript(),
        isProduction && minify()
    ]
};