/*
 * name: LinkIt
 * author: Jyotsna Singh
 * version: 0.1.0
 * license: MIT
 */

(function($){
 
		$.fn.linkIt = function(options){
			//Default Settings
			var settings = $.extend({ //extend function merges second object into first. 
				href :null,			  //2nd obj is options which is what user puts in the function
				text :null,
				target :'_self'
			}, options);
			
			//Validation
			if(settings.href == null){
				console.log('Your need an href option for LinkIt to work');
				return this;
			}
			
			return this.each(function(){
				var object = $(this);
				
				if(settings.text == null){
					settings.text = object.text();
				}
			
			
			object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
			});
			}
 
 }(jQuery));