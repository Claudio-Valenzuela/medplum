// src/medplumClient.ts
import { MedplumClient } from '@medplum/core';
import { getConfig } from './config';

// Creamos la instancia pero no la inicializamos aún
// Esto nos permite importarla en cualquier lugar
export const medplum = new MedplumClient({
    baseUrl: getConfig().baseUrl,
    clientId: getConfig().clientId,
    storagePrefix: '@medplum:',
    cacheTime: 60000,
    autoBatchTime: 100,
});