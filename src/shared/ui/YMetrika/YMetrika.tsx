'use client';

import { YMInitializer } from 'react-yandex-metrika';

export const YMetrika = (): JSX.Element => {
	return <YMInitializer accounts={[12345678]} options={{ webvisor: true }} version="2" />;
};