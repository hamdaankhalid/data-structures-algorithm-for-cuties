/**
 * The knows API is defined in the parent class Relation.
 * knows(a: number, b: number): boolean {
 *     ...
 * };
 */

var solution = function(knows: any) {
    return function(n: number): number {
        return new Solution(knows).solve(n);
    };
};

class Solution {
    private api: any;

    constructor (knows: any) {
        this.api = knows;
    }

    solve(n: number) {
        // from n, find the i that knows nobody but everybody knows that i.
        const iKnowsWho = {};
        const knowsNoBody = new Set();
        for (let i = 0; i < n; i++) { 
            knowsNoBody.add(i);
            iKnowsWho[i] = []
        }
        
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i === j) {
                    iKnowsWho[i].push(i);
                    continue
                }
                
                if (!this.api(i, j)) {
                    continue;
                }
                
                knowsNoBody.delete(i);

                if (i in iKnowsWho) {
                    iKnowsWho[i].push(j)
                }
            }
        }
        
        if (knowsNoBody.size === 0) {
            return -1;
        }
        
        const celebs = [];
        //console.log(iKnowsWho, knowsNoBody);

        const whoKnowsWho: number[][] = Array.from(Object.values(iKnowsWho)) as number[][];
        //console.log(whoKnowsWho);
        knowsNoBody.forEach((potential) => {
            const everbodyKnowsPotential = whoKnowsWho.every((i) => i.includes(potential as number));
           
            if (everbodyKnowsPotential) {
                celebs.push(potential);
            }
        });
        return celebs[0] === undefined ? -1 : celebs[0];
    }
}