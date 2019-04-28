import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";

const { JSDOM } = jsdom;

describe("Our first test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });

  it("should test index.html", done => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    const { window } = new JSDOM(index);
    const h1 = window.document.getElementsByTagName("h1")[0];
    expect(h1.innerHTML).to.equal("Hello World!");
    done();
    window.close();
  });
});
