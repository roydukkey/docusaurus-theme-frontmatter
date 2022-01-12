// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import type { Plugin } from '@docusaurus/types';
import path from 'path';


export default (): Plugin => ({

	name: 'docusaurus-theme-frontmatter',

	getThemePath (): string {
		return path.resolve(__dirname, './theme');
	},

	getTypeScriptThemePath (): string {
		return path.resolve(__dirname, '..', 'src', 'theme');
	}

});
