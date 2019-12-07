Ext.define("Automobile.controller.Cars",{
	extend:"Ext.app.Controller",
	
	views:['car.CarList','car.CarDetail'],
	stores:['Car'],
	models:['Car'],

	refs:[
		{
			selector:'carDetail',
			ref:'carDetailPanel'
		}
	],

	init:function(){
		console.log('Initialized Cars Controller');
		
		this.getCarStore().load();
		
		this.control({
			'viewport > carList dataview': {
				'itemclick' : this.updateDetailPanel,
			}	
		});
	},

	updateDetailPanel : function(grid,record){
		console.log('Item Row clicked!');
		//console.log(record);
		this.getCarDetailPanel().showData(record.data);
	}

});