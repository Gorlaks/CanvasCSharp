import React from "react";
import "reflect-metadata";

import { similarityWordSearch } from "../utils/helpers";

describe("Tests: helpers", () => {
	it("Test: function for searching by name", () => {
    const str: string = "Gorlaks",
          search: string = "orl";
    const necessaryResult: Array<string> = ["G", "orl", "aks"];
    const result: Array<string> | boolean = similarityWordSearch(str, search);

    expect(result).toEqual(necessaryResult);
	})
})