simpleTest.test("Images",function(assert){
    var images = new Images();

    var image1 = {name:"image1"};
    assert.equal(images.get(image1).length,0);

    images.add(image1);
    assert.equal(images.get(image1).length,1);

    var image2 = {name:"image2"};
    var image3 = {name:"image2", style:{height:"18px", width:"20px"}};
    images.add(image2);
    images.add(image3);
    assert.equal(images.get({name:"image2"}).length,2);
    assert.equal(images.get(image3).length,1);

    images.add({name:"image2"});
    assert.equal(images.get({name:"image2"}).length,3);

    var image4 = {name:"image2", url:"one.com"};
    images.add(image4);
    assert.equal(images.get({url:"one.com"}).length,1);

    assert.equal(images.get(image4).length,1);
    images.update(image1,  {name:"image1", url:"one.com"});
    assert.equal(images.get({name:"image1"}).length,1);
    assert.equal(images.get({name:"image1", url:"one.com"}).length,1);
    assert.equal(images.get({url:"one.com"}).length,2);

    images.update(image1,  {name:"image2"});
    assert.equal(images.get({name:"image2"}).length,5);
    assert.equal(images.get({name:"image1"}).length,0);

    images.update({name:"image55"},  {name:"image2"});
    assert.equal(images.get({name:"image2"}).length,5);

    var image5 = {name:"image5", url:"two.com", style:{height:"50px", width:"50px"}};
    var image6 = {name:"image6", url:"three.com", style:{height:"100px", width:"50px"}};
    var image7 = {name:"image7", url:"two.com", style:{height:"20px", width:"50px"}};
    var image8 = {name:"image8", url:"two.com", style:{height:"20px", width:"50px"}};
    var image9 = {name:"image6", url:"two.com", style:{height:"10px", width:"50px"}};
    images.add(image5);
    images.add(image6);
    images.add(image7);
    images.add(image8);

    images.delete({name:"image5"});
    images.delete({url:"two.com", style:{height:"20px"}});
    assert.equal(images.get(image8).length,0);

    images.update(image6, {url:"two.com", style:{height:"10px"}});
    assert.equal(images.get(image9).length,1);

});