// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import { Context } from '@theme/useFrontMatter';
import DocItem from '@theme-init/DocItem';
import type { Props } from '@theme/DocItem';
import React from 'react';


export default (props: Props): JSX.Element => <Context.Provider value={props.content.frontMatter}>
	<DocItem {...props} />
</Context.Provider>;
