import { LinkProps as NextLinkProps } from 'next/link'

import { ComponentPropsWithRef } from 'react'

interface IVariants {
	color?: 'white' | 'sand' | 'green'
	radius?: 'none' | 'left' | 'right'
}

export type TButtonProps = ComponentPropsWithRef<'button'> & IVariants

export type TButtonLinkProps = NextLinkProps & Omit<ComponentPropsWithRef<'a'>, 'href'> & IVariants
