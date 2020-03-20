import { ILanguageRepository } from "./interfaces";
import { GetStore } from "../redux/store";

import * as languages from "./languageVariants/exportLanguages";

class LanguageRepository implements ILanguageRepository {
	getCurrentLanguage(): string {
		const { language } = GetStore().getState().commonReducer;
		return language;
	}

	/** @description Check for current language and take current word in current language. */
	translate(sentense: string): string {
		const currentLanguage: string = this.getCurrentLanguage();
		const translatedSentense = (languages as any)[currentLanguage][sentense];
		
		/** @description Return word from parament if it doesn't have current word in current language. */
		if(translatedSentense) return translatedSentense;
		else return sentense;
	}
}

export default LanguageRepository;