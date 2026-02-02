import {describe, it , except} from 'vitest';
import { sum } from "../src/sum.js";

describe('sum', ()=>{
    it('add two numbers', ()=>{
        except(sum(2,3).toBe(5));
    })
})