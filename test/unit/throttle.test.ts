/**
 * @author WMXPY
 * @namespace Throttle
 * @description Throttle
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { Throttle } from "../../src";

describe('Given {Throttle} Class', (): void => {

    const chance: Chance.Chance = new Chance('throttle-throttle');

    it('should be able to construct', (): void => {

        const instance: Throttle = Throttle.create();
        expect(instance).to.be.instanceOf(Throttle);
    });
});
