/**
 * @author WMXPY
 * @namespace Throttle
 * @description Debounce
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { Debounce } from "../../src";

describe('Given {Debounce} Class', (): void => {

    const chance: Chance.Chance = new Chance('throttle-debounce');

    it('should be able to construct', (): void => {

        const instance: Debounce = Debounce.create();
        expect(instance).to.be.instanceOf(Debounce);
    });
});
