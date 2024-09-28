import type { TCategory, IProduct } from '@/types/global'

export const categories: TCategory[] = [
	'Лучшее',
	'Сыродавленное масло',
	'Мука',
	'Суперфуды',
	'Протеин',
	'Конфеты',
	'Авторские наборы',
	'Бакалея',
	'Чаи'
]

export const products: IProduct[] = [
	// {
	// 	id: 'test-oil',
	// 	name: 'Тестовое масло с огромным длинным названием и описанием',
	// 	image: '/images/products/product.webp',
	// 	description:
	// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quibusdam, esse sequi aut distinctio sunt eos ullam unde magni, quo quae provident! Sequi, tempora dolores placeat laudantium dolorum laboriosam voluptatem aperiam voluptas dolor eum illum aspernatur architecto, quisquam ex quis minus quasi libero facere soluta alias doloribus hic. Corrupti, itaque!',
	// 	sizes: [
	// 		{ label: '1мл', available: true },
	// 		{ label: '999 мл', available: true },
	// 		{ label: '1л', available: false },
	// 		{ label: '88888 мл', available: false }
	// 	],
	// 	prices: [
	// 		{ label: '1мл', value: 1001 },
	// 		{ label: '999 мл', value: 2000, discount: { count: 50, value: 1000 } },
	// 		{ label: '1л', value: 4000, discount: { count: 90, value: 400 } },
	// 		{ label: '88888 мл', value: 30000, discount: { count: 99, value: 300 } }
	// 	],
	// 	categories: ['Сыродавленное масло', 'Лучшее']
	// },
	{
		id: 'authorial-on-mustard-oil',
		name: 'Авторское масло на основе горчичного',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [{ label: '250мл', available: true }],
		prices: [{ label: '250мл', value: 2000 }],
		categories: ['Сыродавленное масло', 'Лучшее']
	},
	{
		id: 'authorial-on-honey-mustard-oil',
		name: 'Авторское масло на основе медово-горчичного',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [{ label: '250мл', available: true }],
		prices: [{ label: '250мл', value: 2500 }],
		categories: ['Сыродавленное масло', 'Лучшее']
	},
	{
		id: 'authorial-on-sunflower-oil',
		name: 'Авторское масло на основе подсолнечного',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [{ label: '250мл', available: true }],
		prices: [{ label: '250мл', value: 1900 }],
		categories: ['Сыродавленное масло', 'Лучшее']
	},
	{
		id: 'black-cumin-oil',
		name: 'Масло Черного тмина',
		image: '/images/products/product.webp',
		description: 'Сыродавленное масло чёрного тмина из семян производства Эфиопии, холодного отжима.',
		sizes: [
			{ label: '100мл', available: true },
			{ label: '250мл', available: true }
		],
		prices: [
			{ label: '100мл', value: 2000 },
			{ label: '250мл', value: 4500 }
		],
		categories: ['Сыродавленное масло', 'Лучшее']
	},
	{
		id: 'cedar-oil',
		name: 'Масло Кедровое',
		image: '/images/products/product.webp',
		description:
			'Кедровое масло – это натуральное средство, которое обладает широким спектром полезных свойств для организма. Благодаря уникальному составу, оно способно укрепить иммунитет, улучшить пищеварение, снизить уровень холестерина в крови, а также повысить энергию и выносливость.',
		sizes: [{ label: '250мл', available: true }],
		prices: [{ label: '250мл', value: 3000 }],
		categories: ['Сыродавленное масло', 'Лучшее']
	},
	{
		id: 'hemp-oil',
		name: 'Масло Конопляное',
		image: '/images/products/product.webp',
		description:
			'Конопляное масло называют уникальным диетическим продуктом высокой биологической ценности. Это исконно русский, невероятно полезный, но, к сожалению, не заслуженно забытый продукт.',
		sizes: [{ label: '250мл', available: true }],
		prices: [{ label: '250мл', value: 1900 }],
		categories: ['Сыродавленное масло', 'Лучшее']
	},
	{
		id: 'lin-oil',
		name: 'Масло Льняное',
		image: '/images/products/product.webp',
		description:
			'Льняное масло отжатое на прессе и бочке имеет абсолютно уникальный, сладковатый вкус. Настолько нежное, что вы удивитесь и все мифы о “горьком’’ масле льна развеются, ведь мы отжимаем его вручную! Наше масло стоит попробовать, чтобы в этом убедиться!',
		sizes: [{ label: '250мл', available: true }],
		prices: [{ label: '250мл', value: 700 }],
		categories: ['Сыродавленное масло', 'Лучшее']
	},
	{
		id: 'pumpkin-oil',
		name: 'Масло Штирийской тыквы',
		image: '/images/products/product.webp',
		description:
			'Сыродавленное тыквенное масло из штирийских сортов тыквы, холодный отжим. Мягко поддерживает печень и запускает работу желчевыводящих путей. Показано при атопическом дерматите, аллергиях (мамам на ГВ).',
		sizes: [{ label: '250 мл', available: true }],
		prices: [{ label: '250 мл', value: 1800 }],
		categories: ['Сыродавленное масло', 'Лучшее']
	},
	{
		id: 'apricot-oil',
		name: 'Масло Абрикосовой косточки',
		image: '/images/products/product.webp',
		description:
			'Интересно, что в Англии в XVI веке ценность масла абрикосовых косточек была сопоставима с ценностью золота.',
		sizes: [{ label: '250мл', available: true }],
		prices: [{ label: '250мл', value: 1800 }],
		categories: ['Сыродавленное масло']
	},
	{
		id: 'walnut-oil',
		name: 'Масло Грецкого ореха',
		image: '/images/products/product.webp',
		description:
			'С давних времен грецкий орех считался плодом интеллектуального развития и мудрости. Ученые еще в древней Персии утверждали, что плод грецкого ореха – это мозг, а масло, полученное из него, – ум.',
		sizes: [{ label: '250мл', available: true }],
		prices: [{ label: '250мл', value: 1500 }],
		categories: ['Сыродавленное масло']
	},
	{
		id: 'chia-oil',
		name: 'Масло Чиа',
		image: '/images/products/product.webp',
		description:
			'Чиа в переводе с языка древних ацтеков означает «сила». Волшебные семена ЧИА действительно давали силу, были для древних племен и пищей, и лекарством, и валютой, и даром для богов.',
		sizes: [{ label: '250мл', available: true }],
		prices: [{ label: '250мл', value: 1900 }],
		categories: ['Сыродавленное масло']
	},
	{
		id: 'sesame-oil',
		name: 'Масло Кунжутное',
		image: '/images/products/product.webp',
		description:
			'Целительная сила сыродавленного кунжутного масла признана не только народными лекарями, но и дипломированными медиками.',
		sizes: [{ label: '250мл', available: true }],
		prices: [{ label: '250мл', value: 1500 }],
		categories: ['Сыродавленное масло']
	},
	{
		id: 'almond-oil',
		name: 'Масло Миндальное',
		image: '/images/products/product.webp',
		description:
			'Исторически миндальное масло использовалось в древнекитайской, аюрведической и греко-персидской школах медицины для лечения заболеваний сухой кожи, таких как псориаз и экзема.',
		sizes: [{ label: '250мл', available: true }],
		prices: [{ label: '250мл', value: 2500 }],
		categories: ['Сыродавленное масло']
	},
	{
		id: 'macadamia-oil',
		name: 'Масло Макадамии',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [{ label: '250мл', available: true }],
		prices: [{ label: '250мл', value: 3500 }],
		categories: ['Сыродавленное масло']
	},
	{
		id: 'sunflower-oil',
		name: 'Масло Подсолнечное',
		image: '/images/products/product.webp',
		description:
			'Подсолнечное масло начали производить еще в конце XVIII века в Англии, но на британской земле продукт оценен не был. В Россию подсолнечник завез Петр I. Идея изготавливать из подсолнечника масло возникла в 1829 году у крепостного крестьянина Дмитрия Бокарева из Воронежской губернии.',
		sizes: [{ label: '250мл', available: true }],
		prices: [{ label: '250мл', value: 500 }],
		categories: ['Сыродавленное масло']
	},
	{
		id: 'milk-thistle-oil',
		name: 'Масло Расторопши',
		image: '/images/products/product.webp',
		description:
			'Нормализации гормонального и липидного обмена веществ Общеукрепляющем воздействии при повышенных физических нагрузках.',
		sizes: [{ label: '250мл', available: true }],
		prices: [{ label: '250мл', value: 1800 }],
		categories: ['Сыродавленное масло']
	},
	{
		id: 'mustard-oil',
		name: 'Масло Горчичное',
		image: '/images/products/product.webp',
		description:
			'Горчица, существование которой насчитывает уже много веков, является популярной пряностью во многих странах. И не только из-за своего прекрасного вкуса, но и благодаря наличию разнообразных целебных свойств.',
		sizes: [{ label: '250 мл', available: true }],
		prices: [{ label: '250 мл', value: 700 }],
		categories: ['Сыродавленное масло']
	},
	{
		id: 'coconut-oil',
		name: 'Масло Кокосовое',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [{ label: '250 мл', available: true }],
		prices: [{ label: '250 мл', value: 900 }],
		categories: ['Сыродавленное масло']
	},
	{
		id: 'ghee-oil',
		name: 'Масло гхи',
		image: '/images/products/product.webp',
		description:
			'Универсальный продукт. В броне кофе, для жарки и тушения, смазать блины и оладьи, на бутерброд, в кашу, пасту и гарниры.',
		sizes: [
			{ label: '250мл', available: true },
			{ label: '390мл', available: true },
			{ label: '500мл', available: true }
		],
		prices: [
			{ label: '250мл', value: 700 },
			{ label: '390мл', value: 1050 },
			{ label: '500мл', value: 1400 }
		],
		categories: ['Сыродавленное масло']
	},
	{
		id: 'synergy-oil',
		name: 'Масло Синергия (кедр с облепихой)',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [{ label: '250мл', available: true }],
		prices: [{ label: '250мл', value: 6900 }],
		categories: ['Сыродавленное масло']
	},
	{
		id: 'buckthorn-oil',
		name: 'Масло Облепиховое',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [
			{ label: '100мл', available: true },
			{ label: '250мл', available: true }
		],
		prices: [
			{ label: '100мл', value: 5000 },
			{ label: '250мл', value: 10000 }
		],
		categories: ['Сыродавленное масло']
	},
	// ----------------------------------------------------------------------------- flour
	{
		id: 'cedar-flour',
		name: 'Мука Кедровая',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [
			{ label: '500гр', available: true },
			{ label: '1000гр', available: true }
		],
		prices: [
			{ label: '500гр', value: 900 },
			{ label: '1000гр', value: 1800 }
		],
		categories: ['Мука']
	},
	{
		id: 'almond-flour',
		name: 'Мука Миндальная',
		image: '/images/products/product.webp',
		description:
			'Миндальная мука прочно занимает лидирующие позиции среди безглютеновой муки. Она производится из отборного промытого частично обезжиренного миндального ореха.',
		sizes: [
			{ label: '500гр', available: true },
			{ label: '1000гр', available: true }
		],
		prices: [
			{ label: '500гр', value: 800 },
			{ label: '1000гр', value: 1600 }
		],
		categories: ['Мука']
	},
	{
		id: 'green-buckwheat-flour',
		name: 'Мука из Зелёной гречи',
		image: '/images/products/product.webp',
		description:
			'Мука из зеленой гречки – прекрасная альтернатива пшеничной муке. Наша мука изготавливается из цельного зерна, выращенного в экологически чистой местности на Алтае.',
		sizes: [
			{ label: '500 гр', available: true },
			{ label: '1000 гр', available: true }
		],
		prices: [
			{ label: '500 гр', value: 400 },
			{ label: '1000 гр', value: 800 }
		],
		categories: ['Мука']
	},
	{
		id: 'coconut-flour',
		name: 'Мука Кокосовая',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [
			{ label: '500 гр', available: true },
			{ label: '1000 гр', available: true }
		],
		prices: [
			{ label: '500 гр', value: 450 },
			{ label: '1000 гр', value: 900 }
		],
		categories: ['Мука']
	},
	{
		id: 'pumpkin-flour',
		name: 'Мука Тыквенная',
		image: '/images/products/product.webp',
		description:
			'Тыквенная мука — вкусная и очень полезная альтернатива пшеничной муке. Наш продукт изготавливается из натуральных семян премиального сорта штирийской тыквы, с любовью выращенной в России.',
		sizes: [
			{ label: '500 гр', available: true },
			{ label: '1000 гр', available: true }
		],
		prices: [
			{ label: '500 гр', value: 400 },
			{ label: '1000 гр', value: 800 }
		],
		categories: ['Мука']
	},
	{
		id: 'sesame-flour',
		name: 'Мука Кунжутная',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [
			{ label: '500 гр', available: true },
			{ label: '1000 гр', available: true }
		],
		prices: [
			{ label: '500 гр', value: 300 },
			{ label: '1000 гр', value: 600 }
		],
		categories: ['Мука']
	},
	{
		id: 'apricot-flour',
		name: 'Мука Абрикосовая',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [
			{ label: '500гр', available: true },
			{ label: '1000гр', available: true }
		],
		prices: [
			{ label: '500гр', value: 350 },
			{ label: '1000гр', value: 700 }
		],
		categories: ['Мука']
	},
	// ----------------------------------------------------------------------------- Суперфуды
	{
		id: '',
		name: 'Здоровье печени',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [{ label: '500гр', available: true }],
		prices: [{ label: '500гр', value: 1900 }],
		categories: ['Суперфуды']
	},
	{
		id: '',
		name: 'Антипаразитная смесь',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [{ label: '500гр', available: true }],
		prices: [{ label: '500гр', value: 1800 }],
		categories: ['Суперфуды']
	},
	{
		id: '',
		name: 'Желчегонная смесь Расторопши',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [{ label: '500гр', available: true }],
		prices: [{ label: '500гр', value: 700 }],
		categories: ['Суперфуды']
	},
	// ----------------------------------------------------------------------------- Протеины
	{
		id: 'hemp-protein',
		name: 'Конопляный протеин',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [{ label: '500гр', available: true }],
		prices: [{ label: '500гр', value: 1800 }],
		categories: ['Протеин']
	},
	{
		id: 'pumpkin-protein',
		name: 'Тыквенный протеин',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [{ label: '500гр', available: true }],
		prices: [{ label: '500гр', value: 1800 }],
		categories: ['Протеин']
	},
	{
		id: 'cedar-protein',
		name: 'Кедровый протеин',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [{ label: '500гр', available: true }],
		prices: [{ label: '500гр', value: 2100 }],
		categories: ['Протеин']
	},
	{
		id: 'sunflower-protein',
		name: 'Подсолнечный протеин',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [{ label: '500гр', available: true }],
		prices: [{ label: '500гр', value: 1400 }],
		categories: ['Протеин']
	},
	// ----------------------------------------------------------------------------- other hits
	{
		id: 'kozinaki',
		name: 'Козинаки без меда',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [
			{ label: 'Семечки 250гр', available: true },
			{ label: 'Арахис 250гр', available: true }
		],
		prices: [
			{ label: 'Семечки 250гр', value: 1300 },
			{ label: 'Арахис 250гр', value: 1600 }
		],
		categories: []
	},
	// ----------------------------------------------------------------------------- sweets
	// ----------------------------------------------------------------------------- sets
	// ----------------------------------------------------------------------------- groceries
	// ----------------------------------------------------------------------------- teas
	// ----------------------------------------------------------------------------- other
	{
		id: '',
		name: 'Зелёная греча',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [{ label: '180 гр', available: true }],
		prices: [{ label: '180 гр', value: 180 }],
		categories: []
	},
	{
		id: '',
		name: 'Пророщенная зелёная греча',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [
			{ label: '180 гр', available: true },
			{ label: '250 гр', available: true }
		],
		prices: [
			{ label: '180 гр', value: 190 },
			{ label: '250 гр', value: 260 }
		],
		categories: []
	},

	{
		id: '',
		name: 'Салатная смесь',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [{ label: '350 гр', available: true }],
		prices: [{ label: '350 гр', value: 510 }],
		categories: []
	},
	{
		id: '',
		name: 'Орехи мытые миндальные',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [
			{ label: '250 гр', available: true },
			{ label: '500 гр', available: true }
		],
		prices: [
			{ label: '250 гр', value: 470 },
			{ label: '500 гр', value: 900 }
		],
		categories: []
	},
	{
		id: '',
		name: 'Мытые семена штирийской тыквы',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [{ label: '250 гр', available: true }],
		prices: [{ label: '250 гр', value: 370 }],
		categories: []
	},
	{
		id: '',
		name: 'Семена бурого кунжута',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [
			{ label: '250 гр', available: true },
			{ label: '500 гр', available: true }
		],
		prices: [
			{ label: '250 гр', value: 270 },
			{ label: '500 гр', value: 510 }
		],
		categories: []
	},
	{
		id: '',
		name: 'Семена чиа',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [
			{ label: '250 гр', available: true },
			{ label: '500 гр', available: true }
		],
		prices: [
			{ label: '250 гр', value: 450 },
			{ label: '500 гр', value: 830 }
		],
		categories: []
	},
	{
		id: '',
		name: 'Семена льна',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [
			{ label: '250 гр', available: true },
			{ label: '500 гр', available: true }
		],
		prices: [
			{ label: '250 гр', value: 130 },
			{ label: '500 гр', value: 210 }
		],
		categories: []
	},
	{
		id: '',
		name: 'Семена подсолнечника',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [
			{ label: '250 гр', available: true },
			{ label: '500 гр', available: true }
		],
		prices: [
			{ label: '250 гр', value: 150 },
			{ label: '500 гр', value: 290 }
		],
		categories: []
	},
	{
		id: '',
		name: 'Мытый грецкий орех',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [
			{ label: '250 гр', available: true },
			{ label: '500 гр', available: true }
		],
		prices: [
			{ label: '250 гр', value: 450 },
			{ label: '500 гр', value: 850 }
		],
		categories: []
	},
	{
		id: '',
		name: 'Стружка кокосовая',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [
			{ label: '250 гр', available: true },
			{ label: '500 гр', available: true }
		],
		prices: [
			{ label: '250 гр', value: 320 },
			{ label: '500 гр', value: 600 }
		],
		categories: []
	},
	{
		id: '',
		name: 'Чай из черного тмина',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [{ label: '250 гр', available: true }],
		prices: [{ label: '250 гр', value: 250 }],
		categories: ['Чаи']
	},
	{
		id: '',
		name: 'Сбор Чистые сосуды',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [{ label: '100 гр', available: true }],
		prices: [{ label: '100 гр', value: 290 }],
		categories: ['Чаи']
	},
	{
		id: '',
		name: 'Иван-чай',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [{ label: '100 гр', available: true }],
		prices: [{ label: '100 гр', value: 390 }],
		categories: ['Чаи']
	},
	{
		id: '',
		name: 'Тыквенно-кедровые конфеты с цедрой лимона',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [
			{ label: '4 шт', available: true },
			{ label: '9 шт', available: true }
		],
		prices: [
			{ label: '4 шт', value: 600 },
			{ label: '9 шт', value: 1400 }
		],
		categories: ['Конфеты']
	},
	{
		id: '',
		name: 'Конфеты кокосовые',
		image: '/images/products/product.webp',
		description: 'Описание',
		sizes: [
			{ label: '4 шт', available: true },
			{ label: '9 шт', available: true }
		],
		prices: [
			{ label: '4 шт', value: 500 },
			{ label: '9 шт', value: 1200 }
		],
		categories: ['Конфеты']
	}
]
