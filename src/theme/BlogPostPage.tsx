// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import BlogPostPageInit from '@theme-init/BlogPostPage';
import { Context } from '@theme/useFrontMatter';
import type { Props } from '@theme/BlogPostPage';
import React from 'react';


export default function BlogPostPage (props: Props): JSX.Element {
	return (
		<Context.Provider value={props.content.frontMatter}>
			<BlogPostPageInit {...props} />
		</Context.Provider>
	);
}
