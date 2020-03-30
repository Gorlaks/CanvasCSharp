import "reflect-metadata";
import { similarityWordSearchWithHighlighting } from "../utils/helpers";

describe("Tests: helpers", () => {
	it("Test: function for searching by name and highlighting", () => {
		const str: string = "Gorlaks",
			search: string = "orl";
		const necessaryResult: Array<string> = ["G", "orl", "aks"];
		const result: Array<string> = similarityWordSearchWithHighlighting(str, search);

		expect(result).toEqual(necessaryResult);
	})
})