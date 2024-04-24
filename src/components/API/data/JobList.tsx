// Импорт интерфейса для типизации данных о вакансиях
import { Job } from './types';



const fetchJobs = async () => {
  const apiKey = 'aa804458cd6f72e3de282e502a235bbc9170ff8d26c816720382bcfd2cceac9b';
  const apiUrl = 'https://www.themuse.com/api/public/v2/jobs';

  try {
    // Отправка запроса к API
    const response = await fetch(apiUrl, {
      headers: {
        'X-Muse-Api-Key': apiKey
      }
    });

    // Проверка статуса ответа
    if (!response.ok) {
      throw new Error('Ошибка при выполнении запроса');
    }

    // Преобразование ответа в формат JSON и получение данных
    const data: { results: Job[] } = await response.json();

    // Обработка полученных данных
    data.results.forEach(job => {
      console.log(`Job Title: ${job.name}`);
      console.log(`Company: ${job.company.name}`);
      console.log('----------------------');
    });
  } catch (error) {
    // Обработка ошибок при запросе
    console.error('Ошибка при выполнении запроса:', error);
  }
};

// Вызов функции для выполнения запроса
fetchJobs();