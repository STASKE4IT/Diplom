// test.ts

// Импортируем интерфейс Job из файла types.ts
import { Job } from './types';

// Создаем пример данных о вакансии
const jobData: Job = {
  id: 1,
  name: 'Software Engineer',
  company: {
    name: 'Example Company'
  },
  locations: [
    { name: 'New York' },
    { name: 'San Francisco' }
  ]
};

// Выводим данные о вакансии в консоль
console.log('Job Title:', jobData.name);
console.log('Company:', jobData.company.name);
console.log('Locations:', jobData.locations.map(location => location.name).join(', '));