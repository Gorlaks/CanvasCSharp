import { container } from "tsyringe";
import { ILanguageRepository } from "../modules/common/language/interfaces";

export const LS = (sentense: string): string => {
	const languageRepository: ILanguageRepository = container.resolve("languageRepository");
	return languageRepository.translate(sentense);
}

export const newStrokeInTextArea = (e: any) => {
	if (e.charCode === 13) {
		e.target.rows += 1;
	}
}

export const resizeContainer = (e: any) => {
	if (e.target.scrollTop > 0) {
		e.target.style.height = e.target.scrollHeight + "px";
	}
}