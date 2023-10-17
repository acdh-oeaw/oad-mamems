import en from "./locales/en.json";
import de from "./locales/de.json";
import { discoveryConfig } from "./config/discoveryConfig";
import configJson from "./config/discoveryConfig.json";

let config: discoveryConfig = configJson as discoveryConfig;
config = { ...config };

export default defineI18nConfig(() => {
	return {
		legacy: false,
		allowComposition: true,
		globalInjection: true,
		locale: config.defaultLocale,
		fallbackLocale: config.defaultLocale,
		messages: {
			en,
			de,
		},
	};
});
