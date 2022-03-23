/* eslint-disable no-var */
// https://stackoverflow.com/questions/38906359/create-a-global-variable-in-typescript
import { PageData } from "../index";

declare global {
  var cleanedDoc: cheerio.Root;
  var doc: cheerio.Root;
  var lazyPageData: PageData;
  var topNode: cheerio.Cheerio;
}
