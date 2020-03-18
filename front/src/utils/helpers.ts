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

export const similarityWordSearch = (str: string, chunk: string): Array<string> | boolean => {
	const regExp: RegExp = new RegExp(`(${chunk})`);
	const isSimilar: boolean = str.includes(chunk);
	let leftSideAfterSlice: string = "",
		rightSideAfterSlice: string = "";

	if (isSimilar) {
		const sliceStr: string = str.replace(regExp, " ");
		let newStr: string = "";

		for (let i = 0; i < sliceStr.length; i++) {
			if (sliceStr[i] === " ") {
				leftSideAfterSlice += newStr;
				newStr = "";
			} else newStr += sliceStr[i]
		}
		
		rightSideAfterSlice += newStr;
		return [leftSideAfterSlice, chunk, rightSideAfterSlice];
	}
	return false;
}