// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import BlogPostItemInit from '@theme-init/BlogPostItem';
import { Context } from '@theme/useFrontMatter';
import type { Props } from '@theme/BlogPostItem';
import React from 'react';


export default function BlogPostItem (props: Props): JSX.Element {
	return (
		<Context.Provider value={props.frontMatter}>
			<BlogPostItemInit {...props} />
		</Context.Provider>
	);
}
