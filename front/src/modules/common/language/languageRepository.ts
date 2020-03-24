import commonStatesStorage from "../../../initialize/statesStorages/commonStatesStorage";
import * as languages from "./languageVariants/exportLanguages";
import { ILanguageRepository } from "./interfaces";

class LanguageRepository implements ILanguageRepository {
	getCurrentLanguage(): string {
		const language = commonStatesStorage.getState<string>("language");
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