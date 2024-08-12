export const layerErrorHandler = (layout: string, error: any) => {
	if (error instanceof Error) {
		throw new Error(`${layout} error: ${error.message}`);
	} else {
		throw new Error(`Unknown error: ${error.message}`);
	}
};
