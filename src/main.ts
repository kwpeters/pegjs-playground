import * as path from "path";
import * as fs from "fs";
import * as pegjs from "pegjs";

const grammarFile = path.join(__dirname, "predicateGrammar.peg");
const pegGrammar = fs.readFileSync(grammarFile, "utf8");

const parser = pegjs.generate(pegGrammar, {output: "parser"});
const options = {
    evalContext: {
        a: 1,
        b: {
            d: {
                e: 5
            }
        },
        c: 2
    }
};

try {
    const result = parser.parse('a <= 0', options);
    console.log("Parse succeeded.");
    console.log(result);
}
catch (err) {
    console.error("Parse failed.");
    console.error(err);
}
