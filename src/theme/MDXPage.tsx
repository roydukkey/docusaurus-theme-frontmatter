// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import { Context } from '@theme/useFrontMatter';
import MDXPage from '@theme-init/MDXPage';
import type { Props } from '@theme/MDXPage';
import React from 'react';


export default (props: Props): JSX.Element => <Context.Provider value={props.content.frontMatter}>
	<MDXPage {...props} />
</Context.Provider>;
