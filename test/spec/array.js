(function () {

    "use strict";

    describe("laces array models", function () {

        /* global LacesArray */

        var array,
            event,
            storeEvent = function(e) { event = e; };

        beforeEach(function() {
            array = new LacesArray([1, 2, 3]);
        });

        it("supports add", function() {
            array.bind("add", storeEvent);
            array.push(4);

            assert.deepEqual(array, [1, 2, 3, 4]);

            assert.deepEqual(event, {
                elements: [4],
                name: "add"
            });
        });

        it("supports remove", function() {
            array.bind("remove", storeEvent);
            array.remove(2);

            assert.deepEqual(array, [1, 2]);

            assert.deepEqual(event, {
                elements: [3],
                name: "remove"
            });
        });
    });
})();