import fs from 'node:fs/promises';

import { getPlaiceholder } from 'plaiceholder';

export default async function getBase64(imgPath: string) {
	try {
		const file = await fs.readFile(imgPath);
		const { base64 } = await getPlaiceholder(file);
		return base64;
	} catch (error: unknown) {
		// error handling
		if (error instanceof Error) return error.message;
		if (error && typeof error === 'object' && 'message' in error)
			return error.message as string;
		if (typeof error === 'string') return error;
		return 'Unexpected error!';
	}
}
