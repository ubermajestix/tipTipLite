## tipTipLite is a tooltip plugin.##
Why? Well its mostly like tipTip, but tipTip won't work with canvas or svg (like flot or raphael).
So tipTipLite offers more control over content, placement, and loading content dynamically, and that's awesome.
####
tipTipLite will load whatever content you throw at it and place the tooltip next to the mouse given a mouse event:

    $("#example_1").click(function(e){
       $.tipTipLite('an example of some content loaded using jQuery, notice this text is not in the html markup anywhere', {mouse_event: e})
       return false;
     });

You can explicitly set the coordinates of the tooltip box like so:

    $("#example_2").click(function(e){
      var offset = $(this).offset()
      $.tipTipLite('an example of custom position', {x: 100, y: offset.left})
      return false;
    });

Loading dynamic, ajaxy, content can be fun and rewarding.

    $("#example_3").click(function(e){
       $.ajax({
         url: 'content.json',
         type: 'GET',
         dataType: 'json',
         success: function(json){
           $.tipTipLite(json, {mouse_event: e})
         }
       })
        return false;
      });

Copyright 2010 CollectiveIntellect, Tyler Montgomery
same license as TipTip (below)

This plugin is based on:
TipTip
Copyright 2010 Drew Wilson
www.drewwilson.com
code.drewwilson.com/entry/tiptip-jquery-plugin

Version 1.3   -   Updated: Mar. 23, 2010


This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
  http://www.opensource.org/licenses/mit-license.php
  http://www.gnu.org/licenses/gpl.html
