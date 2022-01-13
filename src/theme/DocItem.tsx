// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import { Context } from '@theme/useFrontMatter';
import DocItemInit from '@theme-init/DocItem';
import type { Props } from '@theme/DocItem';
import React from 'react';


export default function DocItem (props: Props): JSX.Element {
	return (
		<Context.Provider value={props.content.frontMatter}>
			<DocItemInit {...props} />
		</Context.Provider>
	);
}
