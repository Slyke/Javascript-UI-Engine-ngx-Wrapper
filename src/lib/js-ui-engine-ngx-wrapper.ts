import * as JSUI from 'js-ui-engine';
import { ObjectModel } from './object.model';
import { StyleModel } from './style.model';

const _versionNumber: string = "1.20170406.1";

export class JSUIEngine {

    private jsuiEngine: any;

    public canvasContext: any;
    public canvasObject: any;
    public canvasObjects: Array<{}> = [];

    constructor() {
        this.jsuiEngine = new JSUI();
    }

    public debug(): any {
        return {
            "_version": () => { return this.jsuiEngine.debug._version; },
            "_wrapperVersion": () => { return _versionNumber; },
            "setLevel": this.jsuiEngine.debug.setLevel,
            "getLevel": this.jsuiEngine.debug.getLevel,
            "toggle": this.jsuiEngine.debug.toggle,
            "getToggleConst": this.jsuiEngine.debug.getToggleConst
        };
    }

    public setupCanvas(objCanvas: any, objectList?:Array<ObjectModel>, backgroundObject?: any): any {
        objectList = (objectList ? objectList : this.canvasObjects);
        this.canvasObject = objCanvas;
        this.canvasContext = this.jsuiEngine.setupCanvas(this.canvasObject, objectList, backgroundObject);

        return this.canvasContext;
    }

    public renderObjects(objectList?:Array<ObjectModel>):boolean {
        objectList = (objectList ? objectList : this.canvasObjects);
        return this.jsuiEngine.renderObjects (objectList);
    }

    public drawRect(x: number, y: number, w: number, h: number, renderType?: any, context?: any, style?: StyleModel):void {
        this.jsuiEngine.drawRect(x, y, w, h, renderType, context, style);
    }

    public drawText(x: number, y: number, text: string, self: any, renderText?: any, context?: any, style?: StyleModel):void {
        this.jsuiEngine.drawText(x, y, text, self, renderText, context, style);
    }

    public drawArc(x: number, y: number, r: number, s: number = 0, f: number = (4 * Math.PI), renderType?: any, context?: any, style?: StyleModel):void {
        this.jsuiEngine.drawArc(x, y, r, s, f, renderType, context, style);
    }

    public drawLine(x1: number, y1: number, x2: number, y2: number, context?: any, style?: StyleModel):void {
        this.jsuiEngine.drawLine(x1, y1, x2, y2, context, style);
    }

    public drawPolygon(polygonPoints: Array<[number]>, autoArrange: boolean, renderType?: any, context?: any, style?: StyleModel):void {
        this.jsuiEngine.drawPolygon(polygonPoints, autoArrange, renderType, context, style);
    }

    public drawImage(srcImage: string, x: number, y: number, w?: number, h?: number, sx?: number, sy?: number, sw?: number, sh?: number, context?: any):void {
        this.jsuiEngine.drawImage(srcImage, x, y, w, h, sx, sy, sw, sh, context);
    }

    public clearCanvas(backgroundColor?: any, context?: any, transparentBackground?: any):void {
        this.jsuiEngine.canvasObjects = this.canvasObjects;
        this.jsuiEngine.drawImage(backgroundColor, context, transparentBackground);
    }

    public refreshScreen(transparentBackground?: any, context?: any, objectList?: any):void {
        objectList = (objectList ? objectList : this.canvasObjects);
        this.jsuiEngine.canvasObjects = this.canvasObjects;
        this.jsuiEngine.refreshScreen(transparentBackground, context, objectList);
    }

    public mouseEventHandler(e: any, eventType: any, objectList?:Array<ObjectModel>):void {
        objectList = (objectList ? objectList : this.canvasObjects);
        this.jsuiEngine.mouseEventHandler(e, eventType, objectList);
    }

    public checkMouseCollision(mouseX: number, mouseY: number, objectList?:Array<ObjectModel>):void {
        objectList = (objectList ? objectList : this.canvasObjects);
        this.jsuiEngine.mouseEventHandler(mouseX, mouseY, objectList);
    }




}