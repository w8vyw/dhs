'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'

import { useEffect } from 'react'

export function YandexMetrika({ counterId }: { counterId: string }) {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		// @ts-expect-error: ym auto defined by script
		// eslint-disable-next-line
		ym(counterId, 'hit', window.location.href)
	}, [counterId, pathname, searchParams])

	return (
		<Script
			id='yandex-metrika'
			strategy='afterInteractive'
		>
			{`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(${counterId}, "init", {
          defer: true,
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
					webvisor:true
        });
      `}
		</Script>
	)
}
