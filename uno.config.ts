import { defineConfig, presetAttributify, presetTypography } from 'unocss'
import presetUno from '@unocss/preset-uno'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'
import transformerCompileClass from '@unocss/transformer-compile-class'


export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetTypography()
    ],
    transformers: [
        transformerVariantGroup(),
        transformerCompileClass(),
        transformerDirectives()
    ]
})
