/*
* TipTip lite
* its alot like TipTip, in fact, you need the tiptip.css file for this to work
* TipTip doesn't play nice with canvas or svg elements... so thus the lite version exists
* Copyright 2010 CollectiveIntellect, Tyler Montgomery
* same license as TipTip (below)

* Usage:
* tipTipLite takes content, places it the tiptip looking div
* and puts it on the page where you tell it to go
*
* ex using coordinates:
* $.tipTipLite('content that you want in the tooltip', {x: 100, y: 200})
*
* ex using mouse position:
* $.tipTipLite('content to place by the mouse', {mouse_event: event})
* here, event is an object that responds to pageX and pageY

* This plugin is based on:
* TipTip
* Copyright 2010 Drew Wilson
* www.drewwilson.com
* code.drewwilson.com/entry/tiptip-jquery-plugin
*
* Version 1.3   -   Updated: Mar. 23, 2010
*
*
* This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*/

// TODO: arrow is not implemented
// TODO: fadein/fadeout tiptip

(function($){
  var tipTipLite = function() {}

  $.extend(tipTipLite.prototype, {
    //setup tiptip div's and variables
    setup: function(){
      if($('#tiptiplite_holder').length) {
        $('#tiptiplite_holder').remove();
      }

      tipTipLite.holder = $('<div id="tiptiplite_holder" style="max-width:200px;"></div>');
      tipTipLite.content = $('<div id="tiptip_content"></div>');
      tipTipLite.arrow = $('<div id="tiptip_arrow"></div>');
      $("body").append(tipTipLite.holder.html(tipTipLite.content).prepend(tipTipLite.arrow.html('<div id="tiptip_arrow_inner"></div>')));
    },

    show: function(content){
      opts = this.options
      tipTipLite.content.html(content)
      if(opts.mouse_event){
        // moves the mouse right 15 and down 5 from the cursor
        var x = parseInt(opts.mouse_event.pageX) + 15
        var y = parseInt(opts.mouse_event.pageY) + 5
      }
      //passing x or y coords will override mouse position coords
      if(opts.y){
        // log('set y', opts.y)
        var y = opts.y + 5
      }
      if(opts.x){
        // log('set x', opts.x)
        var x = opts.x + 15
      }
      tipTipLite.holder.css({top: y, left: x});
     
      if(tipTipLite.holder.is(':hidden')){
          tipTipLite.holder.show()
      }
      
      
      tipTipLite.holder.bind('click', function(){
        tipTipLite.holder.stop(true).fadeOut(200);
        return false;
      });
      
    },

    hide: function(){
      if(tipTipLite.holder.is(':visible')){
        // $('div#tiptiplite_holder').hide().remove();
        $("div#tiptiplite_holder").stop(true).fadeOut(200)
      }
    }
  });


  $.tipTipLite = function(content, opts) {
    var tiptip = $.tipTipLite.instance;
    if(!tiptip) { tiptip = $.tipTipLite.instance = new tipTipLite(); }
    tiptip.options = opts || {};
    tiptip.setup();
    tiptip.show(content);
    return tiptip;
  }

  $.tipTipLite.hide = function() {
    if($('div#tiptiplite_holder').is(':visible')){
      // $('div#tiptiplite_holder').hide().remove();
      $('div#tiptiplite_holder').stop(true).fadeOut(200)
    }
  }

  function log() {
    if (window.console) {
      console.log.apply(console, arguments);
    }
  }
})(jQuery);
