import { container } from "tsyringe";
import { ILanguageRepository } from "../modules/common/language/interfaces";

export const LS = (sentense: string): string => {
	const languageRepository: ILanguageRepository = container.resolve("languageRepository");
	return languageRepository.translate(sentense);
}