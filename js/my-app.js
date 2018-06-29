// Initialize your app
var myApp = new Framework7({
	// Default title for modals
	root:'#app',
	theme: 'md',
    modalTitle: 'Framework7',
	panel: {
		swipe: 'left',
	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
    swipePanel: 'left',
	material: true,
	routes: [
		{
		path: '/chocolaty/',
    	url: 'chocolaty.html',
    	name: 'chocolaty',
  		},
		{
		path: '/raspberry/',
    	url: 'raspberry.html',
    	name: 'raspberry',
  		},
		
	]
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;



// Add another view, which is in right panel





 

