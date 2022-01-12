// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import BlogPostItem from '@theme-init/BlogPostItem';
import { Context } from '@theme/useFrontMatter';
import type { Props } from '@theme/BlogPostItem';
import React from 'react';


export default (props: Props): JSX.Element => <Context.Provider value={props.frontMatter}>
	<BlogPostItem {...props} />
</Context.Provider>;
