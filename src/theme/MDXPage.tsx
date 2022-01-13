// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import { Context } from '@theme/useFrontMatter';
import MDXPageInit from '@theme-init/MDXPage';
import type { Props } from '@theme/MDXPage';
import React from 'react';


export default function MDXPage (props: Props): JSX.Element {
	return (
		<Context.Provider value={props.content.frontMatter}>
			<MDXPageInit {...props} />
		</Context.Provider>
	);
}
