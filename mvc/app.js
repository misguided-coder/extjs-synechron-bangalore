/*Ext.Loader.setConfig({ 
    enabled: true
});*/

Ext.application({

	name:'Automobile',
	appFolder:'app',

	controllers:['Cars'],
	views:['car.CarList','car.CarDetail'],
	stores:['Car'],

	launch:function(){
		console.log("Automobile aplication launched.");

		Ext.create('Ext.container.Viewport',{
			layout:'border',
			items:[
				{
					xtype:'carList',
					region:'center'
				},
				{
					xtype:'carDetail',
					region:'south',
					height:250,
				}
			]

		});
	}
});

