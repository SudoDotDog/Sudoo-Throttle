/**
 * @author WMXPY
 * @namespace Throttle
 * @description Debounce
 */

import { ExecuteFunction } from "./declare";

export class Debounce {

    public static create(func: ExecuteFunction, delay: number): Debounce {

        return new Debounce(func, delay);
    }

    private readonly _func: ExecuteFunction;
    private readonly _delay: number;

    private _timer?: any;

    private constructor(func: ExecuteFunction, delay: number) {

        this._func = func;
        this._delay = delay;
    }

    public execute(): void {

        this.cancel();
        this._timer = setTimeout(async () => {
            await Promise.resolve(this._func());
        }, this._delay);
    }

    public cancel(): this {

        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = undefined;
        }
        return this;
    }
}
