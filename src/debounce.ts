/**
 * @author WMXPY
 * @namespace Throttle
 * @description Debounce
 */

import { ExecuteFunction } from "./declare";

export class Debounce<Args extends any[]> {

    public static create<Args extends any[] = []>(func: ExecuteFunction<Args>, delay: number): Debounce<Args> {

        return new Debounce(func, delay);
    }

    private readonly _func: ExecuteFunction<Args>;
    private readonly _delay: number;

    private _timer?: any;

    private constructor(func: ExecuteFunction<Args>, delay: number) {

        this._func = func;
        this._delay = delay;
    }

    public execute(...args: Args): void {

        this.reset();
        this._timer = setTimeout(async () => {
            await Promise.resolve(this._func(...args));
        }, this._delay);
    }

    public reset(): this {

        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = undefined;
        }
        return this;
    }
}
