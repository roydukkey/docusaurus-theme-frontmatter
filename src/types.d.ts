// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //
/* eslint-disable @typescript-eslint/no-type-alias */


declare module '@theme/useFrontMatter' {

	import type { Props as BlogPostItemProps } from '@theme/BlogPostItem';
	import type { Context } from 'react';
	import type { Props as DocItemProps } from '@theme/DocItem';
	import type { Props as MDXPageProps } from '@theme/MDXPage';

	/**
	 * Returns the front matter for the current context.
	 */
	export default function <T extends FrontMatter> (): T;

	/**
	 * The current front matter context.
	 */
	export const Context: Context<FrontMatter | null>;


	export interface FrontMatter {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		readonly [key: string]: any;
	}

	export type DocItemFrontMatter = DocItemProps['content']['frontMatter'];
	export type BlogPostItemFrontMatter = BlogPostItemProps['frontMatter'];
	export type MDXPageFrontMatter = MDXPageProps['content']['frontMatter'];

}
