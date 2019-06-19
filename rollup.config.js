import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

const fileFormat = (format, output) => ({
    file: `./dist/${output}.js`,
    format,
    sourcemap: true
})

export default (input, output) => ({
    plugins: [
        postcss({
            modules: true,
            extract: true,
            generateScopedName: '[hash:base64:5]',
            plugins: [
                autoprefixer()
            ],
            extensions: ['.scss', '.css']
        }),
        typescript({
            clean: true
        }),
    ],
    external: [
        'react'
    ],
    input,
    output: [
        fileFormat('es', output),
    ]
});
