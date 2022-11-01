const main = require('../callbacks')

describe('Callbacks', () => {
    describe('Callbacks - validateUser', () => {

        it('validateUser is valid', () => {

            const callbackSpy = jest.fn();
            const user = { name: 'dsihfkjdsahfalkjsdhf', age: 'asdhaskjdha' };

            main.validateUser(user, callbackSpy);

            expect(callbackSpy).toHaveBeenCalledWith(false, user);
        });

        it('validateUser invalid age', () => {
            const user = { name: 'dsihfkjdsahfalkjsdhf' };
            const callbackSpy = jest.fn();

            main.validateUser(user, callbackSpy);

            expect(callbackSpy).toHaveBeenCalledWith(new Error('dados inválidos'));
        });

        it('validateUser invalid name', () => {
            const callbackSpy = jest.fn();
            const user = { age: 'asdhaskjdha' };

            main.validateUser(user, callbackSpy);

            expect(callbackSpy).toHaveBeenCalledWith(new Error('dados inválidos'));
        });
    })
    describe('Callbacks - writeFileCallback', () => {

        it('writeFileCallback valid', () => {
            const fsAppendFileSyncSpy = jest.spyOn(require('fs'), 'appendFileSync');
            const user = { name: 'dsihfkjdsahfalkjsdhf', age: 'asdhaskjdha' };

            main.writeFileCallback(false, user);

            expect(fsAppendFileSyncSpy).toHaveBeenCalledWith('users.txt', JSON.stringify(user));
        });

        it('writeFileCallback with error', () => {
            const fsAppendFileSyncSpy = jest.spyOn(require('fs'), 'appendFileSync');
            const error = new Error('dados inválidos')
            main.writeFileCallback(error);

            expect(fsAppendFileSyncSpy).toHaveBeenCalledWith('log.txt', error.message + '\n');
        });
    })

});
