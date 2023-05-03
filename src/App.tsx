import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
		supportedLngs: ['en', 'kk', 'ru'],
		fallbackLng: 'en',
		detection: {
			order: [
				'path',
				'cookie',
				'htmlTag',
				'querystring',
				'localStorage',
				'sessionStorage',
				'navigator',
				'subdomain',
			],
			caches: ['cookie'],
		},
		backend: { loadPath: 'src/assets/locales/{{lng}}/translation.json' },
	});

function App() {
	const { t } = useTranslation();

	return <h2>{t('greetings')}</h2>;
}

export { App };
