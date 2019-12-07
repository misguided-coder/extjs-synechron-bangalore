Ext.define("Automobile.store.Car",{
	extend:"Ext.data.Store",
	model:'Automobile.model.Car',
	groupField: 'make',
	//autoLoad:true,
	sorters:[
		{
			property:'price',
			direction:'DESC'
		}
	],
	proxy:{
		type:'ajax',
		api:{
			read:'app/data/cars.json'
		},
		reader:{
			type:'json'
		}	
	}
});

