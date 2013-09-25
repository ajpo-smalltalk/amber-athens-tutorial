define("athens-tutorial/Athens-HTML-Tutorial", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "amber_core/Canvas"], function(smalltalk,nil,_st){
smalltalk.addPackage('Athens-HTML-Tutorial');
smalltalk.packages["Athens-HTML-Tutorial"].transport = {"type":"amd","amdNamespace":"athens-tutorial"};

smalltalk.addClass('AthensTigerShape', smalltalk.Object, ['paint', 'path', 'fillRule', 'fill', 'capStyle', 'joinStyle', 'miterLimit', 'strokeWidth', 'strokePaint', 'fillPaint', 'stroke'], 'Athens-HTML-Tutorial');
smalltalk.addMethod(
smalltalk.method({
selector: "addFill",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fill"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"addFill",{},smalltalk.AthensTigerShape)})},
args: [],
source: "addFill\x0a\x09fill := true.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "addStroke",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@stroke"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"addStroke",{},smalltalk.AthensTigerShape)})},
args: [],
source: "addStroke\x0a\x09stroke := true.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "capStyle:",
category: 'not yet classified',
fn: function (cap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@capStyle"]=cap;
return self}, function($ctx1) {$ctx1.fill(self,"capStyle:",{cap:cap},smalltalk.AthensTigerShape)})},
args: ["cap"],
source: "capStyle: cap\x0a\x09capStyle := cap.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPaint:",
category: 'not yet classified',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fillPaint"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"fillPaint:",{aColor:aColor},smalltalk.AthensTigerShape)})},
args: ["aColor"],
source: "fillPaint: aColor \x0a\x09fillPaint := aColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRule",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@fillRule"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"fillRule",{},smalltalk.AthensTigerShape)})},
args: [],
source: "fillRule\x0a\x09^ fillRule",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRule:",
category: 'not yet classified',
fn: function (rule){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fillRule"]=rule;
return self}, function($ctx1) {$ctx1.fill(self,"fillRule:",{rule:rule},smalltalk.AthensTigerShape)})},
args: ["rule"],
source: "fillRule: rule \x0a\x09fillRule := rule.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@stroke"]=false;
self["@fill"]=self["@stroke"];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensTigerShape)})},
args: [],
source: "initialize \x0a\x09fill := stroke := false.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "joinStyle:",
category: 'not yet classified',
fn: function (join){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@joinStyle"]=join;
return self}, function($ctx1) {$ctx1.fill(self,"joinStyle:",{join:join},smalltalk.AthensTigerShape)})},
args: ["join"],
source: "joinStyle: join\x0a\x09joinStyle := join.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "miterLimit:",
category: 'not yet classified',
fn: function (lim){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@miterLimit"]=lim;
return self}, function($ctx1) {$ctx1.fill(self,"miterLimit:",{lim:lim},smalltalk.AthensTigerShape)})},
args: ["lim"],
source: "miterLimit: lim\x0a\x09miterLimit := lim.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareFor:",
category: 'not yet classified',
fn: function (surface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@fill"];
if(smalltalk.assert($1)){
self["@fillPaint"]=_st(surface)._createSolidColorPaint_(self["@fillPaint"]);
self["@fillPaint"];
};
$2=self["@stroke"];
if(smalltalk.assert($2)){
self["@strokePaint"]=_st(surface)._createStrokePaintFor_(_st(surface)._createSolidColorPaint_(self["@strokePaint"]));
self["@strokePaint"];
};
return self}, function($ctx1) {$ctx1.fill(self,"prepareFor:",{surface:surface},smalltalk.AthensTigerShape)})},
args: ["surface"],
source: "prepareFor: surface\x0a\x09fill ifTrue: [\x0a\x09\x09fillPaint := surface createSolidColorPaint: fillPaint.\x0a\x09].\x0a\x0a\x09stroke ifTrue: [\x0a\x09\x09strokePaint := \x0a\x09\x09\x09surface createStrokePaintFor: (surface createSolidColorPaint: strokePaint).\x0a\x09].\x0a\x0a\x09",
messageSends: ["ifTrue:", "createSolidColorPaint:", "createStrokePaintFor:"],
referencedClasses: []
}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (can){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@fill"];
if(smalltalk.assert($1)){
_st(can)._setPaint_(self["@fillPaint"]);
_st(can)._drawShape_(self["@path"]);
};
$2=self["@stroke"];
if(smalltalk.assert($2)){
_st(can)._setStrokePaint_(self["@strokePaint"]);
_st(can)._drawShape_(self["@path"]);
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{can:can},smalltalk.AthensTigerShape)})},
args: ["can"],
source: "renderOn: can\x0a\x0a\x09fill ifTrue: [ \x0a\x09\x09can setPaint: fillPaint.\x0a\x09\x09can drawShape: path.\x09\x0a\x09].\x0a\x0a\x09stroke ifTrue: [\x0a\x09\x09can setStrokePaint: strokePaint.\x09\x0a\x09\x09can drawShape: path.\x09\x0a\x09]",
messageSends: ["ifTrue:", "setPaint:", "drawShape:", "setStrokePaint:"],
referencedClasses: []
}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "setPath:",
category: 'not yet classified',
fn: function (anAthensCairoPath){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@path"]=anAthensCairoPath;
return self}, function($ctx1) {$ctx1.fill(self,"setPath:",{anAthensCairoPath:anAthensCairoPath},smalltalk.AthensTigerShape)})},
args: ["anAthensCairoPath"],
source: "setPath: anAthensCairoPath\x0a\x09path := anAthensCairoPath.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "strokePaint:",
category: 'not yet classified',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@strokePaint"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"strokePaint:",{aColor:aColor},smalltalk.AthensTigerShape)})},
args: ["aColor"],
source: "strokePaint: aColor \x0a\x09strokePaint := aColor.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "strokeWidth:",
category: 'not yet classified',
fn: function (w){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@strokeWidth"]=w;
return self}, function($ctx1) {$ctx1.fill(self,"strokeWidth:",{w:w},smalltalk.AthensTigerShape)})},
args: ["w"],
source: "strokeWidth: w\x0a\x09strokeWidth := w.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTigerShape);



