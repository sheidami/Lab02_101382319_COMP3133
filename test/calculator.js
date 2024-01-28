const Calculator = require('../app/calculator');
const assert = require('assert')


describe('Validating Calculator Functionality', () => {
    
    //Add - success
    it('should return 7 when value is 5 + 2', () => {
        assert.equal(Calculator.add(5, 2), 7)
    })
    //Add - fail
    it('should return 7 when value is 5 + 2 -> wrong answer passed, expect failure', () => {
        assert.equal(Calculator.add(5, 2), 8)
    })

    //Sub - success
    it('should return 3 when value is 5 - 2', () => {
        assert.equal(Calculator.sub(5, 2), 3)
    })
    //Sub - fail
    it('should return 3 when value is 5 - 2 -> wrong answer passed, expect failure', () => {
        assert.equal(Calculator.sub(5, 2), 5)
    })

    //Mul - success
    it('should return 10 when value is 5 * 2', () => {
        assert.equal(Calculator.mul(5, 2), 10)
    })
    //Mul- fail
    it('should return 10 when value is 5 * 2 -> wrong answer passed, expect failure', () => {
        assert.equal(Calculator.mul(5, 2), 12)
    })

    //Div - success
    it('should return 5 when value 10 is divided by 2', () => {
        assert.equal(Calculator.div(10, 2), 5)
    })
    //Div - fail
    it('should return 5 when value 10 is divided by 2 -> wrong answer passed, expect failure', () => {
        assert.equal(Calculator.div(10, 2), 2)
    })

})
