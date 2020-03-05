import { ILanguageRepository } from "./interfaces";
import { GetStore } from "../redux/store";

import * as languages from "./languageVariants/exportLanguages";

class LanguageRepository implements ILanguageRepository {
	getCurrentLanguage(): string {
		const { language } = GetStore().getState().commonReducer;
		return language;
	}

	translate(sentense: string): string {
		const currentLanguage: string = this.getCurrentLanguage();
		const translatedSentense = (languages as any)[currentLanguage][sentense];
		
		if(translatedSentense) return translatedSentense;
		else return sentense;
	}
}

export default LanguageRepository;