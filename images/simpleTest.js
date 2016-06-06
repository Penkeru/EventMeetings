var simpleTest =(function(){
    var total=0;
    var failed=0;
    var assert={
        equal: function(result, expected){
            total++;
            if (result !== expected) {
                failed++;
                console.error("Expected " + expected + ", but was " + result);
            }
        }
    };

    function test(testName,assertsCB){
        console.log("********* test " + testName + " start!**********");
        assertsCB(assert);
        console.log("********* test completed ************");
        var msg = failed===0 ? "Congratulations all "+total+" tests passed!!!" : failed + " of "+ total + " tests failed!";
        console.error(msg);
    }

    return {
        test:test
    };
})();

