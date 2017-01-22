(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 120,
	height: 190,
	fps: 24,
	color: "#000000",
	manifest: []
};



// symbols:



(lib.Tween2b = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ACCCRIgEAJIhzAMQglAEgygEQgygDg8gHQg8gIAHhHQgVg0gUhAQgUhCAEgGQAMgWAQgjQAPgjA8ATQhAAFAdBVIAsC3QBWAWBVABQAOABCRgGQAMgcgHgiIAQBGIAaAUIBpgOIgqA3IhNAPg");
	this.shape.setTransform(6.4,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACJCMIgQhFIA3gVIAgAWIgrAWIAQASIBCgEIAVAmIhpAOgAgrCKQhVgChWgWIgsi3QgdhVBAgEQAdgGAFAqIAsChQBCAGBWAEQBDAFAvARQAHAigMAcQiDAFgZAAIgDAAg");
	this.shape_1.setTransform(9.4,-2.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.4,-19.5,59.7,38.4);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADJCLIgQhFQAHAigMAcQizAGjDgzIhohxQg+hcA3goQAgACAcAhIB4CHQDDARBzApIA3gVIAgAWIgrAWIAQASIBCgEIAVAmIhpAOg");
	this.shape.setTransform(3,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("ADCCNIgEAJQhTAFhDgBQhCgChqgYQhrgYhOhwQhOhyA+gsQAegWAcACQg4AoA/BcIBoBxQDDAzCzgGQAMgdgHghIAQBFIAaAUIBpgOIgqA4IhNAPg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.2,-18.8,72.5,37.6);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRD/QAPgbADgTIAShQIgRAAIA9ifQABgtgggmIiXi7QgrgsghAhQBLhPBMAtQBKAtBRBeQBRBegsBjIhNDkIBlBCQAbAZgDAhQgZgIgeAfQhmhMg4gfg");
	this.shape.setTransform(2,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AB8FoQgsgphfgTQhigVBXjPQgbgTAuh7QkqipCChrQAhghArAsICXC7QAgAmgBAsIg9CgIARAAIgSBQQgFATgPAaQA6AfBmBNQAeggAZAJQgBA5hFAAIgWgBg");
	this.shape_1.setTransform(0,1.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.6,-38,43.3,76.1);


(lib.astronaut_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(-20.5,60.2,1,1,0,0,0,-30.2,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-25,x:-20,y:62.1},24).to({rotation:0,x:-20.5,y:60.2},25).wait(1));

	// Layer 4
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(-8.4,104.7,1,1,0,0,0,-14,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-14.1,regY:-26.6,rotation:15.8,x:-11.2,y:105.9},24).to({regX:-14,regY:-26.5,rotation:0,x:-8.4,y:104.7},25).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AByFjIh9AAQhKgDgggQQgggPgVgqQgVgqgMhDIgbiTQgRhfgDhjQgEhjBbg9IALgHQDRBvCMh/QAoB+lLgIQhNAFAHBQQAhCyAdBcIAFAOQALAuAaAeQBRBeDnguQgUBihtAAIgJAAg");
	this.shape.setTransform(-1.5,77.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhyD6QgagegLgtIgFgPQgdhcghixQgIhQBOgFQFLAIgoh/IBNA4IgXIsQhLAPg8AAQh5AAg3hAg");
	this.shape_1.setTransform(4,73.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(50));

	// Layer 3
	this.instance_2 = new lib.Tween2b("synched",0);
	this.instance_2.setTransform(22,52.2,1,1,-25.5,0,0,-15.2,-14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:1.8,x:22.1,y:52.3},24).to({rotation:-25.5,x:22,y:52.2},25).wait(1));

	// Layer 4
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(13.6,102.2,1,1,-3.3,0,0,-14,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-24,x:12,y:104.7},24).to({rotation:-3.3,x:13.6,y:102.2},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,42,106.3,127.3);


// stage content:



(lib.astronaut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.astronaut_1();
	this.instance.setTransform(36.6,31.2,1,1,7.2,0,0,0.1,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:24.9,rotation:0.1},39).to({regY:25,rotation:7.2},80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59,134.8,115.1,138);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;