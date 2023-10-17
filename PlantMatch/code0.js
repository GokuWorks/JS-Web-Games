gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDBlankPlayingCardObjects1= [];
gdjs.Untitled_32sceneCode.GDBlankPlayingCardObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBlankPlayingCardObjects1Objects = Hashtable.newFrom({"BlankPlayingCard": gdjs.Untitled_32sceneCode.GDBlankPlayingCardObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlankPlayingCard"), gdjs.Untitled_32sceneCode.GDBlankPlayingCardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBlankPlayingCardObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBlankPlayingCardObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBlankPlayingCardObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBlankPlayingCardObjects1[i].getBehavior("ThreeDFlip").Flip(750, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDBlankPlayingCardObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlankPlayingCardObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
