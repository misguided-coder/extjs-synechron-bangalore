Ext.define("Automobile.view.car.CarList",{
	extend:"Ext.grid.Panel",
	alias:'widget.carList',
	title:'Car Wish List',
	
	initComponent: function() {
		this.store = 'Car';
		this.columns = [
			Ext.create("Ext.grid.RowNumberer",{
				width:20
			}),
			{
				text:'VIN',
				dataIndex:'vin',
				width: 80,
				hidden:true
			},
			{
				text:'Name',
				dataIndex:'model',
				renderer:function(value,meta,record,row,col,store,view){
					var ver = record.get('version');
					return ver ==  0? value : value+''+ver;	
				}

			},
			{
				text:'Make',
				dataIndex:'make',
				draggable:false,
				resizable:false
			},
			{
				text:'Color',
				dataIndex:'color',
				sortable : false,
			},
			{
				xtype:'numbercolumn',
				text:'Price',
				dataIndex:'price',
			},
			{
					
				xtype:'booleancolumn',
				text:'Launched',
				dataIndex:'launched',
				width:80,
				trueText: 'Yes',
                falseText: 'No',
            },
			{
				xtype:'datecolumn',	
				text:'LaunchDate',
				dataIndex:'launchDate',
				flex:2,
				format:'d-M-y'
			}
				
		];
		this.callParent(arguments);
	}

});