smalltalk.addClass('AthensTutorial', smalltalk.Object, ['surface'], 'Athens-HTML-Tutorial');
smalltalk.addMethod(
smalltalk.method({
selector: "step1",
category: 'steps',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"step1",{},smalltalk.AthensTutorial)})},
args: [],
source: "step1\x0a\x09\x22Step 1: Get Athens into your image. Does not apply for Athens-HTML.\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step10",
category: 'steps',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self["@surface"])._drawDuring_((function(canvas){
var m;
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(canvas)._setShape_(_st((0).__at((0)))._corner_((100).__at((100))));
_st(canvas)._setPaint_(_st($Color())._blue());
$1=_st($AthensAffineTransform())._new();
_st($1)._scaleBy_((4));
_st($1)._translateByX_Y_((50),(50));
_st($1)._rotateByDegrees_((35));
_st($1)._translateByX_Y_((-50),(-50));
$2=_st($1)._yourself();
m=$2;
m;
_st(_st(canvas)._pathTransform())._loadAffineTransform_(m);
_st(canvas)._draw();
_st(_st(canvas)._pathTransform())._loadIdentity();
_st(canvas)._setPaint_(_st($Color())._yellow());
_st(canvas)._draw();
$3=_st(canvas)._pathTransform();
_st($3)._loadAffineTransform_(m);
$4=_st($3)._translateByX_Y_((2),(2));
$4;
_st(canvas)._setPaint_(_st(_st($Color())._gray())._alpha_((0.8)));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas,m:m},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step10",{},smalltalk.AthensTutorial)})},
args: [],
source: "step10\x0a\x09\x22Step 10: Loading matrix/using identity matrix.\x22\x0a\x0a\x09surface drawDuring: [ :canvas | | m |\x0a\x09\x09surface clear: Color gray. \x0a\x0a\x09\x09canvas setShape: (0@0 corner: 100@100).\x0a\x09\x09canvas setPaint: (Color blue).\x0a\x0a\x09\x09m := AthensAffineTransform new\x0a\x09\x09\x09scaleBy: 4;\x0a\x09\x09\x09translateByX: 50 Y: 50;\x0a\x09\x09\x09rotateByDegrees: 35;\x0a\x09\x09\x09translateByX: -50 Y: -50;\x0a\x09\x09\x09yourself.\x0a\x09\x0a\x09\x09\x22loading a transformation\x22\x0a\x09\x09canvas pathTransform loadAffineTransform: m.\x09\x0a\x09\x09\x0a\x09\x09canvas draw.\x0a\x0a\x0a\x09\x09\x22The following statement resets coordinate transformation to match surface's coordinate space\x22\x0a\x09\x09canvas pathTransform loadIdentity.\x0a\x09\x0a\x09\x09canvas setPaint: (Color yellow).\x0a\x09\x09canvas draw.\x0a\x0a\x09\x09canvas pathTransform \x0a\x09\x09\x09\x22Now load the matrix back\x22\x0a\x09\x09\x09loadAffineTransform: m;\x0a\x09\x09\x09\x22Offset it a bit\x22\x0a\x09\x09\x09translateByX: 2 Y: 2.\x0a\x09\x09\x0a\x09\x09canvas setPaint: (Color gray alpha: 0.8).\x0a\x0a\x09\x09canvas draw ].",
messageSends: ["drawDuring:", "clear:", "gray", "setShape:", "corner:", "@", "setPaint:", "blue", "scaleBy:", "new", "translateByX:Y:", "rotateByDegrees:", "yourself", "loadAffineTransform:", "pathTransform", "draw", "loadIdentity", "yellow", "alpha:"],
referencedClasses: ["Color", "AthensAffineTransform"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step11",
category: 'steps',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"step11",{},smalltalk.AthensTutorial)})},
args: [],
source: "step11\x0a\x22Step 11: Some important aspects of transforms:\x0a\x0a\x0a  * the transformation matrix is not accessible for direct manipulation,\x0a\x09instead you can only modify the current transformation, by using different manipulation methods \x0a\x0a  * remember that the order of transformation is important, e.g. translate then scale is not the same than\x0a\x09scale then translate, even if you using very same values.\x0a\x0a  * all transformations are conform to AthensTransform protocol. (we're not covering full protocol in this tutorial)\x0a\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step12",
category: 'steps',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self["@surface"])._drawDuring_((function(canvas){
var path;
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(_st(canvas)._pathTransform())._translateByX_Y_(_st(_st(self["@surface"])._width()).__slash((2)),_st(_st(self["@surface"])._height()).__slash((2)));
path=_st(canvas)._createPath_((function(builder){
return smalltalk.withContext(function($ctx3) {
$1=builder;
_st($1)._absolute();
_st($1)._lineTo_((-50).__at((-50)));
_st($1)._lineTo_((60).__at((-60)));
_st($1)._lineTo_((150).__at((50)));
$2=_st($1)._lineTo_((0).__at((0)));
return $2;
}, function($ctx3) {$ctx3.fillBlock({builder:builder},$ctx2,2)})}));
path;
_st(canvas)._setShape_(path);
_st(_st(canvas)._setStrokePaint_(_st($Color())._white()))._width_((4));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas,path:path},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step12",{},smalltalk.AthensTutorial)})},
args: [],
source: "step12\x0a\x09\x22Step 12: Building complex shapes using paths.\x0a\x09\x0a\x09So far, we used only rectangles as shapes, now time to create something more interesting.\x22\x0a\x0a\x0a\x09surface drawDuring: [ :canvas | | path |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x0a\x09\x09canvas pathTransform translateByX: surface width/2.0 Y: surface height / 2.0 .\x0a\x09\x0a\x09\x09\x22To create a path, use #createPath: protocol.\x0a\x09\x09The block should accept a single argument, where AthensPathBuilder instance will be passed\x22\x09\x0a\x09\x09path := canvas createPath: [ :builder |\x0a\x09\x09\x09\x0a\x09\x09\x09\x22A simple polygon\x22\x0a\x09\x09\x09builder \x0a\x09\x09\x09\x09absolute;\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x22The path consists from a list of connected segments connected with each other\x22 \x0a\x09\x09\x09\x09lineTo: -50@ -50;\x0a\x09\x09\x09\x09lineTo: 60@ -60;\x0a\x09\x09\x09\x09lineTo: 150@50;\x0a\x09\x09\x09\x09lineTo: 0@0\x0a\x09\x09\x09].\x0a\x09\x0a\x09\x09canvas setShape: path.\x0a\x09\x09\x0a\x09\x09\x22Here we're using stroke paint to show the edges of path (more on stroke paints later)\x22\x0a\x09\x09(canvas setStrokePaint: Color white) width:4.\x0a\x09\x09\x0a\x09\x09\x22If you want to fill the path instead, uncomment the line below\x22\x0a\x09\x09\x22canvas setPaint: Color white.\x22\x0a\x09\x09\x09\x09\x0a\x09\x09canvas draw ].",
messageSends: ["drawDuring:", "clear:", "gray", "translateByX:Y:", "pathTransform", "/", "width", "height", "createPath:", "absolute", "lineTo:", "@", "setShape:", "width:", "setStrokePaint:", "white", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step13",
category: 'steps',
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._absolute();
_st($1)._lineTo_((-50).__at((-50)));
_st($1)._lineTo_((60).__at((-60)));
_st($1)._lineTo_((150).__at((50)));
$2=_st($1)._lineTo_((0).__at((0)));
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1,1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(_st(canvas)._pathTransform())._translateByX_Y_(_st(_st(self["@surface"])._width()).__slash((2)),_st(_st(self["@surface"])._height()).__slash((2)));
_st(canvas)._setShape_(path);
_st(_st(canvas)._setStrokePaint_(_st($Color())._yellow()))._width_((4));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step13",{path:path},smalltalk.AthensTutorial)})},
args: [],
source: "step13\x0a\x09\x22Step 13: Building complex shapes using paths.\x0a\x0a\x09For complex and large paths, building it every time could be ineffective and computationally intensive. \x0a\x09Instead you can use surface factory method (#createPath:) to create a path object\x0a\x09at any point, and use it later, whenever you see fit.\x0a\x0a\x09Note, that since we're not using canvas, it is not necessary to put path creation inside #drawDuring: method.\x22\x0a\x09\x0a\x09| path |\x0a\x09path := surface createPath: [ :builder |\x0a\x09\x09\x09\x0a\x09\x09\x09\x22A simple polygon\x22\x0a\x09\x09builder \x0a\x09\x09\x09absolute;\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x22The path consists from a list of connected segments connected with each other\x22 \x09\x09\x09\x09\x0a\x09\x09\x09lineTo: -50@ -50;\x0a\x09\x09\x09lineTo: 60@ -60;\x0a\x09\x09\x09lineTo: 150@50;\x0a\x09\x09\x09lineTo: 0@0\x0a\x09\x09].\x0a\x0a\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x0a\x09\x09canvas pathTransform translateByX: surface width/2.0 Y: surface height / 2.0 .\x0a\x09\x0a\x09\x09canvas setShape: path.\x0a\x0a\x09\x09(canvas setStrokePaint: Color yellow) width: 4.\x0a\x09\x09\x0a\x09\x09canvas draw\x09].",
messageSends: ["createPath:", "absolute", "lineTo:", "@", "drawDuring:", "clear:", "gray", "translateByX:Y:", "pathTransform", "/", "width", "height", "setShape:", "width:", "setStrokePaint:", "yellow", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step14",
category: 'steps',
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._absolute();
_st($1)._lineTo_((-50).__at((-50)));
_st($1)._curveVia_to_((0).__at((-80)),(50).__at((-50)));
_st($1)._curveVia_and_to_((100).__at((-20)),(-50).__at((20)),(50).__at((50)));
_st($1)._cwArcTo_angle_((50).__at((100)),(45));
$2=_st($1)._ccwArcTo_angle_((-50).__at((100)),(45));
$2;
return _st(builder)._close();
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1,1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
$3=_st(canvas)._pathTransform();
_st($3)._translateByX_Y_(_st(_st(self["@surface"])._width()).__slash((2)),_st(_st(self["@surface"])._height()).__slash((2)));
$4=_st($3)._scaleBy_((2));
$4;
_st(canvas)._setShape_(path);
_st(_st(canvas)._setStrokePaint_(_st($Color())._yellow()))._width_((4));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step14",{path:path},smalltalk.AthensTutorial)})},
args: [],
source: "step14\x0a\x09\x22Step 14: Various path segment types.\x22\x0a\x09\x0a\x09| path |\x0a\x09path := surface createPath: [ :builder |\x0a\x09\x0a\x09\x09builder \x0a\x09\x09\x09absolute;\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x22The path consists from a list of segments connected with each other, e.g.\x0a\x09\x09\x09the starting point of next segment is always an end point of previous one\x22\x0a\x09\x09\x09 \x09\x09\x09\x09\x0a\x09\x09\x09lineTo: -50@ -50;\x0a\x09\x09\x09\x0a\x09\x09\x09\x22quadric Bezier curve\x22\x0a\x09\x09\x09\x0a\x09\x09\x09curveVia: 0@ -80 to: 50@ -50;\x0a\x09\x09\x09\x0a\x09\x09\x09\x22cubic Bezier curve\x22 \x0a\x09\x09\x09\x0a\x09\x09\x09curveVia: 100@ -20 and: -50@20 to: 50@ 50;\x0a\x0a\x09\x09\x09 \x22clockwise arc\x22\x0a\x09\x09\x09\x0a\x09\x09\x09cwArcTo: 50@100 angle: 45; \x0a\x09\x09\x09\x0a\x09\x09\x09\x22counter-clockwise arc\x22\x0a\x0a\x09\x09\x09ccwArcTo: -50@100 angle: 45.\x0a\x09\x09\x09\x0a\x09\x09\x09\x22close segment. Simply connects endpoint of previous segment with path starting point.\x0a\x09\x09\x09Try to comment following line to see the difference\x22 \x0a\x09\x09\x09builder close ].\x0a\x0a\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x0a\x09\x09canvas pathTransform\x0a\x09\x09\x09translateByX: surface width/2.0 Y: surface height / 2.0 ;\x0a\x09\x09\x09scaleBy: 2.\x0a\x09\x0a\x09\x09canvas setShape: path.\x0a\x09\x09\x0a\x09\x09(canvas setStrokePaint: Color yellow) width: 4.\x0a\x09\x09\x0a\x09\x09canvas draw ].",
messageSends: ["createPath:", "absolute", "lineTo:", "@", "curveVia:to:", "curveVia:and:to:", "cwArcTo:angle:", "ccwArcTo:angle:", "close", "drawDuring:", "clear:", "gray", "translateByX:Y:", "pathTransform", "/", "width", "height", "scaleBy:", "setShape:", "width:", "setStrokePaint:", "yellow", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step15",
category: 'steps',
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._absolute();
_st($1)._moveTo_((-50).__at((-50)));
_st($1)._curveVia_to_((0).__at((-80)),(50).__at((-50)));
_st($1)._curveVia_and_to_((100).__at((-20)),(-50).__at((20)),(50).__at((50)));
_st($1)._cwArcTo_angle_((50).__at((100)),(45));
$2=_st($1)._ccwArcTo_angle_((-50).__at((100)),(45));
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1,1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
$3=_st(canvas)._pathTransform();
_st($3)._translateByX_Y_(_st(_st(self["@surface"])._width()).__slash((2)),_st(_st(self["@surface"])._height()).__slash((2)));
$4=_st($3)._scaleBy_((2));
$4;
_st(canvas)._setShape_(path);
_st(_st(canvas)._setStrokePaint_(_st($Color())._yellow()))._width_((4));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step15",{path:path},smalltalk.AthensTutorial)})},
args: [],
source: "step15\x0a\x09\x22Step 15: Path origin and moveTo: segment.\x22\x0a\x09\x0a\x09| path |\x0a\x09path := surface createPath: [ :builder |\x0a\x09\x09\x09\x0a\x09\x09builder \x0a\x09\x09\x09absolute;\x0a\x0a\x09\x09\x09\x22All paths always having same origin, which is (0@0) point.\x0a\x09\x09\x09To use different origin, use #moveTo: as initial command.\x0a\x09\x09\x09Try to change moveTo: parameter to see the difference\x22\x0a\x0a\x09\x09\x09 \x09\x09\x09\x09\x0a\x09\x09\x09moveTo: -50 @ -50;\x0a\x09\x09\x09\x0a\x09\x09\x09\x22quadric Bezier curve\x22\x0a\x09\x09\x09\x0a\x09\x09\x09curveVia: 0 @ -80 to: 50 @ -50;\x0a\x09\x09\x09\x0a\x09\x09\x09\x22cubic Bezier curve\x22 \x0a\x09\x09\x09\x0a\x09\x09\x09curveVia: 100 @ -20 and: -50 @ 20 to: 50 @ 50;\x0a\x0a\x09\x09\x09 \x22clockwise arc\x22 \x0a\x09\x09\x09\x0a\x09\x09\x09cwArcTo: 50 @ 100 angle: 45; \x0a\x09\x09\x09\x0a\x09\x09\x09\x22counter-clockwise arc\x22\x0a\x0a\x09\x09\x09ccwArcTo: -50 @ 100 angle: 45 ].\x0a\x0a\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x0a\x09\x09canvas pathTransform\x0a\x09\x09\x09translateByX: surface width/2.0 Y: surface height / 2.0;\x0a\x09\x09\x09scaleBy: 2.\x0a\x09\x0a\x09\x09canvas setShape: path.\x0a\x09\x09\x0a\x09\x09(canvas setStrokePaint: Color yellow) width: 4.\x0a\x09\x09\x0a\x09\x09canvas draw ].",
messageSends: ["createPath:", "absolute", "moveTo:", "@", "curveVia:to:", "curveVia:and:to:", "cwArcTo:angle:", "ccwArcTo:angle:", "drawDuring:", "clear:", "gray", "translateByX:Y:", "pathTransform", "/", "width", "height", "scaleBy:", "setShape:", "width:", "setStrokePaint:", "yellow", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step16",
category: 'steps',
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._relative();
_st($1)._moveTo_((-50).__at((-50)));
_st($1)._lineTo_((50).__at((0)));
_st($1)._lineTo_((0).__at((50)));
$2=_st($1)._lineTo_((-50).__at((0)));
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1,1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
$3=_st(canvas)._pathTransform();
_st($3)._translateByX_Y_(_st(_st(self["@surface"])._width()).__slash((2)),_st(_st(self["@surface"])._height()).__slash((2)));
$4=_st($3)._scaleBy_((2));
$4;
_st(canvas)._setShape_(path);
_st(_st(canvas)._setStrokePaint_(_st($Color())._yellow()))._width_((4));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step16",{path:path},smalltalk.AthensTutorial)})},
args: [],
source: "step16\x0a\x09\x22Step 16: Absolute versus relative path building mode.\x22\x0a\x09\x0a\x09| path |\x0a\x09path := surface createPath: [ :builder |\x0a\x0a\x09\x09\x22In absolute path building mode, all segment coordinates is absolute (relative to coordinate system origin which is 0@0).\x0a\x09\x0a\x09\x09In relative path building mode, the coordinates of next segment computed relative\x0a\x09\x09to the end point of previous segment\x22\x0a\x09\x09\x09\x0a\x09\x09builder \x0a\x09\x09\x09relative;  \x22actually, relative is default. You can simply delete this line without any effect\x22\x0a\x0a\x09\x09\x09moveTo: -50 @ -50;\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09lineTo: 50 @ 0;\x0a\x09\x09\x09\x0a\x09\x09\x09\x22The building mode can be switched at any moment. \x0a\x09\x09\x09Try to uncomment line below to see the difference\x22\x0a\x09\x09\x09\x22absolute;\x22\x0a\x09\x09\x09\x0a\x09\x09\x09lineTo: 0 @ 50;\x0a\x09\x09\x09lineTo: -50 @ 0 ].\x0a\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x0a\x09\x09canvas pathTransform\x0a\x09\x09\x09translateByX: surface width/2.0 Y: surface height / 2.0;\x0a\x09\x09\x09scaleBy: 2.\x0a\x09\x0a\x09\x09canvas setShape: path.\x0a\x09\x09\x0a\x09\x09(canvas setStrokePaint: Color yellow) width: 4.\x0a\x09\x09\x0a\x09\x09canvas draw ].",
messageSends: ["createPath:", "relative", "moveTo:", "@", "lineTo:", "drawDuring:", "clear:", "gray", "translateByX:Y:", "pathTransform", "/", "width", "height", "scaleBy:", "setShape:", "width:", "setStrokePaint:", "yellow", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step17",
category: 'steps',
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._moveTo_((-50).__at((-50)));
_st($1)._lineTo_((50).__at((0)));
_st($1)._lineTo_((0).__at((50)));
_st($1)._lineTo_((-50).__at((0)));
_st($1)._lineTo_((80).__at((-30)));
$2=_st($1)._close();
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1,1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
$3=_st(canvas)._pathTransform();
_st($3)._translateByX_Y_(_st(_st(self["@surface"])._width()).__slash((2)),_st(_st(self["@surface"])._height()).__slash((2)));
$4=_st($3)._scaleBy_((3));
$4;
_st(canvas)._setShape_(path);
_st(canvas)._setPaint_(_st($Color())._yellow());
_st(canvas)._draw();
_st(_st(canvas)._pathTransform())._loadIdentity();
_st(canvas)._setStrokePaint_(_st($Color())._blue());
return _st(canvas)._drawShape_(_st(canvas)._createPath_((function(b){
return smalltalk.withContext(function($ctx3) {
return _st(b)._lineTo_((300).__at((300)));
}, function($ctx3) {$ctx3.fillBlock({b:b},$ctx2,3)})})));
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step17",{path:path},smalltalk.AthensTutorial)})},
args: [],
source: "step17\x0a\x09\x22Step 17: Self-intersecting paths and how they are filled.\x0a\x0a\x09There is a simple algorithm to determine whether given point will be filled or not: \x0a \x09- take an arbitrary point, infinitely distant from path interior and connect it with a point under the question.\x0a \x09- count how many times the resulting ray intersects with path segments\x0a \x09- if number of intersections is odd, then given point will be filled\x0a \x09- if number of intersections is even, then given point will NOT be filled\x22\x0a\x09\x0a\x09| path |\x0a\x09path := surface createPath: [ :builder |\x0a\x09\x09\x09\x0a\x09\x09builder \x0a\x09\x09\x09moveTo: -50 @ -50;\x0a\x09\x09\x09lineTo: 50 @ 0;\x0a\x09\x09\x09lineTo: 0 @ 50;\x0a\x09\x09\x09lineTo: -50 @ 0;\x0a\x09\x09\x09lineTo: 80 @ -30;\x0a\x09\x09\x09close ].\x0a\x0a\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x0a\x09\x09canvas pathTransform\x0a\x09\x09\x09translateByX: surface width/2.0 Y: surface height / 2.0;\x0a\x09\x09\x09scaleBy: 3.\x0a\x09\x0a\x09\x09canvas setShape: path.\x0a\x09\x09canvas setPaint: Color yellow.\x0a\x09\x09canvas draw.\x0a\x09\x09\x0a\x09\x09canvas pathTransform loadIdentity.\x0a\x09\x09\x22draw a line to demonstrate imaginery ray\x22\x0a\x09\x09\x0a\x09\x09canvas setStrokePaint: Color blue.\x0a\x09\x09\x0a\x09\x09canvas drawShape: (canvas createPath: [ :b | b lineTo: 300 @ 300 ]) ].",
messageSends: ["createPath:", "moveTo:", "@", "lineTo:", "close", "drawDuring:", "clear:", "gray", "translateByX:Y:", "pathTransform", "/", "width", "height", "scaleBy:", "setShape:", "setPaint:", "yellow", "draw", "loadIdentity", "setStrokePaint:", "blue", "drawShape:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step18",
category: 'steps',
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._moveTo_((-50).__at((-50)));
_st($1)._lineTo_((50).__at((0)));
_st($1)._lineTo_((0).__at((50)));
_st($1)._lineTo_((-50).__at((0)));
_st($1)._close();
_st($1)._moveTo_((10).__at((10)));
_st($1)._lineTo_((0).__at((30)));
_st($1)._lineTo_((30).__at((0)));
_st($1)._lineTo_((0).__at((-30)));
$2=_st($1)._close();
$2;
$3=builder;
_st($3)._moveTo_((25).__at((10)));
_st($3)._lineTo_((0).__at((10)));
_st($3)._lineTo_((10).__at((0)));
_st($3)._lineTo_((0).__at((-10)));
$4=_st($3)._close();
return $4;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1,1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
$5=_st(canvas)._pathTransform();
_st($5)._translateByX_Y_(_st(_st(self["@surface"])._width()).__slash((2)),_st(_st(self["@surface"])._height()).__slash((2)));
$6=_st($5)._scaleBy_((3));
$6;
_st(canvas)._setShape_(path);
_st(canvas)._setPaint_(_st($Color())._yellow());
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step18",{path:path},smalltalk.AthensTutorial)})},
args: [],
source: "step18\x0a\x09\x22Step 18: Creating hollow shapes using multiple contours.\x22\x0a\x09\x0a\x09| path |\x0a\x09path := surface createPath: [ :builder |\x0a\x09\x09\x09\x0a\x09\x09builder \x0a\x09\x09\x0a\x09\x09\x09\x22The first contour is a rectangle\x22\x0a\x0a\x09\x09\x09moveTo: -50 @ -50;\x0a\x09\x09\x09lineTo: 50 @ 0;\x0a\x09\x09\x09lineTo: 0 @ 50;\x0a\x09\x09\x09lineTo: -50 @ 0;\x0a\x09\x09\x09close;\x0a\x09\x09\x09\x0a\x09\x09\x09\x22A second contour is a rectangle, embedded into previous one. \x22\x0a\x09\x09\x09\x0a\x09\x09\x09\x22Important to note here: a close and moveTo: commands are ones \x0a\x09\x09\x09which starting new contour. If there is no #close segment, but\x0a\x09\x09\x09moveTo: , it is counted as if implicit #close segment were added. \x0a\x09\x09\x09This is of course relevant only for filled paths, not stoked ones\x22\x0a\x09\x09\x09\x09\x0a\x09\x09\x09moveTo: 10 @ 10;\x0a\x09\x09\x09lineTo: 0 @ 30;\x0a\x09\x09\x09lineTo: 30 @ 0;\x0a\x09\x09\x09lineTo: 0 @ -30;\x0a\x09\x09\x09close.\x0a\x09\x09\x09\x0a\x09\x09\x09\x22An important note here: the winding of contours must be different in order \x0a\x09\x09\x09to exclude the area inside one contour from another.\x0a\x09\x09\x09If contours having same winding (both clockwise or both counter-clockwise,\x0a\x09\x09\x09they will be both filled.\x22\x0a\x0a\x0a\x09\x09\x09\x22The third rectangle intersecting with both contours, try to change the initial moveTo: \x0a\x09\x09\x09segment coordinates to draw it outside or inside and see the difference\x22\x0a\x09\x09builder\x0a\x09\x09\x09moveTo: 25 @ 10;\x0a\x09\x09\x09lineTo: 0 @ 10;\x0a\x09\x09\x09lineTo: 10 @ 0;\x0a\x09\x09\x09lineTo: 0 @ -10;\x0a\x09\x09\x09close ].\x0a\x0a\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x0a\x09\x09canvas pathTransform\x0a\x09\x09\x09translateByX: surface width/2.0 Y: surface height / 2.0;\x0a\x09\x09\x09scaleBy: 3.\x0a\x09\x0a\x09\x09canvas setShape: path.\x0a\x09\x09canvas setPaint: Color yellow.\x0a\x09\x09\x0a\x09\x09canvas draw ].",
messageSends: ["createPath:", "moveTo:", "@", "lineTo:", "close", "drawDuring:", "clear:", "gray", "translateByX:Y:", "pathTransform", "/", "width", "height", "scaleBy:", "setShape:", "setPaint:", "yellow", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step19",
category: 'steps',
fn: function (){
var self=this;
var linearGradient;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
linearGradient=_st(self["@surface"])._createLinearGradient_start_stop_(smalltalk.HashedCollection._from_([(0).__minus_gt(_st($Color())._blue()),(0.25).__minus_gt(_st($Color())._red()),(0.5).__minus_gt(_st($Color())._white()),(0.75).__minus_gt(_st($Color())._yellow()),(1).__minus_gt(_st($Color())._green())]),(0).__at((0)),(100).__at((100)));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(_st(canvas)._pathTransform())._translateByX_Y_((10),(10));
_st(canvas)._setShape_(_st((0).__at((0)))._corner_((100).__at((100))));
_st(canvas)._setPaint_(linearGradient);
_st(canvas)._draw();
_st(_st(canvas)._pathTransform())._translateByX_Y_((150),(0));
$1=_st(canvas)._paintTransform();
_st($1)._rotateByDegrees_((45));
$2=_st($1)._scaleBy_((0.7));
$2;
_st(canvas)._draw();
_st(_st(canvas)._pathTransform())._translateByX_Y_((150),(0));
$3=_st(canvas)._paintTransform();
_st($3)._translateByX_Y_((0),(80));
$4=_st($3)._scaleBy_((0.2));
$4;
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step19",{linearGradient:linearGradient},smalltalk.AthensTutorial)})},
args: [],
source: "step19\x0a\x09\x22Step 19: Using gradient paints.\x0a\x0a\x09So far we're use a simplest kind of paint: just a solid color.\x0a\x09Now let's play with gradients.\x22\x0a\x09\x0a\x09| linearGradient |\x0a\x0a\x09\x22A linear gradient defined used 3 parameters:\x0a\x09 - a color ramp (a points in range from 0 to 1 with associated colors)\x0a\x09- origin (starting) point\x0a\x09- end (stop) point\x0a\x09\x0a\x09A vector connecting start and stop defines the direction which gradient will be facing,\x0a\x09as well as its dimensions. \x22\x09\x0a\x0a\x09linearGradient := surface createLinearGradient: #{\x0a\x09\x09\x090 -> Color blue .\x0a\x09\x09\x090.25 -> Color red.\x0a\x09\x09\x090.5 -> Color white.\x0a\x09\x09\x090.75 -> Color yellow.\x0a\x09\x09\x091 -> Color green }\x0a\x09\x09start: 0 @ 0  \x0a\x09\x09stop: 100 @ 100.\x0a\x0a\x0a\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x09\x0a\x09\x09canvas pathTransform translateByX: 10 Y: 10.\x0a\x09\x09\x0a\x09\x09canvas setShape: (0@0 corner:100@100).\x0a\x09\x09canvas setPaint: linearGradient.\x0a\x09\x09\x0a\x09\x09canvas draw.\x0a\x0a\x09\x09canvas pathTransform translateByX: 150 Y: 0.\x0a\x09\x09\x0a\x09\x09\x22Here we are using a paint tranform to change the gradient's direction and scale\x22\x0a\x09\x09canvas paintTransform rotateByDegrees: 45; scaleBy: 0.7.\x0a\x09\x09canvas draw.\x0a\x0a\x09\x09canvas pathTransform translateByX: 150 Y: 0.\x0a\x09\x09\x0a\x09\x09\x22The areas outside the ramp boundary filled by extending the colors defined for 0 and 1 points of ramp respectively. \x0a\x09\x09(blue for top, green for bottom, in our case)\x22\x0a\x09\x09canvas paintTransform translateByX: 0 Y: 80; scaleBy: 0.2.\x0a\x09\x09canvas draw ].",
messageSends: ["createLinearGradient:start:stop:", "->", "blue", "red", "white", "yellow", "green", "@", "drawDuring:", "clear:", "gray", "translateByX:Y:", "pathTransform", "setShape:", "corner:", "setPaint:", "draw", "rotateByDegrees:", "paintTransform", "scaleBy:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step2",
category: 'steps',
fn: function (){
var self=this;
var container;
function $AthensHTMLSurface(){return smalltalk.AthensHTMLSurface||(typeof AthensHTMLSurface=="undefined"?nil:AthensHTMLSurface)}
return smalltalk.withContext(function($ctx1) { 
container="#canvas-container"._asJQuery();
_st(container)._empty();
self["@surface"]=_st($AthensHTMLSurface())._extent_((500).__at((400)));
_st(self["@surface"])._appendToJQuery_("#canvas-container"._asJQuery());
_st(_st(_st(self["@surface"])._canvasTag())._asJQuery())._css_with_("border","1px #aaa solid");
return self}, function($ctx1) {$ctx1.fill(self,"step2",{container:container},smalltalk.AthensTutorial)})},
args: [],
source: "step2\x0a\x09\x22Step 2: Creating a surface.\x0a\x0a\x09Protocol: <SurfaceClass> extent: x@y will create a surface using specific class.\x0a\x09All surfaces are conformant to AthensSurface protocol.\x22\x0a\x0a\x09|container|\x0a\x09container := '#canvas-container' asJQuery.\x0a\x0a\x09\x22Clear previous canvases\x22\x0a\x09container empty.\x0a\x0a\x09surface := AthensHTMLSurface extent: 500@400.\x0a\x09surface appendToJQuery: '#canvas-container' asJQuery.\x0a\x0a\x09\x22Render border around canvas.\x22\x0a\x09surface canvasTag asJQuery \x0a\x09\x09css: 'border' with: '1px #aaa solid'.\x0a\x09\x0a\x09\x22IMPORTANT NOTE:\x0a\x09\x09the surface which we will create at this step will be used in later steps.\x0a\x09\x09This means that if you resize the window (changing the view size), you may need to recreate surface.\x0a\x09\x09Also, since surface uses external resources, quitting an image and restarting it, will also require to \x0a\x09\x09create a new surface, because the one from previous session will be no longer accessible.\x22",
messageSends: ["asJQuery", "empty", "extent:", "@", "appendToJQuery:", "css:with:", "canvasTag"],
referencedClasses: ["AthensHTMLSurface"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step20",
category: 'steps',
fn: function (){
var self=this;
var ramp,perfectRadial,radialWithCustomFocus;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
ramp=smalltalk.HashedCollection._from_([(0).__minus_gt(_st($Color())._blue()),(0.25).__minus_gt(_st($Color())._red()),(0.5).__minus_gt(_st($Color())._white()),(0.75).__minus_gt(_st($Color())._yellow()),(1).__minus_gt(_st(_st($Color())._blue())._alpha_((0)))]);
perfectRadial=_st(self["@surface"])._createRadialGradient_center_radius_(ramp,(50).__at((50)),(50));
radialWithCustomFocus=_st(self["@surface"])._createRadialGradient_center_radius_focalPoint_(ramp,(50).__at((50)),(50),(20).__at((20)));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(_st(canvas)._pathTransform())._translateByX_Y_((10),(10));
_st(canvas)._setShape_(_st((0).__at((0)))._corner_((100).__at((100))));
_st(canvas)._setPaint_(perfectRadial);
_st(canvas)._draw();
_st(_st(canvas)._pathTransform())._translateByX_Y_((150),(0));
_st(canvas)._setPaint_(radialWithCustomFocus);
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step20",{ramp:ramp,perfectRadial:perfectRadial,radialWithCustomFocus:radialWithCustomFocus},smalltalk.AthensTutorial)})},
args: [],
source: "step20\x0a\x09\x22Step 20: Radial gradients.\x22\x0a\x09\x0a\x09| ramp perfectRadial radialWithCustomFocus |\x0a\x0a\x09\x22A radial gradient defined using following parameters:\x0a\x09 - a color ramp (a points in range from 0 to 1 with associated colors)\x0a\x09- center point\x0a\x09- radius\x0a\x09- focal point (can be omited if focus is at center)\x22\x0a\x09\x0a\x09ramp :=  #{\x0a\x09\x09\x090 -> Color blue .\x0a\x09\x09\x090.25 -> Color red.\x0a\x09\x09\x090.5 -> Color white.\x0a\x09\x09\x090.75 -> Color yellow.\x0a\x09\x09\x091 -> (Color blue alpha: 0) }.\x0a\x09\x09\x0a\x09perfectRadial := surface createRadialGradient: ramp\x0a\x09\x09center: 50 @ 50 radius: 50 .\x0a\x09\x0a\x09radialWithCustomFocus := surface createRadialGradient: ramp\x0a\x09\x09center: 50 @ 50 radius: 50 focalPoint: 20 @ 20. \x0a\x09\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x09\x0a\x09\x09canvas pathTransform translateByX: 10 Y: 10.\x0a\x09\x09\x0a\x09\x09canvas setShape: (0 @ 0 corner:100 @ 100).\x0a\x09\x09canvas setPaint: perfectRadial.\x0a\x09\x09\x0a\x09\x09canvas draw.\x0a\x0a\x09\x09canvas pathTransform translateByX: 150 Y: 0.\x0a\x09\x09canvas setPaint: radialWithCustomFocus.\x0a\x09\x09\x0a\x09\x09canvas draw ].",
messageSends: ["->", "blue", "red", "white", "yellow", "alpha:", "createRadialGradient:center:radius:", "@", "createRadialGradient:center:radius:focalPoint:", "drawDuring:", "clear:", "gray", "translateByX:Y:", "pathTransform", "setShape:", "corner:", "setPaint:", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step21",
category: 'steps',
fn: function (){
var self=this;
function $Image(){return smalltalk.Image||(typeof Image=="undefined"?nil:Image)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._createBitmapPaint_afterLoading_(_st($Image())._fromUrl_("images/amber.png"),(function(bitmapPaint){
return smalltalk.withContext(function($ctx2) {
_st(bitmapPaint)._repeat();
return _st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx3) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(canvas)._setPaint_(bitmapPaint);
_st(_st(canvas)._paintTransform())._scaleBy_((0.5));
return _st(canvas)._drawShape_(_st((0).__at((0)))._corner_(_st(self["@surface"])._extent()));
}, function($ctx3) {$ctx3.fillBlock({canvas:canvas},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({bitmapPaint:bitmapPaint},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step21",{},smalltalk.AthensTutorial)})},
args: [],
source: "step21\x0a\x09\x22Step 21: Pattern paints (bitmap paints).\x22\x0a\x09\x0a\x09\x22The afterLoading block is executed when the image is loaded by the browser.\x0a\x09If you know for sure that the image is already loaded, you can use\x0a\x09createBitmapPaint: that creates the paint and returns it directly.\x22\x0a\x09\x0a\x09surface \x0a\x09\x09createBitmapPaint: (Image fromUrl: 'images/amber.png')\x0a\x09\x09afterLoading: [ :bitmapPaint |\x0a\x09\x09\x09bitmapPaint repeat. \x22use #repeat to repeat the fill ad infinitum using tiling effect \x22\x0a\x09\x0a\x09\x09\x09surface drawDuring: [ :canvas |\x0a\x09\x09\x09\x09surface clear: Color gray.\x0a\x09\x09\x09\x0a\x09\x09\x09\x09canvas setPaint: bitmapPaint.\x0a\x09\x09\x0a\x09\x09\x09\x09\x22And of course, using the paint transform we can affect the result\x22\x0a\x09\x09\x0a\x09\x09\x09\x09canvas paintTransform scaleBy: 0.5.\x0a\x09\x09\x09\x09canvas drawShape: (0 @ 0 corner: surface extent) ]].",
messageSends: ["createBitmapPaint:afterLoading:", "fromUrl:", "repeat", "drawDuring:", "clear:", "gray", "setPaint:", "scaleBy:", "paintTransform", "drawShape:", "corner:", "@", "extent"],
referencedClasses: ["Image", "Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step22",
category: 'steps',
fn: function (){
var self=this;
var surface2;
function $AthensHTMLSurface(){return smalltalk.AthensHTMLSurface||(typeof AthensHTMLSurface=="undefined"?nil:AthensHTMLSurface)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
surface2=_st($AthensHTMLSurface())._extent_((10).__at((10)));
_st(surface2)._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(surface2)._clear();
_st(canvas)._setPaint_(_st($Color())._white());
$1=canvas;
_st($1)._drawShape_(_st((0).__at((0)))._corner_((5).__at((5))));
$2=_st($1)._drawShape_(_st((5).__at((5)))._corner_((10).__at((10))));
return $2;
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(_st(canvas)._setPaint_(surface2))._repeat();
return _st(canvas)._drawShape_(_st((0).__at((0)))._corner_(_st(self["@surface"])._extent()));
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step22",{surface2:surface2},smalltalk.AthensTutorial)})},
args: [],
source: "step22\x0a\x09\x22Step 22: Using another surface as paint. \x0a\x09\x0a\x09Simply pass surface as an argument to #setPaint: method.\x22\x0a\x09\x0a\x09| surface2  |\x0a\x09surface2 := AthensHTMLSurface extent: 10 @ 10.\x0a\x09\x0a\x09\x22checker board\x22\x0a\x09surface2 drawDuring: [ :canvas |\x0a\x09\x09surface2 clear.\x0a\x09\x09canvas setPaint: Color white.\x0a\x09\x09\x0a\x09\x09canvas \x0a\x09\x09\x09drawShape: (0 @ 0 corner: 5 @ 5);\x0a\x09\x09\x09drawShape: (5 @ 5 corner: 10 @ 10) ].\x0a\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x09\x0a\x09\x09(canvas setPaint: surface2) repeat.\x0a\x09\x09\x0a\x09\x09\x22And of course, using the paint transform we can affect the result.\x0a\x09\x09Uncomment the line below to see the difference\x22\x0a\x09\x09\x22canvas paintTransform scaleByX: 3 Y: 1; rotateByDegrees: 45 .\x22\x0a\x09\x09\x0a\x09\x09canvas drawShape: (0 @ 0 corner: surface extent) ].",
messageSends: ["extent:", "@", "drawDuring:", "clear", "setPaint:", "white", "drawShape:", "corner:", "clear:", "gray", "repeat", "extent"],
referencedClasses: ["AthensHTMLSurface", "Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step23",
category: 'steps',
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._moveTo_((-50).__at((-50)));
_st($1)._lineTo_((50).__at((0)));
_st($1)._lineTo_((0).__at((50)));
_st($1)._lineTo_((-50).__at((0)));
_st($1)._lineTo_((80).__at((-30)));
$2=_st($1)._close();
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1,1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
var stroke;
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
stroke=_st(canvas)._setStrokePaint_(_st($Color())._white());
stroke;
_st(stroke)._width_((5));
$3=_st(canvas)._pathTransform();
_st($3)._translateByX_Y_((400),(400));
$4=_st($3)._scaleBy_((4));
$4;
return _st(canvas)._drawShape_(path);
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas,stroke:stroke},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step23",{path:path},smalltalk.AthensTutorial)})},
args: [],
source: "step23\x0a\x09\x22Step 23: Stroke paints.\x0a\x09\x0a\x09Stroke paint is a special kind of paint, which instead of filling the shape,\x0a\x09drawing a connected contour of certain width following the path. \x22\x0a\x09\x0a\x09| path |\x0a\x09path := surface createPath: [ :builder |\x0a\x09\x09builder \x0a\x09\x09\x09moveTo: -50 @ -50;\x0a\x09\x09\x09lineTo: 50 @ 0;\x0a\x09\x09\x09lineTo: 0 @ 50;\x0a\x09\x09\x09lineTo: -50 @ 0;\x0a\x09\x09\x09lineTo: 80 @ -30;\x0a\x09\x09\x09close ].\x0a\x09\x0a\x09surface drawDuring: [ :canvas | | stroke |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x09\x0a\x09\x09\x22A stroke paint uses another paint for fills\x22\x0a\x09\x09stroke := canvas setStrokePaint: Color white.\x0a\x09\x09\x0a\x09\x09\x22You can control the width of stroke by setting width parameter\x22\x0a\x09\x09stroke width: 5.\x0a\x09\x09\x0a\x09\x09canvas pathTransform \x0a\x09\x09\x09translateByX: 400 Y: 400;\x0a\x09\x09\x09scaleBy: 4.\x0a\x09\x09\x09\x0a\x09\x09canvas drawShape: path ].",
messageSends: ["createPath:", "moveTo:", "@", "lineTo:", "close", "drawDuring:", "clear:", "gray", "setStrokePaint:", "white", "width:", "translateByX:Y:", "pathTransform", "scaleBy:", "drawShape:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step24",
category: 'steps',
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._moveTo_((-50).__at((-50)));
_st($1)._lineTo_((50).__at((0)));
_st($1)._lineTo_((0).__at((50)));
_st($1)._lineTo_((-50).__at((0)));
_st($1)._lineTo_((80).__at((-30)));
$2=_st($1)._close();
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1,1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
var stroke;
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
stroke=_st(canvas)._setStrokePaint_(_st($Color())._white());
stroke;
_st(stroke)._width_((5));
_st(stroke)._joinBevel();
$3=_st(canvas)._pathTransform();
_st($3)._translateByX_Y_((400),(400));
$4=_st($3)._scaleBy_((4));
$4;
return _st(canvas)._drawShape_(path);
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas,stroke:stroke},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step24",{path:path},smalltalk.AthensTutorial)})},
args: [],
source: "step24\x0a\x09\x22Step 24: Stroke paints: Join type.\x0a\x09\x0a\x09The stroke join type affects how to connect the segments.\x22\x0a\x09\x0a\x09| path |\x0a\x09path := surface createPath: [ :builder |\x0a\x09\x09builder \x0a\x09\x09\x09moveTo: -50 @ -50;\x0a\x09\x09\x09lineTo: 50 @ 0;\x0a\x09\x09\x09lineTo: 0 @ 50;\x0a\x09\x09\x09lineTo: -50 @ 0;\x0a\x09\x09\x09lineTo: 80 @ -30;\x0a\x09\x09\x09close ].\x0a\x09\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09| stroke |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x09\x0a\x09\x09stroke := canvas setStrokePaint: Color white.\x0a\x09\x09stroke width: 5.\x0a\x0a\x09\x09\x22There are 3 kinds of joins: bevel, miter and round (uncomment to see the difference)\x22\x0a\x09\x0a\x09\x09stroke joinBevel. \x0a\x09\x09\x22stroke joinRound.\x0a\x09\x09stroke joinMiter.\x22\x0a\x09\x09 \x09\x09\x0a\x09\x09canvas pathTransform \x0a\x09\x09\x09translateByX: 400 Y: 400;\x0a\x09\x09\x09scaleBy: 4.\x0a\x09\x09\x09\x0a\x09\x09canvas drawShape: path ].",
messageSends: ["createPath:", "moveTo:", "@", "lineTo:", "close", "drawDuring:", "clear:", "gray", "setStrokePaint:", "white", "width:", "joinBevel", "translateByX:Y:", "pathTransform", "scaleBy:", "drawShape:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step25",
category: 'steps',
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._moveTo_((-50).__at((-50)));
_st($1)._lineTo_((50).__at((0)));
_st($1)._lineTo_((0).__at((50)));
_st($1)._lineTo_((-50).__at((0)));
$2=_st($1)._lineTo_((80).__at((-30)));
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1,1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
var stroke;
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
stroke=_st(canvas)._setStrokePaint_(_st($Color())._white());
stroke;
_st(stroke)._width_((5));
_st(stroke)._joinRound();
_st(stroke)._capRound();
$3=_st(canvas)._pathTransform();
_st($3)._translateByX_Y_((400),(400));
$4=_st($3)._scaleBy_((4));
$4;
return _st(canvas)._drawShape_(path);
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas,stroke:stroke},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step25",{path:path},smalltalk.AthensTutorial)})},
args: [],
source: "step25\x0a\x09\x22Step 25: Stroke paints: Cap style\x0a\x0a\x09The cap style affects drawing the end segments (what kind of 'cap' to use).\x22\x0a\x09\x0a\x09| path |\x0a\x09path := surface createPath: [ :builder |\x0a\x09\x09builder \x0a\x09\x09\x09moveTo: -50 @ -50;\x0a\x09\x09\x09lineTo: 50 @ 0;\x0a\x09\x09\x09lineTo: 0 @ 50;\x0a\x09\x09\x09lineTo: -50 @ 0;\x0a\x09\x09\x09lineTo: 80 @ -30 ].\x0a\x09\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09| stroke |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x09\x0a\x09\x09stroke := canvas setStrokePaint: Color white.\x0a\x09\x09stroke width: 5.\x0a\x0a\x09\x09stroke joinRound.\x0a\x09\x09\x0a\x09\x09\x22There are 3 kinds of cap: \x0a\x09\x09  - round\x0a\x09\x09  - square\x0a\x09\x09  - and butt\x0a\x09\x09\x0a\x09\x09(uncomment to see the difference)\x22\x0a\x09\x09\x0a\x09\x09stroke capRound. \x0a\x09\x09\x22stroke capButt.\x22\x0a\x09\x09\x22stroke capSquare. \x22\x0a\x09\x09\x0a\x09\x09canvas pathTransform \x0a\x09\x09\x09translateByX: 400 Y: 400;\x0a\x09\x09\x09scaleBy: 4.\x0a\x09\x09\x09\x0a\x09\x09canvas drawShape: path ].",
messageSends: ["createPath:", "moveTo:", "@", "lineTo:", "drawDuring:", "clear:", "gray", "setStrokePaint:", "white", "width:", "joinRound", "capRound", "translateByX:Y:", "pathTransform", "scaleBy:", "drawShape:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step26",
category: 'steps',
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._moveTo_((-50).__at((-50)));
_st($1)._lineTo_((50).__at((0)));
_st($1)._lineTo_((0).__at((50)));
_st($1)._lineTo_((-50).__at((0)));
$2=_st($1)._lineTo_((80).__at((-30)));
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1,1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
var stroke;
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
stroke=_st(canvas)._setStrokePaint_(_st($Color())._white());
stroke;
_st(stroke)._width_((5));
_st(stroke)._joinRound();
_st(stroke)._capRound();
_st(stroke)._dashes_offset_([(20), (10), (35), (30)],(0));
$3=_st(canvas)._pathTransform();
_st($3)._translateByX_Y_((400),(400));
$4=_st($3)._scaleBy_((4));
$4;
return _st(canvas)._drawShape_(path);
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas,stroke:stroke},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step26",{path:path},smalltalk.AthensTutorial)})},
args: [],
source: "step26\x0a\x09\x22Step 26: Stroke paints: Dashing\x22\x0a\x09\x0a\x09| path |\x0a\x09path := surface createPath: [ :builder |\x0a\x09\x09builder \x0a\x09\x09\x09moveTo: -50 @ -50;\x0a\x09\x09\x09lineTo: 50 @ 0;\x0a\x09\x09\x09lineTo: 0 @ 50;\x0a\x09\x09\x09lineTo: -50 @ 0;\x0a\x09\x09\x09lineTo: 80 @ -30 ].\x0a\x09\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09| stroke |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x09\x0a\x09\x09stroke := canvas setStrokePaint: Color white.\x0a\x09\x09stroke width: 5.\x0a\x0a\x09\x09stroke joinRound.\x0a\x09\x09stroke capRound.\x0a\x0a\x09\x09stroke dashes: #( \x22fill\x22 20  \x22gap\x22 10  \x22fill\x22 35  \x22gap\x22 30 ) offset: 0.\x0a\x09\x09\x0a\x09\x09canvas pathTransform \x0a\x09\x09\x09translateByX: 400 Y: 400;\x0a\x09\x09\x09scaleBy: 4.\x0a\x09\x09\x09\x0a\x09\x09canvas drawShape: path ].",
messageSends: ["createPath:", "moveTo:", "@", "lineTo:", "drawDuring:", "clear:", "gray", "setStrokePaint:", "white", "width:", "joinRound", "capRound", "dashes:offset:", "translateByX:Y:", "pathTransform", "scaleBy:", "drawShape:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step27",
category: 'steps',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_((function(canvas){
var stroke;
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(canvas)._setPaint_(_st($Color())._blue());
_st(canvas)._drawShape_(_st((0).__at((0)))._corner_((300).__at((300))));
_st(_st(canvas)._paintMode())._over();
_st(canvas)._setPaint_(_st(_st($Color())._yellow())._alpha_((0.5)));
return _st(canvas)._drawShape_(_st((150).__at((150)))._corner_((450).__at((450))));
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas,stroke:stroke},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step27",{},smalltalk.AthensTutorial)})},
args: [],
source: "step27\x0a\x09\x22Step 27: Paint modes\x0a\x0a\x09The paint mode controls how incoming (source) fragments will be combined with what is already on surface (destination).\x22\x0a\x09\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09| stroke |\x0a\x09\x09surface clear: Color gray.\x0a\x0a\x09\x09\x22Draw a blue rectangle to use it as background\x22\x0a\x09\x09canvas setPaint: Color blue.\x09\x0a\x09\x09canvas drawShape: (0 @ 0 corner: 300 @ 300).\x0a\x09\x09\x0a\x09\x09canvas paintMode over.\x0a\x09\x09\x0a\x09\x09\x22Try one of following paint modes, and see the result: \x09\x0a\x09\x0a\x09\x09clear\x0a\x09\x09source\x0a\x09\x09over    <=== this is default mode\x0a\x09\x09in\x0a\x09\x09out \x0a\x09\x09atop\x0a\x09\x09dest\x0a\x09\x09destOver\x0a\x09\x09destIn\x0a\x09\x09destOut\x0a\x09\x09destAtop\x0a\x09\x09xor\x0a\x09\x09add\x0a\x09\x09saturate\x0a\x09\x09multiply\x0a\x09\x09screen\x0a\x09\x09overlay\x0a\x09\x09darken\x0a\x09\x09lighten\x0a\x09\x09colorDodge\x0a\x09\x09colorBurn\x0a\x09\x09hardLight\x0a\x09\x09softLight\x0a\x09\x09difference\x0a\x09\x09exclusion\x0a\x09\x09hslHue\x0a\x09\x09hslSaturation\x0a\x09\x09hslColor\x0a\x09\x09hslLuminosity\x0a\x09\x0a\x09\x09You can check if given mode is supported by sending: \x0a\x09\x09canvas paintMode availableModes\x22\x0a\x09\x09\x0a\x09\x09\x22Draw a semi-transparent yellow rectangle to combine it with background\x22\x0a\x09\x09canvas setPaint: (Color yellow alpha: 0.5).\x09\x0a\x09\x09canvas drawShape: (150 @ 150 corner: 450 @ 450) ].",
messageSends: ["drawDuring:", "clear:", "gray", "setPaint:", "blue", "drawShape:", "corner:", "@", "over", "paintMode", "alpha:", "yellow"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step28",
category: 'steps',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_((function(canvas){
var stroke;
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(canvas)._setPaint_(_st($Color())._blue());
_st(canvas)._drawShape_(_st((0).__at((0)))._corner_((300).__at((300))));
_st(_st(canvas)._paintMode())._restoreAfter_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(canvas)._paintMode())._xor();
_st(canvas)._setPaint_(_st(_st($Color())._yellow())._alpha_((0.5)));
return _st(canvas)._drawShape_(_st((150).__at((150)))._corner_((450).__at((450))));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
_st(canvas)._setPaint_(_st($Color())._red());
return _st(canvas)._drawShape_(_st((200).__at((200)))._corner_((500).__at((500))));
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas,stroke:stroke},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step28",{},smalltalk.AthensTutorial)})},
args: [],
source: "step28\x0a\x09\x22Step 28: Paint modes. Preserving the modes.\x22\x0a\x09\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09| stroke |\x0a\x09\x09surface clear: Color gray.\x0a\x0a\x09\x09\x22Draw a blue rectangle to use it as background\x22\x0a\x09\x09canvas setPaint: Color blue.\x09\x0a\x09\x09canvas drawShape: (0 @ 0 corner: 300 @ 300).\x0a\x0a\x09\x09\x22Try to comment #restoreAfter: to see the difference \x22\x0a\x09\x09canvas paintMode restoreAfter: [\x09\x09\x0a\x09\x09\x09canvas paintMode xor.\x0a\x09\x09\x09canvas setPaint: (Color yellow alpha: 0.5).\x09\x0a\x09\x09\x09canvas drawShape: (150 @ 150 corner: 450 @ 450) ].\x0a\x09\x0a\x09\x09canvas setPaint: (Color red).\x09\x0a\x09\x09canvas drawShape: (200 @ 200 corner: 500 @ 500) ].",
messageSends: ["drawDuring:", "clear:", "gray", "setPaint:", "blue", "drawShape:", "corner:", "@", "restoreAfter:", "paintMode", "xor", "alpha:", "yellow", "red"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step29",
category: 'steps',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_((function(canvas){
var stroke;
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(canvas)._setPaint_(_st($Color())._blue());
return _st(canvas)._clipBy_during_(_st((100).__at((100)))._corner_((200).__at((200))),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(canvas)._drawShape_(_st((0).__at((0)))._corner_(_st(self["@surface"])._extent()));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas,stroke:stroke},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step29",{},smalltalk.AthensTutorial)})},
args: [],
source: "step29\x0a\x09\x22Step 29: Clipping\x22\x0a\x09\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09| stroke |\x0a\x09\x09surface clear: Color gray.\x0a\x0a\x09\x09\x22Draw a blue rectangle to use it as background\x22\x0a\x09\x09canvas setPaint: Color blue.\x09\x0a\x0a\x09\x09canvas clipBy: (100 @ 100 corner: 200 @ 200) during: [ \x09\x0a\x09\x09\x09canvas drawShape: (0 @ 0 corner: surface extent) ]].",
messageSends: ["drawDuring:", "clear:", "gray", "setPaint:", "blue", "clipBy:during:", "corner:", "@", "drawShape:", "extent"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step3",
category: 'steps',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear();
_st(canvas)._setPaint_(_st($Color())._green());
_st(canvas)._setShape_(_st((40).__at((40)))._corner_((100).__at((100))));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step3",{},smalltalk.AthensTutorial)})},
args: [],
source: "step3\x0a\x09\x22Step 3: Start drawing.\x0a\x0a\x09Any drawing operations on surface is performed within #drawDuring: block.\x0a\x09There is no other (valid) way of obtaining canvas instance.\x22\x0a\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x0a\x09\x09\x22First, we clear the surface\x22\x0a\x09\x09surface clear. \x0a\x09\x0a\x09\x09\x22We can use \x0a\x09\x09surface clear: Color black.  \x0a\x09\x09as well. A #clear is equivalent to: (surface clear: Color transparent).\x22\x0a\x09\x0a\x09\x09\x22Let's draw a simple green rectangle\x22\x0a\x09\x09canvas setPaint: Color green.\x0a\x09\x09canvas setShape: (40 @ 40 corner: 100 @ 100).\x0a\x09\x09canvas draw ]\x0a\x0a\x09\x22Important to note:\x0a\x09- canvas instance should be used only within #drawDuring: scope\x22",
messageSends: ["drawDuring:", "clear", "setPaint:", "green", "setShape:", "corner:", "@", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step30",
category: 'steps',
fn: function (){
var self=this;
var font;
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
font=_st($LogicalFont())._familyName_size_("Arial",(20));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._black());
_st(canvas)._setFont_(font);
_st(canvas)._setPaint_(_st($Color())._red());
_st(_st(canvas)._pathTransform())._scaleBy_((4));
_st(_st(canvas)._pathTransform())._translateByX_Y_((0),(20));
return _st(canvas)._drawString_("Hello Athens!");
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step30",{font:font},smalltalk.AthensTutorial)})},
args: [],
source: "step30\x0a\x09\x22Step 30: drawing text\x22\x0a\x09\x0a\x09| font |\x0a\x09font := LogicalFont familyName: 'Arial' size: 20.\x0a\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09surface clear: Color black.\x0a\x0a\x09\x09\x22set font and color\x22\x0a\x09\x09canvas setFont: font.\x0a\x09\x09canvas setPaint: Color red.\x0a\x09\x09\x0a\x09\x09\x22translate an origin by font's ascent, otherwise \x0a\x09\x09we will see only things below baseline\x22\x0a\x09\x09\x0a\x09\x09canvas pathTransform scaleBy: 4.\x0a\x09\x09canvas pathTransform translateByX: 0 Y: 20.\x0a\x09\x09canvas drawString: 'Hello Athens!' ].",
messageSends: ["familyName:size:", "drawDuring:", "clear:", "black", "setFont:", "setPaint:", "red", "scaleBy:", "pathTransform", "translateByX:Y:", "drawString:"],
referencedClasses: ["LogicalFont", "Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step31",
category: 'steps',
fn: function (){
var self=this;
var font;
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
font=_st($LogicalFont())._familyName_size_("Arial",(20));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._black());
_st(canvas)._setFont_(font);
_st(canvas)._setPaint_(_st($Color())._red());
_st(_st(canvas)._pathTransform())._scaleBy_((4));
_st(_st(canvas)._pathTransform())._translateByX_Y_((0),(40));
return _st(canvas)._drawString_("The End!");
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step31",{font:font},smalltalk.AthensTutorial)})},
args: [],
source: "step31\x0a\x09\x22The End!\x22\x0a\x0a\x09| font |\x09\x0a\x09font := LogicalFont familyName: 'Arial' size: 20.\x0a\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09surface clear: Color black.\x0a\x0a\x09\x09canvas setFont: font.\x0a\x09\x09canvas setPaint: Color red.\x0a\x09\x09\x0a\x09\x09canvas pathTransform scaleBy: 4.\x0a\x09\x09canvas pathTransform translateByX: 0 Y: 40.\x0a\x09\x09canvas drawString: 'The End!' ].",
messageSends: ["familyName:size:", "drawDuring:", "clear:", "black", "setFont:", "setPaint:", "red", "scaleBy:", "pathTransform", "translateByX:Y:", "drawString:"],
referencedClasses: ["LogicalFont", "Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step32",
category: 'steps',
fn: function (){
var self=this;
function $AthensVGTigerDemo(){return smalltalk.AthensVGTigerDemo||(typeof AthensVGTigerDemo=="undefined"?nil:AthensVGTigerDemo)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($AthensVGTigerDemo())._instance())._surface_(self["@surface"]);
_st(_st($AthensVGTigerDemo())._instance())._toggle();
return self}, function($ctx1) {$ctx1.fill(self,"step32",{},smalltalk.AthensTutorial)})},
args: [],
source: "step32\x0a\x09\x22Tiger Demo\x22\x0a\x0a\x09AthensVGTigerDemo instance surface: surface.\x0a\x09AthensVGTigerDemo instance toggle.",
messageSends: ["surface:", "instance", "toggle"],
referencedClasses: ["AthensVGTigerDemo"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step4",
category: 'steps',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._black());
_st(canvas)._setPaint_(_st($Color())._green());
_st(canvas)._setShape_(_st((40).__at((40)))._corner_((100).__at((100))));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step4",{},smalltalk.AthensTutorial)})},
args: [],
source: "step4\x0a\x09\x22Step 4: Shapes and paints.\x22\x0a\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09surface clear: Color black. \x0a\x09\x0a\x09\x09\x22There's two objects involved in any draw operation: \x0a\x09\x09- paint\x0a\x09\x09- shape\x0a\x09\x09\x0a\x09\x09The #draw API method simply fills current shape with current paint.\x22\x0a\x09\x0a\x09\x09\x22To set current paint, use #setPaint: method\x22\x0a\x09\x09canvas setPaint: Color green.\x0a\x0a\x09\x09\x22To set current shape use #setShape: method\x22\x0a\x09\x09canvas setShape: (40 @ 40 corner: 100 @ 100).\x0a\x0a\x09\x09\x22Nothing will be drawn until #draw command will be issued:\x22\x0a\x09\x09canvas draw ].",
messageSends: ["drawDuring:", "clear:", "black", "setPaint:", "green", "setShape:", "corner:", "@", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step5",
category: 'steps',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._black());
_st(canvas)._setPaint_(_st($Color())._red());
_st(canvas)._drawShape_(_st((0).__at((0)))._corner_(_st(_st(self["@surface"])._width()).__at((5))));
_st(canvas)._setPaint_(_st($Color())._blue());
return _st(canvas)._drawShape_(_st((0).__at((0)))._corner_((5).__at(_st(self["@surface"])._height())));
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step5",{},smalltalk.AthensTutorial)})},
args: [],
source: "step5\x0a\x09\x22Step 5: Coordinates. \x0a\x0a\x09The initial coordinate space set up to cover entire surface using its dimensions.\x22\x0a\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09surface clear: Color black. \x0a\x0a\x09\x09\x22x axis: goes from left to right\x22\x0a\x09\x09canvas setPaint: Color red.\x0a\x09\x09\x22here we're using #drawShape: convenience method, which is simply setShape: + draw\x22\x0a\x09\x09canvas drawShape: (0 @ 0 corner: surface width @ 5).\x0a\x0a\x09\x09\x22y axis: goes from top to bottom\x22\x0a\x09\x09canvas setPaint: Color blue.\x0a\x09\x09canvas drawShape: (0 @ 0 corner: 5 @ surface height) ].",
messageSends: ["drawDuring:", "clear:", "black", "setPaint:", "red", "drawShape:", "corner:", "@", "width", "blue", "height"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step6",
category: 'steps',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._black());
_st(_st(canvas)._pathTransform())._translateByX_Y_((100),(50));
_st(canvas)._setPaint_(_st($Color())._red());
_st(canvas)._drawShape_(_st((0).__at((0)))._corner_(_st(_st(self["@surface"])._width()).__at((5))));
_st(canvas)._setPaint_(_st($Color())._blue());
return _st(canvas)._drawShape_(_st((0).__at((0)))._corner_((5).__at(_st(self["@surface"])._height())));
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step6",{},smalltalk.AthensTutorial)})},
args: [],
source: "step6\x0a\x09\x22Step 6: Transforming coordinate space.\x0a\x09\x0a\x09There are two transformation matrices which control coordinate space:\x0a\x09   - path transform\x0a\x09   - paint transform\x0a\x09\x0a\x09Both transformations represented by affine transformation matrices.\x0a\x09(See AthensAffineTransform class for details).\x0a\x09\x0a\x09Accessing path transform:\x0a\x09  <canvas> pathTransform\x0a\x09\x0a\x09Accessing paint transform:\x09\x0a\x09  <canvas> paintTransform\x22\x0a\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09surface clear: Color black. \x0a\x0a\x09\x09\x22Here, we're translating the canvas coordinate system origin, \x0a\x09\x09so now it will be at 100@50 in surface's coordinate system\x22\x0a\x09\x0a\x09\x09canvas pathTransform translateByX: 100 Y: 50.\x0a\x09\x09\x0a\x09\x09\x22x axis\x22\x0a\x09\x09canvas setPaint: Color red.\x0a\x09\x09canvas drawShape: (0 @ 0 corner: surface width @ 5).\x0a\x09\x0a\x09\x09\x22y axis\x22\x0a\x09\x09canvas setPaint: Color blue.\x0a\x09\x09canvas drawShape: (0 @ 0 corner: 5 @ surface height) ].",
messageSends: ["drawDuring:", "clear:", "black", "translateByX:Y:", "pathTransform", "setPaint:", "red", "drawShape:", "corner:", "@", "width", "blue", "height"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step7",
category: 'steps',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(canvas)._setShape_(_st((0).__at((0)))._corner_((100).__at((100))));
_st(canvas)._setPaint_(_st($Color())._white());
_st(canvas)._draw();
_st(_st(canvas)._pathTransform())._scaleBy_((2));
_st(canvas)._setPaint_(_st(_st($Color())._yellow())._alpha_((0.3)));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step7",{},smalltalk.AthensTutorial)})},
args: [],
source: "step7\x0a\x09\x22Step 7: Scaling.\x0a\x09\x0a\x09Protocol: \x0a\x09<transform> scaleBy: <scalar/point>\x0a\x09\x0a\x09or:\x0a\x09<transform> scaleByX: <x scale> Y: <y scale>\x22\x0a\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09surface clear: Color gray. \x0a\x0a\x09\x09canvas setShape: (0 @ 0 corner: 100 @ 100).\x0a\x09\x09canvas setPaint: Color white.\x0a\x0a\x09\x09canvas draw.\x0a\x09\x0a\x09\x09\x22try to vary the scale argument to see the difference\x22\x0a\x09\x09canvas pathTransform scaleBy: 2.\x0a\x0a\x09\x09canvas setPaint: (Color yellow alpha: 0.3).\x0a\x09\x09canvas draw\x09].",
messageSends: ["drawDuring:", "clear:", "gray", "setShape:", "corner:", "@", "setPaint:", "white", "draw", "scaleBy:", "pathTransform", "alpha:", "yellow"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step8",
category: 'steps',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(canvas)._setShape_(_st((0).__at((0)))._corner_((100).__at((100))));
_st(canvas)._setPaint_(_st($Color())._blue());
$1=_st(canvas)._pathTransform();
_st($1)._scaleBy_((3));
$2=_st($1)._translateByX_Y_((50),(50));
$2;
_st(canvas)._draw();
_st(canvas)._setPaint_(_st($Color())._yellow());
$3=_st(canvas)._pathTransform();
_st($3)._translateByX_Y_((50),(50));
_st($3)._scaleBy_((0.7).__at((0.5)));
_st($3)._rotateByDegrees_((45));
$4=_st($3)._translateByX_Y_((-50),(-50));
$4;
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step8",{},smalltalk.AthensTutorial)})},
args: [],
source: "step8\x0a\x09\x22Step 8: Rotating.\x0a\x0a\x09Protocol: \x0a\x09<transform> rotateByDegrees: <scalar>\x0a\x09\x0a\x09or:\x0a\x09<transform> rotateByRadians: <scalar>\x22\x0a\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09surface clear: Color gray. \x0a\x0a\x09\x09canvas setShape: (0 @ 0 corner: 100 @ 100).\x0a\x09\x09canvas setPaint: Color blue.\x0a\x0a\x09\x09canvas pathTransform\x0a\x09\x09\x09scaleBy:3;\x0a\x09\x09\x09translateByX: 50 Y: 50.\x0a\x0a\x09\x09canvas draw.\x0a\x09\x09\x0a\x09\x09canvas setPaint: Color yellow.\x0a\x09\x0a\x09\x09canvas pathTransform\x0a\x09\x09\x09translateByX: 50 Y: 50;\x0a\x09\x09\x09scaleBy: 0.7 @ 0.5;\x0a\x09\x09\x0a\x09\x09\x09rotateByDegrees: 45;\x0a\x09\x09\x09\x22You can also use #rotateByRadians: if it fits better for you. \x0a\x09\x09\x09There is no #rotate: because it ambiguous\x22\x0a\x09\x0a\x09\x09\x09translateByX: -50 Y: -50.\x0a\x0a\x09\x09canvas draw ].",
messageSends: ["drawDuring:", "clear:", "gray", "setShape:", "corner:", "@", "setPaint:", "blue", "scaleBy:", "pathTransform", "translateByX:Y:", "draw", "yellow", "rotateByDegrees:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step9",
category: 'steps',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(canvas)._setShape_(_st((0).__at((0)))._corner_((100).__at((100))));
$1=_st(canvas)._pathTransform();
_st($1)._scaleBy_((3));
$2=_st($1)._translateByX_Y_((50),(50));
$2;
_st(_st(canvas)._pathTransform())._restoreAfter_((function(){
return smalltalk.withContext(function($ctx3) {
_st(canvas)._setPaint_(_st($Color())._blue());
$3=_st(canvas)._pathTransform();
_st($3)._translateByX_Y_((50),(50));
_st($3)._rotateByDegrees_((45));
$4=_st($3)._translateByX_Y_((-50),(-50));
$4;
return _st(canvas)._draw();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
_st(canvas)._setPaint_(_st($Color())._yellow());
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step9",{},smalltalk.AthensTutorial)})},
args: [],
source: "step9\x0a\x09\x22Step 9: Saving & restoring transformation.\x0a\x09\x0a\x09Protocol: \x0a\x09<transform> restoreAfter: [ block ]\x22\x0a\x0a\x09surface drawDuring: [ :canvas |\x0a\x09\x09surface clear: Color gray. \x0a\x0a\x09\x09canvas setShape: (0 @ 0 corner: 100 @ 100).\x0a\x0a\x09\x09canvas pathTransform \x0a\x09\x09\x09scaleBy: 3;\x0a\x09\x09\x09translateByX: 50 Y: 50.\x0a\x0a\x09\x09\x22Try to comment #restoreAfter: , to run the code inside without it\x0a\x09\x09and see the difference\x22\x0a\x0a\x09\x09canvas pathTransform restoreAfter: [\x0a\x09\x09\x09canvas setPaint: Color blue.\x0a\x09\x0a\x09\x09\x09canvas pathTransform\x0a\x09\x09\x09\x09translateByX: 50 Y: 50;\x0a\x09\x09\x09\x09rotateByDegrees: 45;\x0a\x09\x09\x09\x09translateByX: -50 Y: -50.\x0a\x0a\x09\x09\x09canvas draw ].\x0a\x0a\x09\x09canvas setPaint: Color yellow.\x0a\x09\x09canvas draw ].",
messageSends: ["drawDuring:", "clear:", "gray", "setShape:", "corner:", "@", "scaleBy:", "pathTransform", "translateByX:Y:", "restoreAfter:", "setPaint:", "blue", "rotateByDegrees:", "draw", "yellow"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);


smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._open();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensTutorial.klass)})},
args: [],
source: "initialize\x0a\x09self open.",
messageSends: ["open"],
referencedClasses: []
}),
smalltalk.AthensTutorial.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'starting',
fn: function (){
var self=this;
var html;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $AthensTutorialWidget(){return smalltalk.AthensTutorialWidget||(typeof AthensTutorialWidget=="undefined"?nil:AthensTutorialWidget)}
return smalltalk.withContext(function($ctx1) { 
html=_st($HTMLCanvas())._onJQuery_("#workspace"._asJQuery());
_st(html)._with_(_st($AthensTutorialWidget())._new());
return self}, function($ctx1) {$ctx1.fill(self,"open",{html:html},smalltalk.AthensTutorial.klass)})},
args: [],
source: "open\x0a\x09|html|\x0a\x09html := HTMLCanvas onJQuery: '#workspace' asJQuery.\x0a\x09html with: AthensTutorialWidget new.",
messageSends: ["onJQuery:", "asJQuery", "with:", "new"],
referencedClasses: ["HTMLCanvas", "AthensTutorialWidget"]
}),
smalltalk.AthensTutorial.klass);


smalltalk.addClass('AthensTutorialWidget', smalltalk.Widget, ['canvasContainer', 'step', 'codeArea', 'tutorial'], 'Athens-HTML-Tutorial');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $AthensTutorial(){return smalltalk.AthensTutorial||(typeof AthensTutorial=="undefined"?nil:AthensTutorial)}
return smalltalk.withContext(function($ctx1) { 
self["@step"]=(1);
self["@tutorial"]=_st($AthensTutorial())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensTutorialWidget)})},
args: [],
source: "initialize\x0a\x09step := 1.\x0a\x09tutorial := AthensTutorial new.",
messageSends: ["new"],
referencedClasses: ["AthensTutorial"]
}),
smalltalk.AthensTutorialWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "nextStep",
category: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@step"]=_st(self["@step"]).__plus((1));
$1=_st(self["@step"]).__gt((32));
if(smalltalk.assert($1)){
self["@step"]=(32);
self["@step"];
};
self._showStep_(self["@step"]);
return self}, function($ctx1) {$ctx1.fill(self,"nextStep",{},smalltalk.AthensTutorialWidget)})},
args: [],
source: "nextStep\x0a\x09step := step + 1.\x0a\x09step > 32\x0a\x09\x09ifTrue: [step := 32].\x0a\x09self showStep: step.",
messageSends: ["+", "ifTrue:", ">", "showStep:"],
referencedClasses: []
}),
smalltalk.AthensTutorialWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previousStep",
category: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@step"]=_st(self["@step"]).__minus((1));
$1=_st(self["@step"]).__lt((1));
if(smalltalk.assert($1)){
self["@step"]=(1);
self["@step"];
};
self._showStep_(self["@step"]);
return self}, function($ctx1) {$ctx1.fill(self,"previousStep",{},smalltalk.AthensTutorialWidget)})},
args: [],
source: "previousStep\x0a\x09step := step - 1.\x0a\x09step < 1\x0a\x09\x09ifTrue: [step := 1].\x0a\x09self showStep: step.",
messageSends: ["-", "ifTrue:", "<", "showStep:"],
referencedClasses: []
}),
smalltalk.AthensTutorialWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$6,$7,$8,$9,$10,$4;
$1=_st(html)._div();
_st($1)._style_("height: 100%; float: left; margin: 50px;");
$2=_st($1)._id_("canvas-container");
self["@canvasContainer"]=$2;
$3=_st(html)._div();
_st($3)._style_("height: 100%;; margin: 50px; display: inline-block;");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self["@codeArea"]=_st(_st(html)._textarea())._style_("width: 100%; height: 350px;");
self["@codeArea"];
$5=_st(html)._input();
_st($5)._type_("button");
_st($5)._class_("btn btn-primary");
_st($5)._style_("margin-right: 10px;");
_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._stepDoIt();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$6=_st($5)._value_("Do it");
$6;
$7=_st(html)._input();
_st($7)._type_("button");
_st($7)._class_("btn btn-primary");
_st($7)._style_("margin-right: 10px;");
_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._previousStep();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$8=_st($7)._value_("Previous step");
$8;
$9=_st(html)._input();
_st($9)._type_("button");
_st($9)._class_("btn btn-primary");
_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._nextStep();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$10=_st($9)._value_("Next step");
return $10;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
self._showStep_((1));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.AthensTutorialWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09canvasContainer := html div\x0a\x09\x09style: 'height: 100%; float: left; margin: 50px;';\x0a\x09\x09id: 'canvas-container'.\x0a\x09html div\x0a\x09\x09style: 'height: 100%;; margin: 50px; display: inline-block;';\x0a\x09\x09with: [\x0a\x09\x09\x09codeArea := html textarea\x0a\x09\x09\x09\x09style: 'width: 100%; height: 350px;'.\x0a\x09\x09\x09html input\x0a\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-primary';\x0a\x09\x09\x09\x09style: 'margin-right: 10px;';\x0a\x09\x09\x09\x09onClick: [self stepDoIt];\x0a\x09\x09\x09\x09value: 'Do it'.\x0a\x09\x09\x09html input\x0a\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-primary';\x0a\x09\x09\x09\x09style: 'margin-right: 10px;';\x0a\x09\x09\x09\x09onClick: [self previousStep];\x0a\x09\x09\x09\x09value: 'Previous step'.\x0a\x09\x09\x09html input\x0a\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-primary';\x0a\x09\x09\x09\x09onClick: [self nextStep];\x0a\x09\x09\x09\x09value: 'Next step'].\x0a\x09self showStep: 1.",
messageSends: ["style:", "div", "id:", "with:", "textarea", "type:", "input", "class:", "onClick:", "stepDoIt", "value:", "previousStep", "nextStep", "showStep:"],
referencedClasses: []
}),
smalltalk.AthensTutorialWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showStep:",
category: 'interactions',
fn: function (anInteger){
var self=this;
var selector;
function $AthensTutorial(){return smalltalk.AthensTutorial||(typeof AthensTutorial=="undefined"?nil:AthensTutorial)}
return smalltalk.withContext(function($ctx1) { 
selector=_st("step".__comma(_st(anInteger)._asString()))._asSymbol();
_st(_st(self["@codeArea"])._asJQuery())._val_(_st(_st($AthensTutorial())._methodAt_(selector))._source());
return self}, function($ctx1) {$ctx1.fill(self,"showStep:",{anInteger:anInteger,selector:selector},smalltalk.AthensTutorialWidget)})},
args: ["anInteger"],
source: "showStep: anInteger\x0a\x09|selector|\x0a\x09selector := ('step', anInteger asString) asSymbol.\x0a\x09codeArea asJQuery\x0a\x09\x09val: (AthensTutorial methodAt: selector) source.",
messageSends: ["asSymbol", ",", "asString", "val:", "asJQuery", "source", "methodAt:"],
referencedClasses: ["AthensTutorial"]
}),
smalltalk.AthensTutorialWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "stepDoIt",
category: 'interactions',
fn: function (){
var self=this;
var selector;
function $AthensTutorial(){return smalltalk.AthensTutorial||(typeof AthensTutorial=="undefined"?nil:AthensTutorial)}
return smalltalk.withContext(function($ctx1) { 
selector=_st("doItstep".__comma(_st(self["@step"])._asString()))._asSymbol();
_st($AthensTutorial())._compile_("doIt".__comma(_st(_st(self["@codeArea"])._asJQuery())._val()));
_st(self["@tutorial"])._perform_(selector);
_st($AthensTutorial())._removeCompiledMethod_(_st($AthensTutorial())._methodAt_(selector));
return self}, function($ctx1) {$ctx1.fill(self,"stepDoIt",{selector:selector},smalltalk.AthensTutorialWidget)})},
args: [],
source: "stepDoIt\x0a\x09|selector|\x0a\x09selector := ('doItstep', step asString) asSymbol.\x0a\x09AthensTutorial compile: 'doIt', codeArea asJQuery val.\x0a\x09tutorial perform: selector.\x0a\x09AthensTutorial removeCompiledMethod: (AthensTutorial methodAt: selector)",
messageSends: ["asSymbol", ",", "asString", "compile:", "val", "asJQuery", "perform:", "removeCompiledMethod:", "methodAt:"],
referencedClasses: ["AthensTutorial"]
}),
smalltalk.AthensTutorialWidget);



smalltalk.addClass('AthensVGTigerDemo', smalltalk.Object, ['surface', 'renderInterval', 'looping', 'frames', 'time'], 'Athens-HTML-Tutorial');
smalltalk.addMethod(
smalltalk.method({
selector: "assert:",
category: 'error handling',
fn: function (aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBool).__tild_tild(true);
if(smalltalk.assert($1)){
self._error_("assertion failed");
};
return self}, function($ctx1) {$ctx1.fill(self,"assert:",{aBool:aBool},smalltalk.AthensVGTigerDemo)})},
args: ["aBool"],
source: "assert: aBool\x0a\x09aBool ~~ true ifTrue: [self error: 'assertion failed'].",
messageSends: ["ifTrue:", "~~", "error:"],
referencedClasses: []
}),
smalltalk.AthensVGTigerDemo);

smalltalk.addMethod(
smalltalk.method({
selector: "clearLoop",
category: 'demo',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 clearInterval(self['@renderInterval']); ;
return self}, function($ctx1) {$ctx1.fill(self,"clearLoop",{},smalltalk.AthensVGTigerDemo)})},
args: [],
source: "clearLoop\x0a\x09< clearInterval(self['@renderInterval']); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensVGTigerDemo);

smalltalk.addMethod(
smalltalk.method({
selector: "convertPathData2",
category: 'data',
fn: function (){
var self=this;
var paths,pathData,cmdStream,ptStream,fillBlocks,strokeBlocks,capBlocks,joinBlocks,cmdBlocks,ctr;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $AthensTigerShape(){return smalltalk.AthensTigerShape||(typeof AthensTigerShape=="undefined"?nil:AthensTigerShape)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
paths=_st($OrderedCollection())._new();
cmdStream=_st(_st(self._class())._commands())._readStream();
ptStream=_st(_st(self._class())._tigerPoints())._readStream();
pathData=nil;
ctr=(0);
fillBlocks=[(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(pathData)._addFill();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$1=pathData;
_st($1)._addFill();
$2=_st($1)._fillRule_("VGEVENODD");
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})})];
strokeBlocks=[(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(pathData)._addStroke();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})})];
capBlocks=[(function(){
return smalltalk.withContext(function($ctx2) {
return _st(pathData)._capStyle_("VGCAPBUTT");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(pathData)._capStyle_("VGCAPROUND");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(pathData)._capStyle_("VGCAPSQUARE");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,8)})})];
joinBlocks=[(function(){
return smalltalk.withContext(function($ctx2) {
return _st(pathData)._joinStyle_("VGJOINMITER");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,9)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(pathData)._joinStyle_("VGJOINROUND");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,10)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(pathData)._joinStyle_("VGJOINBEVEL");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,11)})})];
cmdBlocks=[(function(s){
return smalltalk.withContext(function($ctx2) {
return _st(s)._moveTo_(_st(_st(ptStream)._next()).__at(_st(ptStream)._next()));
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1,12)})}),(function(s){
return smalltalk.withContext(function($ctx2) {
return _st(s)._lineTo_(_st(_st(ptStream)._next()).__at(_st(ptStream)._next()));
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1,13)})}),(function(s){
return smalltalk.withContext(function($ctx2) {
return _st(s)._curveVia_and_to_(_st(_st(ptStream)._next()).__at(_st(ptStream)._next()),_st(_st(ptStream)._next()).__at(_st(ptStream)._next()),_st(_st(ptStream)._next()).__at(_st(ptStream)._next()));
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1,14)})}),(function(s){
return smalltalk.withContext(function($ctx2) {
return _st(s)._close();
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1,15)})})];
_st((function(){
return smalltalk.withContext(function($ctx2) {
pathData=_st($AthensTigerShape())._new();
pathData;
fillBlocks=[(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,17)})}),(function(){
return smalltalk.withContext(function($ctx3) {
$3=pathData;
_st($3)._addFill();
$4=_st($3)._fillRule_("VGNONZERO");
return $4;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,18)})}),(function(){
return smalltalk.withContext(function($ctx3) {
$5=pathData;
_st($5)._addFill();
$6=_st($5)._fillRule_("VGEVENODD");
return $6;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,19)})})];
fillBlocks;
strokeBlocks=[(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,20)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(pathData)._addStroke();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,21)})})];
strokeBlocks;
_st(pathData)._fillRule_("VGNONZERO");
_st(_st(fillBlocks)._at_("NFE"._indexOf_(_st(cmdStream)._next())))._value();
_st(_st(strokeBlocks)._at_("NS"._indexOf_(_st(cmdStream)._next())))._value();
_st(_st(capBlocks)._at_("BRS"._indexOf_(_st(cmdStream)._next())))._value();
_st(_st(joinBlocks)._at_("MRB"._indexOf_(_st(cmdStream)._next())))._value();
_st(pathData)._miterLimit_(_st(ptStream)._next());
_st(pathData)._strokeWidth_(_st(ptStream)._next());
_st(pathData)._strokePaint_(_st($Color())._r_g_b_(_st(ptStream)._next(),_st(ptStream)._next(),_st(ptStream)._next()));
_st(pathData)._fillPaint_(_st($Color())._r_g_b_(_st(ptStream)._next(),_st(ptStream)._next(),_st(ptStream)._next()));
_st(pathData)._setPath_(_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx3) {
_st(builder)._absolute();
return _st(_st(ptStream)._next())._timesRepeat_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(cmdBlocks)._at_("MLCE"._indexOf_(_st(cmdStream)._next())))._value_(builder);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,23)})}));
}, function($ctx3) {$ctx3.fillBlock({builder:builder},$ctx2,22)})})));
_st(paths)._add_(pathData);
ctr=_st(ctr).__plus((1));
ctr;
return _st(cmdStream)._atEnd();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,16)})}))._whileFalse();
_st(paths)._do_((function(ea){
return smalltalk.withContext(function($ctx2) {
self._assert_(_st(_st(ea)._fillRule()).__eq("VGNONZERO"));
return _st(ea)._prepareFor_(self["@surface"]);
}, function($ctx2) {$ctx2.fillBlock({ea:ea},$ctx1,24)})}));
self._assert_(_st(ptStream)._atEnd());
$7=paths;
return $7;
}, function($ctx1) {$ctx1.fill(self,"convertPathData2",{paths:paths,pathData:pathData,cmdStream:cmdStream,ptStream:ptStream,fillBlocks:fillBlocks,strokeBlocks:strokeBlocks,capBlocks:capBlocks,joinBlocks:joinBlocks,cmdBlocks:cmdBlocks,ctr:ctr},smalltalk.AthensVGTigerDemo)})},
args: [],
source: "convertPathData2\x0a\x0a\x09| paths pathData cmdStream ptStream fillBlocks strokeBlocks capBlocks joinBlocks cmdBlocks ctr |\x0a\x09\x0a\x09paths := OrderedCollection new.\x0a\x09cmdStream := self class commands readStream.\x0a\x09ptStream := self class tigerPoints readStream.\x0a\x09pathData := nil.\x0a\x09ctr := 0.\x0a\x09\x0a\x09fillBlocks := { \x0a\x09\x09\x22N\x22 [].\x0a\x09\x09\x22F\x22 [ pathData addFill ].\x0a\x09\x09\x22E\x22 [ pathData addFill; fillRule: #VGEVENODD ] }.\x0a\x0a\x09strokeBlocks := {\x0a\x09\x09\x22N\x22 [].\x0a\x09\x09\x22S\x22 [ pathData addStroke ] }.\x0a\x09\x0a\x09capBlocks := {\x0a\x09\x09\x22B\x22 [ pathData capStyle: #VGCAPBUTT ].\x0a\x09\x09\x22R\x22 [ pathData capStyle: #VGCAPROUND ].\x0a\x09\x09\x22S\x22 [ pathData capStyle: #VGCAPSQUARE ]\x09}.\x0a\x09\x0a\x09joinBlocks := {\x0a\x09\x09\x22M\x22 [ pathData joinStyle: #VGJOINMITER ].\x0a\x09\x09\x22R\x22 [ pathData joinStyle: #VGJOINROUND ].\x0a\x09\x09\x22B\x22 [ pathData joinStyle: #VGJOINBEVEL ] }.\x0a\x09\x09\x0a\x09cmdBlocks := {\x09\x09\x0a\x09\x09\x22M\x22[:s | s moveTo: ptStream next @ ptStream next ].\x0a\x09\x09\x22L\x22 [:s | s lineTo: ptStream next @ ptStream next ].\x0a\x09\x09\x22C\x22\x09[:s | s  \x0a\x09\x09\x09curveVia: (ptStream next @ ptStream next)\x0a\x09\x09\x09and: (ptStream next @ ptStream next)\x0a\x09\x09\x09to: (ptStream next @ ptStream next) ].\x0a\x09\x09\x22E\x22\x09[:s | s close ] }.\x0a\x0a\x09[\x09\x09\x0a\x09\x09pathData := AthensTigerShape new.\x0a\x0a\x09\x09fillBlocks := { \x0a\x09\x09\x09\x22N\x22 [].\x0a\x09\x09\x09\x22F\x22 [ pathData addFill; fillRule: #VGNONZERO.  ].\x0a\x09\x09\x09\x22E\x22 [ pathData addFill; fillRule: #VGEVENODD ] }.\x0a\x0a\x09\x09strokeBlocks := {\x0a\x09\x09\x09\x22N\x22 [].\x0a\x09\x09\x09\x22S\x22 [ pathData addStroke ] }.\x0a\x09\x09\x0a\x0a\x09\x09\x22 fill type \x22\x0a\x09\x09pathData fillRule: #VGNONZERO.\x0a\x09\x09(fillBlocks at: ('NFE' indexOf: cmdStream next)) value.\x0a\x0a\x09\x09\x22 stroke type \x22\x09\x0a\x09\x09(strokeBlocks at: ('NS' indexOf: cmdStream next)) value.\x0a\x0a\x09\x09\x22 line cap \x22\x0a\x09\x09(capBlocks at: ('BRS' indexOf: cmdStream next)) value.\x0a\x09\x0a\x09\x09\x22 line join \x22\x0a\x09\x09(joinBlocks at: ('MRB' indexOf: cmdStream next)) value.\x0a\x09\x0a\x09\x09\x22 the rest of stroke attributes \x22\x0a\x09\x09pathData miterLimit: ptStream next.\x0a\x09\x09pathData strokeWidth: ptStream next.\x0a\x0a\x09\x09\x22 paints \x22\x0a\x09\x09pathData strokePaint: ((Color r: ptStream next g: ptStream next b: ptStream next )).\x0a\x09\x09\x0a\x09\x09pathData fillPaint: ((Color r: ptStream next g: ptStream next b: ptStream next )).\x0a\x09\x09\x0a\x09\x09pathData setPath: (\x0a\x09\x09\x09surface createPath: [:builder |\x0a\x09\x09\x09\x09builder absolute.\x0a\x09\x09\x09\x09(ptStream next) timesRepeat: [\x0a\x09\x09\x09\x09\x09(cmdBlocks at: ('MLCE' indexOf: cmdStream next) ) value: builder.\x0a\x09\x09\x09\x09]\x0a\x09\x09\x09\x09]\x0a\x09\x09).\x0a\x0a\x09\x09paths add: pathData.\x0a\x09\x09ctr := ctr + 1.\x0a\x09\x09cmdStream atEnd\x0a\x09] whileFalse.\x0a\x0a\x09paths do: [:ea |\x0a\x09\x09self assert: ea fillRule = #VGNONZERO.\x09\x0a\x09\x09ea prepareFor: surface\x0a\x09\x09].\x0a\x09\x0a\x09self assert: (ptStream atEnd).\x0a\x09\x0a\x09^ paths",
messageSends: ["new", "readStream", "commands", "class", "tigerPoints", "addFill", "fillRule:", "addStroke", "capStyle:", "joinStyle:", "moveTo:", "@", "next", "lineTo:", "curveVia:and:to:", "close", "whileFalse", "value", "at:", "indexOf:", "miterLimit:", "strokeWidth:", "strokePaint:", "r:g:b:", "fillPaint:", "setPath:", "createPath:", "absolute", "timesRepeat:", "value:", "add:", "+", "atEnd", "do:", "assert:", "=", "fillRule", "prepareFor:"],
referencedClasses: ["OrderedCollection", "AthensTigerShape", "Color"]
}),
smalltalk.AthensVGTigerDemo);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@looping"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensVGTigerDemo)})},
args: [],
source: "initialize\x0a\x09looping := false.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensVGTigerDemo);

