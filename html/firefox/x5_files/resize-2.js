var Resizeable=Class.create();Resizeable.prototype={initialize:function(b){var a=Object.extend({top:6,bottom:6,left:6,right:6,minHeight:0,minWidth:0,maxHeight:0,zindex:1000,resize:null,handle:null,update:null},arguments[1]||{});this.element=$(b);if(a.handle){this.handle=a.handle}else{this.handle=this.element}Element.makePositioned(this.element);this.options=a;this.active=false;this.resizing=false;this.currentDirection="";this.eventMouseDown=this.startResize.bindAsEventListener(this);this.eventMouseUp=this.endResize.bindAsEventListener(this);this.eventMouseMove=this.update.bindAsEventListener(this);this.eventCursorCheck=this.cursor.bindAsEventListener(this);this.eventKeypress=this.keyPress.bindAsEventListener(this);this.registerEvents()},destroy:function(){Event.stopObserving(this.handle,"mousedown",this.eventMouseDown);this.unregisterEvents()},registerEvents:function(){Event.observe(document,"mouseup",this.eventMouseUp);Event.observe(document,"mousemove",this.eventMouseMove);Event.observe(document,"keypress",this.eventKeypress);Event.observe(this.handle,"mousedown",this.eventMouseDown);if(this.options.handle==null){Event.observe(this.element,"mousemove",this.eventCursorCheck)}},unregisterEvents:function(){},startResize:function(c){if(Event.isLeftClick(c)){var d=Event.element(c);if(d.tagName&&(d.tagName=="INPUT"||d.tagName=="SELECT"||d.tagName=="BUTTON"||d.tagName=="TEXTAREA")){return}var a="n";if(a.length>0){this.active=true;var b=Position.cumulativeOffset(this.element);this.startTop=b[1];this.startLeft=b[0];this.startWidth=parseInt(Element.getStyle(this.element,"width"));this.startHeight=parseInt(Element.getStyle(this.element,"height"));this.startX=c.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;this.startY=c.clientY+document.body.scrollTop+document.documentElement.scrollTop;this.currentDirection=a;Event.stop(c)}}},finishResize:function(a,b){this.active=false;this.resizing=false;if(this.options.zindex){this.element.style.zIndex=this.originalZ}if(this.options.resize){this.options.resize(this.element)}},keyPress:function(a){if(this.active){if(a.keyCode==Event.KEY_ESC){this.finishResize(a,false);Event.stop(a)}}},endResize:function(a){if(this.active&&this.resizing){this.finishResize(a,true);Event.stop(a)}this.active=false;this.resizing=false},draw:function(e){var g=[Event.pointerX(e),Event.pointerY(e)];var c=this.element.style;if(this.currentDirection.indexOf("n")!=-1){var b=this.startY-g[1];var f=Element.getStyle(this.element,"margin-top")||"0";var a=this.startHeight+b;if(a>this.options.minHeight&&(this.options.maxHeight==0||a<this.options.maxHeight)){c.height=a+"px"}}if(this.currentDirection.indexOf("w")!=-1){var b=this.startX-g[0];var f=Element.getStyle(this.element,"margin-left")||"0";var d=this.startWidth+b;if(d>this.options.minWidth){c.left=(this.startLeft-b-parseInt(f))+"px";c.width=d+"px"}}if(this.currentDirection.indexOf("s")!=-1){var a=this.startHeight+g[1]-this.startY;if(a>this.options.minHeight){c.height=a+"px"}}if(this.currentDirection.indexOf("e")!=-1){var d=this.startWidth+g[0]-this.startX;if(d>this.options.minWidth){c.width=d+"px"}}if(c.visibility=="hidden"){c.visibility=""}if(typeof this.options.update=="function"){this.options.update(this.element)}},between:function(c,a,b){return(c>=a&&c<b)},directions:function(b){var d=[Event.pointerX(b),Event.pointerY(b)];var a=Position.cumulativeOffset(this.element);var c="";if(this.between(d[1]-a[1],0,this.options.top)){c+="n"}if(this.between((a[1]+this.element.offsetHeight)-d[1],0,this.options.bottom)){c+="s"}if(this.between(d[0]-a[0],0,this.options.left)){c+="w"}if(this.between((a[0]+this.element.offsetWidth)-d[0],0,this.options.right)){c+="e"}return c},cursor:function(a){var b=this.directions(a);if(b.length>0){b+="-resize"}else{b=""}this.element.style.cursor=b},update:function(b){if(this.active){if(!this.resizing){var a=this.element.style;this.resizing=true;if(Element.getStyle(this.element,"position")==""){a.position="relative"}if(this.options.zindex){this.originalZ=parseInt(Element.getStyle(this.element,"z-index")||0);a.zIndex=this.options.zindex}}this.draw(b);if(navigator.appVersion.indexOf("AppleWebKit")>0){window.scrollBy(0,0)}Event.stop(b);return false}}};