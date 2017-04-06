import * as JSUI from 'js-ui-engine';
import { ObjectModel } from './object.model';
import { StyleModel } from './style.model';

const _versionNumber: string = "1.20170405.1";

export class JSUIEngine {

    private jsuiEngine = new JSUI();

    public debug: {
        _version: {},
        _wrapperVersion: string,
        setLevel: {},
        getLevel: {},
        toggle: {},
        getToggleConst: {},
    } = {
        "_version": () => { return this.jsuiEngine.debug._version; },
        "_wrapperVersion": _versionNumber,
        "setLevel": this.jsuiEngine.debug.setLevel,
        "getLevel": this.jsuiEngine.debug.getLevel,
        "toggle": this.jsuiEngine.debug.toggle,
        "getToggleConst": this.jsuiEngine.debug.getToggleConst
    }


    constructor() {
        this.jsuiEngine = new JSUI();
        
    }

    public setupCanvas(objCanvas: any, objectList?:Array<ObjectModel>, backgroundObject?: any): any {
        return this.jsuiEngine.setupCanvas(objCanvas, objectList, backgroundObject);
    }

    public renderObjects(objectList?:Array<ObjectModel>):boolean {
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
        this.jsuiEngine.drawImage(backgroundColor, context, transparentBackground);
    }

    public mouseEventHandler(e: any, eventType: any, objectList?:Array<ObjectModel>):void {
        this.jsuiEngine.mouseEventHandler(e, eventType, objectList);
    }

    public checkMouseCollision(mouseX: number, mouseY: number, objectList?:Array<ObjectModel>):void {
        this.jsuiEngine.mouseEventHandler(mouseX, mouseY, objectList);
    }




}