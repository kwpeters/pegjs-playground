import * as path from "path";
import * as fs from "fs";
import * as pegjs from "pegjs";

const grammarFile = path.join(__dirname, "pegGrammar.peg");
const pegGrammar = fs.readFileSync(grammarFile, "utf8");

const parser = pegjs.generate(pegGrammar, {output: "parser"});
const input = 'b.d.e = "foo"';
try {
    const result = parser.parse(input);
    console.log("Parse succeeded.");
    console.log(result);
}
catch (err) {
    console.error("Parse failed.");
    console.error(err);
}
