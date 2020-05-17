import { container } from 'tsyringe';

import ISotorageProvider from './StorageProvider/models/ISotorageProvider';
import DisckStorageProvider from './StorageProvider/implementations/DisckStorageProvider';

container.registerSingleton<ISotorageProvider>(
  'StorageProvider',
  DisckStorageProvider,
);