smalltalk.addMethod(
smalltalk.method({
selector: "runDemo",
category: 'demo',
fn: function (){
var self=this;
var paths,extent,rotation,scale,translation,rotationSpeed,zoom;
function $Time(){return smalltalk.Time||(typeof Time=="undefined"?nil:Time)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
paths=self._convertPathData2();
rotationSpeed=(1);
rotation=(0);
extent=_st(self["@surface"])._extent();
scale=_st(_st(extent)._x()).__slash(_st(self._class())._tigerMaxY());
translation=(0).__at((0));
self["@frames"]=(0);
self["@looping"]=true;
self["@time"]=_st($Time())._millisecondClockValue();
self._startLoop_((function(){
return smalltalk.withContext(function($ctx2) {
rotation=_st(rotation).__plus(rotationSpeed);
rotation;
self["@frames"]=_st(self["@frames"]).__plus((1));
self["@frames"];
zoom=_st(_st(_st(self["@frames"]).__slash((100)))._sin())._abs();
zoom;
return _st(self["@surface"])._drawDuring_((function(can){
return smalltalk.withContext(function($ctx3) {
_st(_st(can)._pathTransform())._loadIdentity();
$1=can;
_st($1)._setPaint_(_st($Color())._white());
$2=_st($1)._drawShape_(_st((0).__at((0)))._corner_(_st(self["@surface"])._extent()));
$2;
$3=_st(can)._pathTransform();
_st($3)._translateByX_Y_((0.5).__star(_st(_st(extent)._x()).__minus(_st(_st(_st(self._class())._tigerMaxX()).__star(scale)).__star(zoom))),_st(_st(extent)._y()).__slash((-12)));
_st($3)._scaleBy_(_st(scale).__star(zoom));
_st($3)._translateByX_Y_(_st(_st(self._class())._tigerMaxX()).__star((0.5)),_st(_st(self._class())._tigerMaxY()).__star((0.5)));
_st($3)._scaleBy_((0.8));
_st($3)._rotateByDegrees_(rotation);
$4=_st($3)._translateByX_Y_(_st(_st(self._class())._tigerMaxX()).__star((-0.5)),_st(_st(self._class())._tigerMaxY()).__star((-0.5)));
$4;
return _st(paths)._do_((function(each){
return smalltalk.withContext(function($ctx4) {
return _st(each)._renderOn_(can);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({can:can},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"runDemo",{paths:paths,extent:extent,rotation:rotation,scale:scale,translation:translation,rotationSpeed:rotationSpeed,zoom:zoom},smalltalk.AthensVGTigerDemo)})},
args: [],
source: "runDemo\x0a\x09|paths extent rotation scale translation rotationSpeed zoom|\x0a\x09paths := self convertPathData2.\x0a\x0a\x09rotationSpeed := 1.\x0a\x09rotation := 0.\x0a\x09extent := surface extent.\x0a\x09scale := extent x / self class tigerMaxY.\x0a\x09translation := 0@0.\x0a\x09frames := 0.\x0a\x09looping := true.\x0a\x09\x0a\x09time := Time millisecondClockValue.\x0a\x09\x0a\x09self startLoop: [\x0a\x09\x09rotation := rotation + rotationSpeed.\x0a\x09\x09frames := frames + 1.\x0a\x0a\x09\x09zoom := (frames/100) sin abs .\x0a\x09\x09\x0a\x09\x09surface \x0a\x0a\x09\x09\x09drawDuring: [:can |\x0a\x0a\x09\x09\x09\x09can pathTransform \x0a\x09\x09\x09\x09\x09loadIdentity. \x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09can \x0a\x09\x09\x09\x09\x09setPaint: Color white;\x0a\x09\x09\x09\x09\x09drawShape: (0@0 corner: surface extent).\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09can pathTransform \x0a\x09\x09\x09\x09\x09translateByX: (0.5 * (extent x - (self class tigerMaxX * scale*zoom))) Y: extent y / -12.0 ;\x0a\x09\x09\x09\x09\x09scaleBy: scale*zoom ;\x0a\x0a\x09\x09\x09\x09\x09translateByX: (self class tigerMaxX * 0.5) Y: (self class tigerMaxY * 0.5 );\x0a\x09\x09\x09\x09\x09scaleBy: 0.8;\x0a\x09\x09\x09\x09\x09rotateByDegrees: rotation;\x0a\x09\x09\x09\x09\x09translateByX: (self class tigerMaxX * -0.5) Y: (self class tigerMaxY * -0.5 ).\x0a\x0a\x09\x09\x09\x09paths do: [:each | each renderOn: can ].\x0a\x09\x09\x09\x09\x0a\x09\x09\x09].\x0a\x09].",
messageSends: ["convertPathData2", "extent", "/", "x", "tigerMaxY", "class", "@", "millisecondClockValue", "startLoop:", "+", "abs", "sin", "drawDuring:", "loadIdentity", "pathTransform", "setPaint:", "white", "drawShape:", "corner:", "translateByX:Y:", "*", "-", "tigerMaxX", "y", "scaleBy:", "rotateByDegrees:", "do:", "renderOn:"],
referencedClasses: ["Time", "Color"]
}),
smalltalk.AthensVGTigerDemo);

smalltalk.addMethod(
smalltalk.method({
selector: "startLoop:",
category: 'demo',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 clearInterval(self['@renderInterval']);
	self['@renderInterval'] = setInterval(function(){aBlock._value()}, 0); ;
return self}, function($ctx1) {$ctx1.fill(self,"startLoop:",{aBlock:aBlock},smalltalk.AthensVGTigerDemo)})},
args: ["aBlock"],
source: "startLoop: aBlock\x0a\x09< clearInterval(self['@renderInterval']);\x0a\x09self['@renderInterval'] = setInterval(function(){aBlock._value()}, 0); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensVGTigerDemo);

smalltalk.addMethod(
smalltalk.method({
selector: "stopDemo",
category: 'demo',
fn: function (){
var self=this;
function $Time(){return smalltalk.Time||(typeof Time=="undefined"?nil:Time)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._clearLoop();
self["@looping"]=false;
self["@time"]=_st(_st($Time())._millisecondClockValue()).__minus(self["@time"]);
$1=$Transcript();
_st($1)._show_(_st(_st(_st(_st("Total rendering time: ".__comma(_st(self["@time"])._asString())).__comma(" ms, total frames: ")).__comma(_st(self["@frames"])._asString())).__comma(", FPS: ")).__comma(_st(_st((1000).__star(self["@frames"])).__slash(self["@time"]))._asString()));
$2=_st($1)._cr();
return self}, function($ctx1) {$ctx1.fill(self,"stopDemo",{},smalltalk.AthensVGTigerDemo)})},
args: [],
source: "stopDemo\x0a\x09self clearLoop.\x0a\x09looping := false.\x0a\x09\x0a\x09time := Time millisecondClockValue - time.\x0a\x09Transcript show: 'Total rendering time: ', time asString,  ' ms, total frames: ', frames asString, ', FPS: ' , (1000*frames/time) asString; cr.",
messageSends: ["clearLoop", "-", "millisecondClockValue", "show:", ",", "asString", "/", "*", "cr"],
referencedClasses: ["Time", "Transcript"]
}),
smalltalk.AthensVGTigerDemo);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
category: 'accessing',
fn: function (anHTMLSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=anHTMLSurface;
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{anHTMLSurface:anHTMLSurface},smalltalk.AthensVGTigerDemo)})},
args: ["anHTMLSurface"],
source: "surface: anHTMLSurface\x0a\x09surface := anHTMLSurface.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensVGTigerDemo);

smalltalk.addMethod(
smalltalk.method({
selector: "toggle",
category: 'demo',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@looping"];
if(smalltalk.assert($1)){
self._stopDemo();
} else {
self._runDemo();
};
return self}, function($ctx1) {$ctx1.fill(self,"toggle",{},smalltalk.AthensVGTigerDemo)})},
args: [],
source: "toggle\x0a\x09looping\x0a\x09\x09ifTrue: [self stopDemo]\x0a\x09\x09ifFalse: [self runDemo].",
messageSends: ["ifTrue:ifFalse:", "stopDemo", "runDemo"],
referencedClasses: []
}),
smalltalk.AthensVGTigerDemo);


smalltalk.AthensVGTigerDemo.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "checkDataSizes",
category: 'tiger',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self._commands())._size()).__eq(self._tigerCommandCount()));
self._assert_(_st(self._tigerPointsCount()).__eq(_st(self._tigerPoints())._size()));
return self}, function($ctx1) {$ctx1.fill(self,"checkDataSizes",{},smalltalk.AthensVGTigerDemo.klass)})},
args: [],
source: "checkDataSizes\x0a\x09self assert: (self commands size = self tigerCommandCount).\x0a\x09self assert: (self tigerPointsCount = self tigerPoints size).",
messageSends: ["assert:", "=", "size", "commands", "tigerCommandCount", "tigerPointsCount", "tigerPoints"],
referencedClasses: []
}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "commands",
category: 'tiger',
fn: function (){
var self=this;
var str;
return smalltalk.withContext(function($ctx1) { 
var $1;
str="";
_st(self._tigerCommands())._do_((function(sub){
return smalltalk.withContext(function($ctx2) {
str=_st(str).__comma(sub);
return str;
}, function($ctx2) {$ctx2.fillBlock({sub:sub},$ctx1,1)})}));
$1=str;
return $1;
}, function($ctx1) {$ctx1.fill(self,"commands",{str:str},smalltalk.AthensVGTigerDemo.klass)})},
args: [],
source: "commands\x0a\x09|str|\x0a\x09\x0a\x09str := ''.\x0a\x09\x0a\x09\x22merge everything into a single string\x22\x0a\x09self tigerCommands do: [:sub | str := str, sub].\x0a\x0a\x09^ str",
messageSends: ["do:", "tigerCommands", ","],
referencedClasses: []
}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "instance",
category: 'singleton',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@instance"];
if(($receiver = $1) == nil || $receiver == null){
self["@instance"]=self._new();
self["@instance"];
} else {
$1;
};
$2=self["@instance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"instance",{},smalltalk.AthensVGTigerDemo.klass)})},
args: [],
source: "instance\x0a\x09instance ifNil: [instance := self new].\x0a\x09^ instance",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "runDemo",
category: 'tiger',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instance())._runDemo();
return $1;
}, function($ctx1) {$ctx1.fill(self,"runDemo",{},smalltalk.AthensVGTigerDemo.klass)})},
args: [],
source: "runDemo\x0a\x09^ self instance runDemo",
messageSends: ["runDemo", "instance"],
referencedClasses: []
}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stopDemo",
category: 'tiger',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instance())._stopDemo();
return $1;
}, function($ctx1) {$ctx1.fill(self,"stopDemo",{},smalltalk.AthensVGTigerDemo.klass)})},
args: [],
source: "stopDemo\x0a\x09^ self instance stopDemo",
messageSends: ["stopDemo", "instance"],
referencedClasses: []
}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tigerCommandCount",
category: 'tiger',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (4142);
}, function($ctx1) {$ctx1.fill(self,"tigerCommandCount",{},smalltalk.AthensVGTigerDemo.klass)})},
args: [],
source: "tigerCommandCount \x0a\x09^ 4142",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tigerCommands",
category: 'tiger',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["FNBMMCCCENS", "BMMCCCEFNBMMCCCENSBM", "MCCCEFNBMMCCCENSBMMC", "CCEFNBMMCCCENSBMMCCC", "EFNBMMCCCENSBMMCCCEF", "NBMMCCCENSBMMCCCEFNB", "MMCCCENSBMMCCCEFNBMM", "CCCENSBMMCCCEFNBMMCC", "CENSBMMCCCEFNBMMCCCE", "NSBMMCCCEFNBMMCCCENS", "BMMCCCEFNBMMCCCENSBM", "MCCCEFNBMMCCCCCCCCLC", "LCLCCCCCLCCLCCCCCCCL", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCLLCCLCCCC", "LCCCCCCCCCCCCCCCLNSB", "MMCCCCCCCCLCLCLCCCCC", "LCCLCCCCCCCLCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCLLCCLCCCCLCCCCCCC", "CCCCCCCCLFNBMMCCCCCC", "LCLCCCCCCCCCCCCLCCCC", "CCCCCCCCCCCCCCCCENSB", "MMCCCCCCLCLCCCCCCCCC", "CCCLCCCCCCCCCCCCCCCC", "CCCCEFNBMMCCCCLCCCCC", "CCCCCCLFNBMMCCCCCCCC", "LCCCCLCCCEFNBMMCCCCC", "CCCLCCCCLCCCEFNBMMCC", "CCCCCCLCCCCLCCCEFNBM", "MCCCCCCCCLCCCCLCCCEF", "NBMMCCCCCCCCLCCCCLCC", "CEFNBMMCCCCCCCCLCCCC", "LCCCEFNBMMCCCCCCCCLC", "CCCLCCCEFNBMMCCCCCCC", "CLCCCCLCCCEFNBMMCCCC", "CCCCLCCCCLCCCEFNBMMC", "CCCCCCCLCCCCLCCCEFNB", "MMCCCCLCCCCCCCCCCCLF", "NBMMCCCCCEFNBMMCCCCC", "CEFNRMMCLCLCCCCLCLCC", "EFNRMMCCCEFNRMMCCCEF", "NRMMCCCEFNRMMCCCEFNR", "MMCCCEFNRMMLCCCCCCCC", "CCCCCCCCCCCCCLFNBMMC", "CCLLCCCCCCCCEFNBMMCC", "CCCCEFNBMMCCCCLFNBMM", "CCCCCCCCCCCEFNBMMCCC", "LCCCCCCENSBMMCCCLCCC", "CCCEFNBMMCCCCCENSBMM", "CCCCCEFNBMMCCCCCCCEN", "SBMMCCFNBMMCCCENSBMM", "CCCEFNBMMCCCENSBMMCC", "CEFNBMMCCCENSBMMCCCE", "FNBMMCCCENSBMMCCCEFN", "BMMCCCENSBMMCCCEFNBM", "MCCCENSBMMCCCENSBMMC", "CCNSBMMCCCFNBMMCCCCC", "ENSBMMCCCCCENSBMMCNS", "BMMCFNBMMCCCCEFNBMMC", "CCCCENSBMMCCCCCEFNBM", "MCCCCCENSBMMCCCCCEFN", "BMMCCCCENSBMMCCCCEFN", "BMMCCCCCCCCEFNBMMCCC", "CENSBMMCCCCEFNBMMCCC", "ENSBMMCCCEFNBMMCCCEN", "SBMMCCCEFNBMMCCCENSB", "MMCCCEFNBMMCCCENSBMM", "CCCEFNBMMLCCCLFNBMMC", "CCCCEFNBMMCCCCCCCCEF", "NBMMCCCCCCCCEFNBMMCC", "CCCCCCEFNBMMCCCCCCCC", "EFNBMMCCCCCCCCEFNBMM", "CCCCCCCCEFNBMMCCCCEF", "NBMMCCCCLCCCCEFNBMMC", "CCCEFNBMMCCCCEFNBMMC", "CEFNBMMCCCCEFNBMMCCC", "CCLCCCCLCCEFNBMMCCCC", "CLCCCCLCCEFNBMMCCLCC", "CCLCCCCCEFNBMMCCLCCC", "CLCCCCCEFNBMMCCLCCCC", "LCCCCCEFNBMMCCCCCLCC", "CCLCCEFNBMMCCCEFNBMM", "CCCEFNBMMCCCEFNBMMCC", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "EFNBMMCCCCLCCCCCLFNB", "MMCCCCCCEFNBMMCCCCCC", "EFNBMMCCCCCCEFNBMMCC", "CCCCEFNBMMCCCCCCEFNB", "MMCCCCCCEFNBMMCCCCCL", "CCCCCCCCCCCCCCCCLFNR", "MMCCCEFNRMMCCLLCEFNR", "MMCCCEFNRMMCCCCEFNRM", "MCCCEFNBMMCLLLCCCCCC", "CCCCCCCCCLCCCCCLCCCC", "CCCCLCCCLLCLCCCCCCCC", "CCCCCCCCLCCEFNBMMCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCEFNBMMCCCCC", "CCCCCCEFNBMMCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCEFNBMMCCCCCC", "CCCCCCCCCCCCCCCEFNBM", "MCCCCCCCCCCCCCCCCCCC", "CCCCEFNBMMCCCCCCCCEF", "NBMMCCCCEFNBMMCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCLCCCCCCCCLLLCCCCC", "CLLCCCCCCLLLLNSRMMCC", "NSRMMCCNSRMMCCCNSRMM", "CCCFNBMMCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCLCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCLCCCCCCCCCCCCCCCCL", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCEFNRM", "MCCCCCEFNBMMCCCCEFNB", "MMCCCCEFNBMMCCCCEFNB", "MMCCCCCCCCCCCLCCCEFN", "BMMCCCCCCCCCCCCEFNBM", "MCCCCCCCCCCCCFNBMMCC", "CCCCCCCCCCCCCCCCLFNB", "MMCCCCLFNBMMCLCCCCCC", "CCCEFNBMMCCCCCCCCCCC", "CCCCCCCCCCCCCCCEFNBM", "MCCCCCCCCCCCCCCCCCEF", "NBMMCCCCCCCCCCCCCCCC", "CCCEFNBMMCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "EFNBMMCCCLCCCCCCCCCL", "LCCCCLLCCCCCCLCFNBMM", "CLCCEFNBMMCCCCCEFNBM", "MCCCLCCCCLFNBMMCCCCC", "CEFNBMMCCCCCCCCCCCCC", "CCCCCCCCCEFNBMMCCCCC", "CCCCEFNBMMCCCCCCCCCC", "CCCEFNBMMCCCCCCCCCEF", "NBMMCCCCCCCCCEFNBMMC", "CCCCCCCCEFNBMMCCLFNB", "MMCCLFNBMMCCLFNBMMCC", "LFNBMMCCLFNBMMCCLFNB", "MMCCLFNBMMCCLFNBMMCC", "LFNBMMCCLFNBMMCCLFNB", "MMCCLFNBMMCCLFNBMMCC", "LFNBMMCCLFNBMMCCLFNB", "MMCCCEFNBMMCCCEFNBMM", "LLCCEFNBMMCCCCCCCCCC", "CCCCCCCCCCCCCCCCEFNB", "MMCCCCCCCCCEFNRMMCCC", "ENSRMMCCCEFNRMMCCCEN", "SRMMCCCEFNRMMCCCENSR", "MMCCCEFNRMMCCCENSRMM", "CCCEFNRMMCCCENSRMMCC", "CEFNRMMCCCENSRMMCCCE", "FNRMMCCCENSRMMCCCEFN", "RMMCCCENSRMMCCCEFNBM", "MCCCCCCCCCEFNBMMCCCC", "CCCCCEFNBMMCCLFNBMMC", "CLFNBMMCCLFNBMMCCLFN", "BMMCCLFNBMMCCLFNBMMC", "CLFNBMMCCLFNBMMCCLFN", "RMMCCCENSRMMCCCEFNBM", "MCCCCCCCCEFNRMMCCCEN", "SRMMCCCEFNRMMCCCENSR", "MMCCCEFNRMMCCCENSRMM", "CCCEFNRMMCCCENSRMMCC", "CEFNRMMCCCENSRMMCCCE", "FNRMMCCCENSRMMCCCEFN", "RMMCCCENSRMMCCCEFNRM", "MCCCENSRMMCCCEFNRMMC", "CCENSRMMCCCEFNRMMCCC", "ENSRMMCCCEFNRMMCCCEN", "SRMMCCCEFNRMMCCCENSR", "MMCCCEFNRMMCCCENSRMM", "CCCEFNRMMCCCENSRMMCC", "CEFNRMMCCCENSRMMCCCE", "FNRMMCCCENSRMMCCCEFN", "RMMCCCENSRMMCCCEFNRM", "MCCCENSRMMCCCEFNRMMC", "CCENSRMMCCCEFNRMMCCC", "ENSRMMCCCEFNRMMCCCEN", "SRMMCCCEFNRMMCCCENSR", "MMCCCEFNRMMCCCENSRMM", "CCCEFNRMMCCCENSRMMCC", "CEFNRMMCCCENSRMMCCCE", "FNBMMCCLFNBMMCCLFNBM", "MCCLFNBMMCCLFNBMMCCL", "FNBMMCCLFNRMMCCCEFNR", "MMCCCCCCCEFNRMMCCCCC", "CCEFNRMMCCCCCCCCCEFN", "RMMCCCCCEFNRMMCCCCCC", "CCEFNRMMCCCCEFNRMMCC", "CCCCCCCCCCCCCCCEFNRM", "MCCCCEFNRMMCCCEFNRMM", "CCCEFNRMMCCCEFNRMMCC", "CCCCEFNRMMCCCEFNRMMC", "CCCEFNRMMCCCCEFNRMMC", "CEFNRMMCCCCEFNRMMCCC", "EFNRMMCCCEFNRMMCCCEF", "NRMMLCLNSRMMLNSRMMCN", "SRMMCNSRMMC"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"tigerCommands",{},smalltalk.AthensVGTigerDemo.klass)})},
args: [],
source: "tigerCommands\x0a\x0a\x09^ #(\x0a'FNBMMCCCENS'\x0a'BMMCCCEFNBMMCCCENSBM'\x0a'MCCCEFNBMMCCCENSBMMC'\x0a'CCEFNBMMCCCENSBMMCCC'\x0a'EFNBMMCCCENSBMMCCCEF'\x0a'NBMMCCCENSBMMCCCEFNB'\x0a'MMCCCENSBMMCCCEFNBMM'\x0a'CCCENSBMMCCCEFNBMMCC'\x0a'CENSBMMCCCEFNBMMCCCE'\x0a'NSBMMCCCEFNBMMCCCENS'\x0a'BMMCCCEFNBMMCCCENSBM'\x0a'MCCCEFNBMMCCCCCCCCLC'\x0a'LCLCCCCCLCCLCCCCCCCL'\x0a'CCCCCCCCCCCCCCCCCCCC'\x0a'CCCCCCCCCCCLLCCLCCCC'\x0a'LCCCCCCCCCCCCCCCLNSB'\x0a'MMCCCCCCCCLCLCLCCCCC'\x0a'LCCLCCCCCCCLCCCCCCCC'\x0a'CCCCCCCCCCCCCCCCCCCC'\x0a'CCCLLCCLCCCCLCCCCCCC'\x0a'CCCCCCCCLFNBMMCCCCCC'\x0a'LCLCCCCCCCCCCCCLCCCC'\x0a'CCCCCCCCCCCCCCCCENSB'\x0a'MMCCCCCCLCLCCCCCCCCC'\x0a'CCCLCCCCCCCCCCCCCCCC'\x0a'CCCCEFNBMMCCCCLCCCCC'\x0a'CCCCCCLFNBMMCCCCCCCC'\x0a'LCCCCLCCCEFNBMMCCCCC'\x0a'CCCLCCCCLCCCEFNBMMCC'\x0a'CCCCCCLCCCCLCCCEFNBM'\x0a'MCCCCCCCCLCCCCLCCCEF'\x0a'NBMMCCCCCCCCLCCCCLCC'\x0a'CEFNBMMCCCCCCCCLCCCC'\x0a'LCCCEFNBMMCCCCCCCCLC'\x0a'CCCLCCCEFNBMMCCCCCCC'\x0a'CLCCCCLCCCEFNBMMCCCC'\x0a'CCCCLCCCCLCCCEFNBMMC'\x0a'CCCCCCCLCCCCLCCCEFNB'\x0a'MMCCCCLCCCCCCCCCCCLF'\x0a'NBMMCCCCCEFNBMMCCCCC'\x0a'CEFNRMMCLCLCCCCLCLCC'\x0a'EFNRMMCCCEFNRMMCCCEF'\x0a'NRMMCCCEFNRMMCCCEFNR'\x0a'MMCCCEFNRMMLCCCCCCCC'\x0a'CCCCCCCCCCCCCLFNBMMC'\x0a'CCLLCCCCCCCCEFNBMMCC'\x0a'CCCCEFNBMMCCCCLFNBMM'\x0a'CCCCCCCCCCCEFNBMMCCC'\x0a'LCCCCCCENSBMMCCCLCCC'\x0a'CCCEFNBMMCCCCCENSBMM'\x0a'CCCCCEFNBMMCCCCCCCEN'\x0a'SBMMCCFNBMMCCCENSBMM'\x0a'CCCEFNBMMCCCENSBMMCC'\x0a'CEFNBMMCCCENSBMMCCCE'\x0a'FNBMMCCCENSBMMCCCEFN'\x0a'BMMCCCENSBMMCCCEFNBM'\x0a'MCCCENSBMMCCCENSBMMC'\x0a'CCNSBMMCCCFNBMMCCCCC'\x0a'ENSBMMCCCCCENSBMMCNS'\x0a'BMMCFNBMMCCCCEFNBMMC'\x0a'CCCCENSBMMCCCCCEFNBM'\x0a'MCCCCCENSBMMCCCCCEFN'\x0a'BMMCCCCENSBMMCCCCEFN'\x0a'BMMCCCCCCCCEFNBMMCCC'\x0a'CENSBMMCCCCEFNBMMCCC'\x0a'ENSBMMCCCEFNBMMCCCEN'\x0a'SBMMCCCEFNBMMCCCENSB'\x0a'MMCCCEFNBMMCCCENSBMM'\x0a'CCCEFNBMMLCCCLFNBMMC'\x0a'CCCCEFNBMMCCCCCCCCEF'\x0a'NBMMCCCCCCCCEFNBMMCC'\x0a'CCCCCCEFNBMMCCCCCCCC'\x0a'EFNBMMCCCCCCCCEFNBMM'\x0a'CCCCCCCCEFNBMMCCCCEF'\x0a'NBMMCCCCLCCCCEFNBMMC'\x0a'CCCEFNBMMCCCCEFNBMMC'\x0a'CEFNBMMCCCCEFNBMMCCC'\x0a'CCLCCCCLCCEFNBMMCCCC'\x0a'CLCCCCLCCEFNBMMCCLCC'\x0a'CCLCCCCCEFNBMMCCLCCC'\x0a'CLCCCCCEFNBMMCCLCCCC'\x0a'LCCCCCEFNBMMCCCCCLCC'\x0a'CCLCCEFNBMMCCCEFNBMM'\x0a'CCCEFNBMMCCCEFNBMMCC'\x0a'CCCCCCCCCCCCCCCCCCCC'\x0a'CCCCCCCCCCCCCCCCCCCC'\x0a'EFNBMMCCCCLCCCCCLFNB'\x0a'MMCCCCCCEFNBMMCCCCCC'\x0a'EFNBMMCCCCCCEFNBMMCC'\x0a'CCCCEFNBMMCCCCCCEFNB'\x0a'MMCCCCCCEFNBMMCCCCCL'\x0a'CCCCCCCCCCCCCCCCLFNR'\x0a'MMCCCEFNRMMCCLLCEFNR'\x0a'MMCCCEFNRMMCCCCEFNRM'\x0a'MCCCEFNBMMCLLLCCCCCC'\x0a'CCCCCCCCCLCCCCCLCCCC'\x0a'CCCCLCCCLLCLCCCCCCCC'\x0a'CCCCCCCCLCCEFNBMMCCC'\x0a'CCCCCCCCCCCCCCCCCCCC'\x0a'CCCCCCCCCEFNBMMCCCCC'\x0a'CCCCCCEFNBMMCCCCCCCC'\x0a'CCCCCCCCCCCCCCCCCCCC'\x0a'CCCCCCCCEFNBMMCCCCCC'\x0a'CCCCCCCCCCCCCCCEFNBM'\x0a'MCCCCCCCCCCCCCCCCCCC'\x0a'CCCCEFNBMMCCCCCCCCEF'\x0a'NBMMCCCCEFNBMMCCCCCC'\x0a'CCCCCCCCCCCCCCCCCCCC'\x0a'CCCCCCCCCCCCCCCCCCCC'\x0a'CCCLCCCCCCCCLLLCCCCC'\x0a'CLLCCCCCCLLLLNSRMMCC'\x0a'NSRMMCCNSRMMCCCNSRMM'\x0a'CCCFNBMMCCCCCCCCCCCC'\x0a'CCCCCCCCCCCCCCCCCCCC'\x0a'CCCCCCCCCCLCCCCCCCCC'\x0a'CCCCCCCCCCCCCCCCCCCC'\x0a'CCLCCCCCCCCCCCCCCCCL'\x0a'CCCCCCCCCCCCCCCCCCCC'\x0a'CCCCCCCCCCCCCCCCCCCC'\x0a'CCCCCCCCCCCCCCCCCCCC'\x0a'CCCCCCCCCCCCCCCEFNRM'\x0a'MCCCCCEFNBMMCCCCEFNB'\x0a'MMCCCCEFNBMMCCCCEFNB'\x0a'MMCCCCCCCCCCCLCCCEFN'\x0a'BMMCCCCCCCCCCCCEFNBM'\x0a'MCCCCCCCCCCCCFNBMMCC'\x0a'CCCCCCCCCCCCCCCCLFNB'\x0a'MMCCCCLFNBMMCLCCCCCC'\x0a'CCCEFNBMMCCCCCCCCCCC'\x0a'CCCCCCCCCCCCCCCEFNBM'\x0a'MCCCCCCCCCCCCCCCCCEF'\x0a'NBMMCCCCCCCCCCCCCCCC'\x0a'CCCEFNBMMCCCCCCCCCCC'\x0a'CCCCCCCCCCCCCCCCCCCC'\x0a'CCCCCCCCCCCCCCCCCCCC'\x0a'CCCCCCCCCCCCCCCCCCCC'\x0a'EFNBMMCCCLCCCCCCCCCL'\x0a'LCCCCLLCCCCCCLCFNBMM'\x0a'CLCCEFNBMMCCCCCEFNBM'\x0a'MCCCLCCCCLFNBMMCCCCC'\x0a'CEFNBMMCCCCCCCCCCCCC'\x0a'CCCCCCCCCEFNBMMCCCCC'\x0a'CCCCEFNBMMCCCCCCCCCC'\x0a'CCCEFNBMMCCCCCCCCCEF'\x0a'NBMMCCCCCCCCCEFNBMMC'\x0a'CCCCCCCCEFNBMMCCLFNB'\x0a'MMCCLFNBMMCCLFNBMMCC'\x0a'LFNBMMCCLFNBMMCCLFNB'\x0a'MMCCLFNBMMCCLFNBMMCC'\x0a'LFNBMMCCLFNBMMCCLFNB'\x0a'MMCCLFNBMMCCLFNBMMCC'\x0a'LFNBMMCCLFNBMMCCLFNB'\x0a'MMCCCEFNBMMCCCEFNBMM'\x0a'LLCCEFNBMMCCCCCCCCCC'\x0a'CCCCCCCCCCCCCCCCEFNB'\x0a'MMCCCCCCCCCEFNRMMCCC'\x0a'ENSRMMCCCEFNRMMCCCEN'\x0a'SRMMCCCEFNRMMCCCENSR'\x0a'MMCCCEFNRMMCCCENSRMM'\x0a'CCCEFNRMMCCCENSRMMCC'\x0a'CEFNRMMCCCENSRMMCCCE'\x0a'FNRMMCCCENSRMMCCCEFN'\x0a'RMMCCCENSRMMCCCEFNBM'\x0a'MCCCCCCCCCEFNBMMCCCC'\x0a'CCCCCEFNBMMCCLFNBMMC'\x0a'CLFNBMMCCLFNBMMCCLFN'\x0a'BMMCCLFNBMMCCLFNBMMC'\x0a'CLFNBMMCCLFNBMMCCLFN'\x0a'RMMCCCENSRMMCCCEFNBM'\x0a'MCCCCCCCCEFNRMMCCCEN'\x0a'SRMMCCCEFNRMMCCCENSR'\x0a'MMCCCEFNRMMCCCENSRMM'\x0a'CCCEFNRMMCCCENSRMMCC'\x0a'CEFNRMMCCCENSRMMCCCE'\x0a'FNRMMCCCENSRMMCCCEFN'\x0a'RMMCCCENSRMMCCCEFNRM'\x0a'MCCCENSRMMCCCEFNRMMC'\x0a'CCENSRMMCCCEFNRMMCCC'\x0a'ENSRMMCCCEFNRMMCCCEN'\x0a'SRMMCCCEFNRMMCCCENSR'\x0a'MMCCCEFNRMMCCCENSRMM'\x0a'CCCEFNRMMCCCENSRMMCC'\x0a'CEFNRMMCCCENSRMMCCCE'\x0a'FNRMMCCCENSRMMCCCEFN'\x0a'RMMCCCENSRMMCCCEFNRM'\x0a'MCCCENSRMMCCCEFNRMMC'\x0a'CCENSRMMCCCEFNRMMCCC'\x0a'ENSRMMCCCEFNRMMCCCEN'\x0a'SRMMCCCEFNRMMCCCENSR'\x0a'MMCCCEFNRMMCCCENSRMM'\x0a'CCCEFNRMMCCCENSRMMCC'\x0a'CEFNRMMCCCENSRMMCCCE'\x0a'FNBMMCCLFNBMMCCLFNBM'\x0a'MCCLFNBMMCCLFNBMMCCL'\x0a'FNBMMCCLFNRMMCCCEFNR'\x0a'MMCCCCCCCEFNRMMCCCCC'\x0a'CCEFNRMMCCCCCCCCCEFN'\x0a'RMMCCCCCEFNRMMCCCCCC'\x0a'CCEFNRMMCCCCEFNRMMCC'\x0a'CCCCCCCCCCCCCCCEFNRM'\x0a'MCCCCEFNRMMCCCEFNRMM'\x0a'CCCEFNRMMCCCEFNRMMCC'\x0a'CCCCEFNRMMCCCEFNRMMC'\x0a'CCCEFNRMMCCCCEFNRMMC'\x0a'CEFNRMMCCCCEFNRMMCCC'\x0a'EFNRMMCCCEFNRMMCCCEF'\x0a'NRMMLCLNSRMMLNSRMMCN'\x0a'SRMMCNSRMMC' ).",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tigerMaxX",
category: 'tiger',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (612);
}, function($ctx1) {$ctx1.fill(self,"tigerMaxX",{},smalltalk.AthensVGTigerDemo.klass)})},
args: [],
source: "tigerMaxX \x0a\x09^ 612.0",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tigerMaxY",
category: 'tiger',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (792);
}, function($ctx1) {$ctx1.fill(self,"tigerMaxY",{},smalltalk.AthensVGTigerDemo.klass)})},
args: [],
source: "tigerMaxY \x0a\x09^ 792.0",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tigerMinX",
category: 'tiger',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"tigerMinX",{},smalltalk.AthensVGTigerDemo.klass)})},
args: [],
source: "tigerMinX \x0a\x09^ 0.0",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tigerMinY",
category: 'tiger',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"tigerMinY",{},smalltalk.AthensVGTigerDemo.klass)})},
args: [],
source: "tigerMinY \x0a\x09^ 0.0",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tigerPointsCount",
category: 'tiger',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (16988);
}, function($ctx1) {$ctx1.fill(self,"tigerPointsCount",{},smalltalk.AthensVGTigerDemo.klass)})},
args: [],
source: "tigerPointsCount \x0a\x09^ 16988",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensVGTigerDemo.klass);

});
