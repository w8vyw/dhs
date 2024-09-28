/** @type {import('stylelint').Config} */

export default {
	extends: ['stylelint-config-standard-scss'],
	defaultSeverity: 'warning',
	plugins: ['stylelint-prettier', 'stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
	rules: {
		'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
		// autoprefixer
		'property-no-vendor-prefix': null,
		'declaration-empty-line-before': null,
		'prettier/prettier': [true, { endOfLine: 'auto' }],
		'plugin/declaration-block-no-ignored-properties': true,
		'order/order': [
			[
				'custom-properties',
				'dollar-variables',
				'declarations',
				'at-rules',
				{ type: 'at-rule', name: 'include' },
				{ type: 'at-rule', name: 'include', hasBlock: true },
				{ type: 'at-rule', name: 'media', parameter: 'hover' },
				{ type: 'at-rule', name: 'media', parameter: '<=' },
				{ type: 'at-rule', name: 'media', parameter: '>=' },
				{ type: 'at-rule', name: 'media' },
				{ type: 'rule', selector: '^&:[\\w-]+$', name: 'pseudo-classes' },
				{ type: 'rule', selector: '^&::[\\w-]+$', name: 'pseudo-element' },
				{ type: 'rule', selector: '^&:\\w+(::\\w+)?$', name: 'pseudo-mix' },
				'rules'
			],
			{ unspecified: 'top' }
		],
		'order/properties-order': [
			[
				'box-sizing',
				'content',
				{
					name: 'positioning',
					properties: ['position', 'inset', 'top', 'right', 'bottom', 'left', 'z-index'],
					emptyLineBefore: 'always'
				},
				{
					name: 'block model',
					properties: [
						'display',
						'grid-template',
						'grid-template-columns',
						'grid-template-rows',
						'grid-template-areas',
						'grid-area',
						'flex-flow',
						'flex-direction',
						'flex-wrap',
						'justify-content',
						'align-items',
						'gap',
						'align-self',
						'order',
						'flex',
						'flex-grow',
						'flex-shrink',
						'flex-basis',
						'width',
						'max-width',
						'min-width',
						'height',
						'max-height',
						'min-height',
						'aspect-ratio',
						'margin',
						'margin-top',
						'margin-right',
						'margin-bottom',
						'margin-left',
						'padding',
						'padding-top',
						'padding-right',
						'padding-bottom',
						'padding-left',
						'border',
						'border-top',
						'border-right',
						'border-bottom',
						'border-left',
						'border-width',
						'border-style',
						'border-color',
						'border-radius',
						'border-top-left-radius',
						'border-top-right-radius',
						'border-bottom-right-radius',
						'border-bottom-left-radius',
						'overflow',
						'overflow-x',
						'overflow-y',
						'opacity',
						'visibility',
						'box-shadow',
						'outline',
						'outline-width',
						'outline-style',
						'outline-color',
						'outline-offset',
						'object-fit',
						'object-position'
					],
					emptyLineBefore: 'always'
				},
				{
					name: 'background',
					properties: [
						'background',
						'background-color',
						'background-image',
						'background-repeat',
						'background-position',
						'background-size',
						'background-clip',
						'background-origin',
						'background-attachment',
						'background-blend-mode'
					],
					emptyLineBefore: 'always'
				},
				{
					name: 'typography',
					properties: [
						'fill',
						'color',
						'font',
						'font-family',
						'font-size',
						'font-weight',
						'font-style',
						'font-variant',
						'font-size-adjust',
						'font-stretch',
						'line-height',
						'text-align',
						'text-decoration',
						'text-transform',
						'text-indent',
						'text-overflow',
						'text-shadow',
						'text-wrap',
						'letter-spacing',
						'word-spacing',
						'white-space',
						'overflow-wrap',
						'word-wrap',
						'word-break',
						'hyphens'
					],
					emptyLineBefore: 'always'
				},
				{
					name: 'transitions',
					properties: [
						'transition',
						'transition-property',
						'transition-duration',
						'transition-timing-function',
						'transition-delay'
					],
					emptyLineBefore: 'always'
				},
				{
					name: 'animations',
					properties: [
						'animation',
						'animation-name',
						'animation-duration',
						'animation-timing-function',
						'animation-delay',
						'animation-iteration-count',
						'animation-direction',
						'animation-fill-mode',
						'animation-play-state'
					],
					emptyLineBefore: 'always'
				},
				{
					name: 'transform',
					properties: ['transform', 'transform-origin', 'transform-style', 'scale', 'rotate', 'translate', 'skew'],
					emptyLineBefore: 'always'
				},
				{
					name: 'other',
					properties: [
						'cursor',
						'pointer-events',
						'user-select',
						'clip',
						'resize',
						'filter',
						'quotes',
						'scroll-behavior',
						'scroll-snap-type',
						'scroll-snap-align',
						'scroll-margin',
						'scroll-margin-top',
						'scroll-margin-right',
						'scroll-margin-bottom',
						'scroll-margin-left',
						'scroll-padding',
						'scroll-padding-top',
						'scroll-padding-right',
						'scroll-padding-bottom',
						'scroll-padding-left'
					],
					emptyLineBefore: 'always'
				}
			],
			{ unspecified: 'top' }
		]
	}
}
