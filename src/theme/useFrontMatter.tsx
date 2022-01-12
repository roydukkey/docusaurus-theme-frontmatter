// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import type { FrontMatter } from '@theme/useFrontMatter';
import { createContext, useContext } from 'react';


export const Context = createContext<FrontMatter | null>(null);


export default <T extends FrontMatter>(): T => {
	const frontMatter = useContext(Context) as T | null;

	if (frontMatter === null) {
		throw new TypeError('No front matter context.');
	}

	return frontMatter;
};
